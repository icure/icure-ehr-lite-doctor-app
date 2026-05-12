import {
  base64Decode,
  CryptoStrategies,
  hexEncode,
  KeypairFingerprintV1String,
  RecoveryDataKey,
  RecoveryDataUseFailureReason,
  RecoveryResult,
  RsaEncryptionAlgorithm,
  RsaSignatureAlgorithm,
  spkiHexKeyToFingerprintV1,
  SpkiHexString,
  XRsaKeypair,
} from '@icure/cardinal-sdk'
import { Alert, Button, Form, Input, Segmented, Upload } from 'antd'
import type { UploadProps } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import React, { useMemo, useState } from 'react'

import { KeyRecoveryRequest, RecoveredKeysByOwner, resolveCurrentRequest, useKeyRecoveryRequest } from '../../../core/services/keyRecoveryBridge'
import { CustomModal } from '../../common/CustomModal'

import './index.less'

type Channel = 'recovery' | 'pkcs8'

interface PendingKey {
  ownerId: string
  publicKey: SpkiHexString
  fingerprint: KeypairFingerprintV1String
  algorithm: CryptoStrategies.UnavailableKeyInfo['keyAlgorithm']
}

const stripPemAndWhitespace = (input: string): string =>
  input
    .replace(/-----BEGIN [^-]+-----/g, '')
    .replace(/-----END [^-]+-----/g, '')
    .replace(/\s+/g, '')

const isEncryptedPkcs8 = (input: string): boolean => /-----BEGIN ENCRYPTED PRIVATE KEY-----/i.test(input)

// Same normalization that the previous Petra implementation did before handing the key to the SDK.
const normalizeRecoveryKey = (input: string): string =>
  input
    .replace(/[\s-]+/g, '')
    .toUpperCase()
    .replace(/0/g, 'O')
    .replace(/1/g, 'I')
    .replace(/8/g, 'B')

const failureReasonText = (reason: RecoveryDataUseFailureReason): string => {
  switch (reason) {
    case RecoveryDataUseFailureReason.Missing:
      return 'This recovery key was not found.'
    case RecoveryDataUseFailureReason.Unauthorized:
      return 'You are not authorized to use this recovery key.'
    case RecoveryDataUseFailureReason.InvalidType:
      return 'This recovery key is of an unexpected type.'
    case RecoveryDataUseFailureReason.InvalidContent:
      return 'This recovery key is malformed.'
    default:
      return 'This recovery key could not be used.'
  }
}

const collectPendingKeys = (request: KeyRecoveryRequest, accumulator: RecoveredKeysByOwner): PendingKey[] =>
  request.keysData.flatMap((kd) => {
    const ownerId = kd.dataOwnerDetails.dataOwner.id
    const recoveredForOwner = accumulator[ownerId] ?? {}
    return kd.unavailableKeys
      .map((info) => {
        const fingerprint = spkiHexKeyToFingerprintV1(info.publicKey) as KeypairFingerprintV1String
        const alreadyRecovered = recoveredForOwner[fingerprint] ?? recoveredForOwner[info.publicKey]
        if (alreadyRecovered) return undefined
        return {
          ownerId,
          publicKey: info.publicKey,
          fingerprint,
          algorithm: info.keyAlgorithm,
        }
      })
      .filter((p): p is PendingKey => p !== undefined)
  })

export const ModalRecoveryKeyRequest = () => {
  const request = useKeyRecoveryRequest()

  const [channel, setChannel] = useState<Channel>('recovery')
  const [accumulator, setAccumulator] = useState<RecoveredKeysByOwner>({})
  const [recoveryKeyInput, setRecoveryKeyInput] = useState('')
  const [pkcs8Text, setPkcs8Text] = useState('')
  const [pkcs8FileName, setPkcs8FileName] = useState<string | undefined>()
  const [error, setError] = useState<string | undefined>()
  const [info, setInfo] = useState<string | undefined>()
  const [submitting, setSubmitting] = useState(false)

  const pendingKeys = useMemo(() => (request ? collectPendingKeys(request, accumulator) : []), [request, accumulator])

  const recoveredCount = useMemo(() => Object.values(accumulator).reduce((sum, perOwner) => sum + Object.keys(perOwner).length, 0), [accumulator])
  const totalUnavailable = useMemo(() => (request ? request.keysData.reduce((sum, kd) => sum + kd.unavailableKeys.length, 0) : 0), [request])

  const isVisible = !!request

  const resetTransient = () => {
    setError(undefined)
    setInfo(undefined)
  }

  const closeWith = (outcome: Parameters<typeof resolveCurrentRequest>[0]) => {
    setAccumulator({})
    setRecoveryKeyInput('')
    setPkcs8Text('')
    setPkcs8FileName(undefined)
    setChannel('recovery')
    resetTransient()
    resolveCurrentRequest(outcome)
  }

  const handleSkip = () => closeWith({ kind: 'cancel' })

  const handleFinish = () => {
    if (recoveredCount === 0) {
      closeWith({ kind: 'cancel' })
      return
    }
    closeWith({ kind: 'recovered', keys: accumulator })
  }

  const mergeKeypair = (ownerId: string, fingerprint: KeypairFingerprintV1String, keypair: XRsaKeypair) => {
    setAccumulator((prev) => ({
      ...prev,
      [ownerId]: { ...(prev[ownerId] ?? {}), [fingerprint]: keypair },
    }))
  }

  const submitRecoveryKey = async () => {
    if (!request) return
    resetTransient()
    const lines = recoveryKeyInput
      .split(/\r?\n/)
      .map(normalizeRecoveryKey)
      .filter((k) => k.length > 0)
    if (lines.length === 0) {
      setError('Please paste at least one recovery key.')
      return
    }

    setSubmitting(true)
    try {
      let recoveredAny = false
      const failures: string[] = []
      for (const normalized of lines) {
        let decoded: RecoveryDataKey
        try {
          decoded = RecoveryDataKey.fromBase32(normalized)
        } catch {
          failures.push('Invalid recovery key format.')
          continue
        }
        const result = await request.keyPairRecoverer.recoverWithRecoveryKey(decoded, false)
        if (result instanceof RecoveryResult.Failure) {
          failures.push(failureReasonText(result.reason))
          continue
        }
        const data = result.data
        for (const [ownerId, byPub] of Object.entries(data)) {
          for (const [pub, kp] of Object.entries(byPub)) {
            const fp = spkiHexKeyToFingerprintV1(pub) as KeypairFingerprintV1String
            mergeKeypair(ownerId, fp, kp)
            recoveredAny = true
          }
        }
      }

      if (recoveredAny) {
        setRecoveryKeyInput('')
        if (failures.length > 0) {
          setInfo(`Some keys were imported. ${failures.length} entry(ies) failed: ${failures.join(' ')}`)
        } else {
          setInfo('Recovery key accepted.')
        }
      } else {
        setError(failures.join(' ') || 'No keys could be recovered from the input.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  const tryAlgorithmsForPkcs8 = async (bytes: Int8Array): Promise<{ keypair: XRsaKeypair; importedHex: string } | undefined> => {
    if (!request) return undefined
    const algorithms = Array.from(new Set(pendingKeys.map((p) => p.algorithm)))
    // Fall back to the full algorithm enum if no pending keys (defensive: we shouldn't get here in that case).
    const candidates =
      algorithms.length > 0 ? algorithms : ([RsaEncryptionAlgorithm.OaepWithSha256, RsaEncryptionAlgorithm.OaepWithSha1, RsaSignatureAlgorithm.PssWithSha256] as const)
    for (const algorithm of candidates) {
      try {
        const keypair = await request.cryptoPrimitives.rsa.loadKeyPairPkcs8(algorithm, bytes)
        const importedSpki = await request.cryptoPrimitives.rsa.exportPublicKeySpki(keypair.public)
        return { keypair, importedHex: hexEncode(importedSpki).toLowerCase() }
      } catch {
        // Try the next algorithm.
      }
    }
    return undefined
  }

  const submitPkcs8 = async () => {
    if (!request) return
    resetTransient()
    if (!pkcs8Text.trim()) {
      setError('Please paste a PKCS8 private key or upload a PEM file.')
      return
    }
    if (isEncryptedPkcs8(pkcs8Text)) {
      setError('Encrypted PKCS8 keys are not supported. Please decrypt the key first.')
      return
    }
    const cleaned = stripPemAndWhitespace(pkcs8Text)
    if (!cleaned) {
      setError('The pasted content does not look like a PKCS8 private key.')
      return
    }

    setSubmitting(true)
    try {
      let bytes: Int8Array
      try {
        bytes = base64Decode(cleaned)
      } catch {
        setError('Could not decode the base64 contents of the private key.')
        return
      }

      const loaded = await tryAlgorithmsForPkcs8(bytes)
      if (!loaded) {
        setError('The provided private key could not be parsed with any of the expected algorithms.')
        return
      }

      const match = pendingKeys.find((p) => p.publicKey.toLowerCase() === loaded.importedHex)
      if (!match) {
        setError('This private key does not match any of the keys we are still trying to recover.')
        return
      }

      mergeKeypair(match.ownerId, match.fingerprint, loaded.keypair)
      setPkcs8Text('')
      setPkcs8FileName(undefined)
      setInfo('Private key imported.')
    } finally {
      setSubmitting(false)
    }
  }

  const uploadProps: UploadProps = {
    accept: '.pem,.key,.pkcs8,.txt',
    multiple: false,
    showUploadList: false,
    beforeUpload: (file) => {
      file
        .text()
        .then((text) => {
          setPkcs8Text(text)
          setPkcs8FileName(file.name)
          resetTransient()
        })
        .catch(() => setError('Could not read the selected file.'))
      return false
    },
  }

  const hasPending = pendingKeys.length > 0
  const reasonsLabel = request?.reasons.length ? Array.from(new Set(request.reasons)).join(', ') : 'Undefined'

  return (
    <CustomModal
      isVisible={isVisible}
      handleClose={handleSkip}
      secondaryBtnTitle={recoveredCount > 0 ? 'Cancel' : 'Skip'}
      handleClickPrimaryBtn={handleFinish}
      primaryBtnTitle={recoveredCount > 0 ? `Finish (${recoveredCount}/${totalUnavailable})` : 'Skip'}
      title="Provide your recovery key"
    >
      <div className="modalRecoveryKeyRequest">
        <Alert
          message={
            <>
              <p>We couldn’t find the encryption keys needed to access your sensitive data. Provide a recovery key, or paste/upload one of the original PKCS8 private keys.</p>
              <p>
                You can repeat the operation for multiple keys. Skip if you don’t have any — you will still be logged in but cannot decrypt previously stored data.
                {totalUnavailable > 0 ? ` ${recoveredCount}/${totalUnavailable} keys recovered so far.` : ''}
              </p>
              <p>
                [<span className="highlighted">Reason:</span> {reasonsLabel}]
              </p>
            </>
          }
          type="error"
          showIcon
        />

        <Segmented<Channel>
          block
          value={channel}
          onChange={(v) => {
            setChannel(v)
            resetTransient()
          }}
          options={[
            { label: 'Recovery key', value: 'recovery' },
            { label: 'Private key (PKCS8)', value: 'pkcs8' },
          ]}
        />

        {channel === 'recovery' ? (
          <Form layout="vertical" colon={false} className="modalRecoveryKeyRequest__form">
            <Form.Item label="Recovery key(s)" help="Paste one or more keys, one per line.">
              <Input.TextArea
                rows={4}
                placeholder="xxxx-xxxx-xxxx-xxxx-..."
                value={recoveryKeyInput}
                onChange={(e) => setRecoveryKeyInput(e.target.value)}
                disabled={submitting}
                autoFocus
              />
            </Form.Item>
            <div className="modalRecoveryKeyRequest__actions">
              <Button type="primary" onClick={submitRecoveryKey} disabled={submitting || !hasPending} loading={submitting}>
                Try recovery key
              </Button>
            </div>
          </Form>
        ) : (
          <Form layout="vertical" colon={false} className="modalRecoveryKeyRequest__form">
            <Form.Item label="PEM file">
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />} disabled={submitting}>
                  {pkcs8FileName ? `Replace file (${pkcs8FileName})` : 'Choose PEM file'}
                </Button>
              </Upload>
            </Form.Item>
            <Form.Item label="Or paste the PKCS8 private key" help="Plain PEM (-----BEGIN PRIVATE KEY-----) or raw base64. Encrypted keys are not supported.">
              <Input.TextArea
                rows={6}
                placeholder={'-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----'}
                value={pkcs8Text}
                onChange={(e) => {
                  setPkcs8Text(e.target.value)
                  if (pkcs8FileName) setPkcs8FileName(undefined)
                }}
                disabled={submitting}
                spellCheck={false}
              />
            </Form.Item>
            <div className="modalRecoveryKeyRequest__actions">
              <Button type="primary" onClick={submitPkcs8} disabled={submitting || !hasPending} loading={submitting}>
                Import private key
              </Button>
            </div>
          </Form>
        )}

        {error ? <Alert type="error" showIcon message={error} /> : null}
        {info && !error ? <Alert type="success" showIcon message={info} /> : null}
        {!hasPending && totalUnavailable > 0 ? <Alert type="info" showIcon message="All missing keys have been recovered. You can finish now." /> : null}
      </div>
    </CustomModal>
  )
}
