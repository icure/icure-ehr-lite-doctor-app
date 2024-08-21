import React, { useEffect, useState, ReactElement } from 'react'
import { Alert, Button, Popconfirm, Typography } from 'antd'
import { RSA, ShaVersion, ua2hex } from '@icure/api'
import { Practitioner } from '@icure/ehr-lite-sdk'
import { SystemMetaDataOwner } from '@icure/typescript-common/models/SystemMetaDataOwner.model'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { CustomModal } from '../CustomModal'
import './index.css'
import { useCreateOrUpdatePractitionerMutation, useGetPractitionerQuery } from '../../core/api/practitionerApi'
import CopyJSONButton from '../CopyAsJsonButton'

interface ModalConfirmActionProps {
  onClose: () => void
  isVisible: boolean
  practitionerId: string
}
type KeyPairJsonDataType = {
  practitionerId: string
  practitionerName: string
  privateKey: string
  publicKey: string
}
export const ModalCryptographicKeypair = ({ onClose, isVisible, practitionerId }: ModalConfirmActionProps) => {
  const [componentState, setComponentState] = useState<'beforeGeneratingWarning' | 'error' | 'keypairHasBeenAlreadyGenerated' | 'keypairIsGenerated'>('beforeGeneratingWarning')

  const [publicKey, setPublicKey] = useState<string | undefined>(undefined)
  const [privateKey, setPrivateKey] = useState<string | undefined>(undefined)
  const [generationKeypairError, setGenerationKeypairError] = useState<string | undefined>(undefined)
  const [keyPairJsonData, setKeyPairJsonData] = useState<KeyPairJsonDataType | undefined>(undefined)

  const [modifyPractitioner, { isLoading, error: modifyPractitionerError, reset: resetModifyingPractitioner }] = useCreateOrUpdatePractitionerMutation()
  const { currentData: practitioner, error: getPractitionerError } = useGetPractitionerQuery(practitionerId, { skip: !practitionerId })
  const practitionerPublicKey = practitioner?.systemMetaData?.publicKey

  const generateKeypair = async (): Promise<{ privateKey: string; publicKey: string }> => {
    try {
      const keypair = await RSA.generateKeyPair(ShaVersion.Sha256)
      const exportPrivKey = await RSA.exportKey(keypair.privateKey, 'pkcs8')
      const exportPubKey = await RSA.exportKey(keypair.publicKey, 'spki')
      return {
        privateKey: ua2hex(exportPrivKey),
        publicKey: ua2hex(exportPubKey),
      }
    } catch (error) {
      console.error('Error generating keypair:', error)
      setComponentState('error')
      throw error
    }
  }

  useEffect(() => {
    practitionerPublicKey && setComponentState('keypairHasBeenAlreadyGenerated')
  }, [])

  useEffect(() => {
    ;(!!getPractitionerError || !!modifyPractitionerError || !!generationKeypairError) && setComponentState('error')
  }, [getPractitionerError, modifyPractitionerError, generationKeypairError])

  useEffect(() => {
    generateKeypair()
      .then((keypair) => {
        setPublicKey(keypair.publicKey)
        setPrivateKey(keypair.privateKey)

        setKeyPairJsonData({
          practitionerId: practitioner?.id ?? '' + '',
          practitionerName: practitioner?.name ?? `${practitioner?.firstName}_${practitioner?.lastName}`,
          privateKey: keypair.privateKey,
          publicKey: keypair.publicKey,
        })
        return
      })
      .catch((error: string) => {
        setGenerationKeypairError(error)
        console.error('Error:', error)
      })
  }, [practitioner?.id])

  const defaultOnClose = () => {
    setPublicKey(undefined)
    setPrivateKey(undefined)
    setGenerationKeypairError(undefined)
    setKeyPairJsonData(undefined)
    onClose()
  }
  const getOnCloseFunction = () => {
    switch (componentState) {
      case 'keypairIsGenerated': {
        return undefined
      }
      default: {
        defaultOnClose()
      }
    }
  }
  const getOnCloseTitle = (): string => {
    switch (componentState) {
      case 'beforeGeneratingWarning': {
        return 'Go back'
      }
      default: {
        return 'Close'
      }
    }
  }
  const getOnOkFunction = () => {
    switch (componentState) {
      case 'beforeGeneratingWarning': {
        practitioner && modifyPractitioner(new Practitioner({ ...practitioner, systemMetaData: new SystemMetaDataOwner({ ...practitioner.systemMetaData, publicKey }) }))
        setComponentState('keypairIsGenerated')
      }
    }
  }
  const getOnOkTitle = (): string | ReactElement | undefined => {
    switch (componentState) {
      case 'beforeGeneratingWarning': {
        return 'Generate now'
      }
      case 'keypairIsGenerated': {
        return (
          keyPairJsonData && (
            <CopyJSONButton
              jsonData={keyPairJsonData}
              jsonName={`${practitioner?.firstName}_${practitioner?.lastName}_CryptographicKeypair`}
              buttonTitle="Download the keypair as a JSON"
            />
          )
        )
      }
      default: {
        return undefined
      }
    }
  }
  const getComponentContent = () => {
    switch (componentState) {
      case 'beforeGeneratingWarning': {
        return (
          <>
            <Alert
              message="Cryptographic keypair missing"
              description="To continue using PetraCare, you must generate a cryptographic keypair.
            Without this keypair, you will not be able to create patients or perform other essential actions. Please generate your keypair to proceed."
              type="error"
              showIcon
            />
            <Alert
              message="Important Reminder"
              description="You can only generate the keypair once, so be sure to have a secure place ready to store it before you start.
          You’ll need these keys for future use."
              type="warning"
              showIcon
            />
          </>
        )
      }
      case 'keypairIsGenerated': {
        return (
          <>
            <Alert
              message="Cryptographic keypair successfully generated!"
              description={
                <ul className="modalCryptographicKeypair__allertDescription">
                  <li>Save Your Private Key: You will not be able to see the private key again, as we do not store it on our servers.</li>
                  <li>Keep It Safe: Keep your private key secure and do not share it with anyone.</li>
                  <li>No Key, No Access: If you lose your private key, you will lose access to your data.</li>
                </ul>
              }
              type="success"
              showIcon
            />
            <div className="modalCryptographicKeypair__keypairContainer">
              <Alert
                message="Private Key"
                description={
                  <Typography.Paragraph className="values-token" copyable={{ text: privateKey }}>
                    {privateKey?.slice(0, 200) + '...'}
                  </Typography.Paragraph>
                }
                type="info"
              />
              <Alert
                message="Public Key"
                description={
                  <Typography.Paragraph className="values-token" copyable={{ text: publicKey }}>
                    {publicKey?.slice(0, 200) + '...'}
                  </Typography.Paragraph>
                }
                type="info"
              />
            </div>
          </>
        )
      }
      case 'keypairHasBeenAlreadyGenerated': {
        return (
          <>
            <Alert
              message="Cryptographic keypair has been already generated!"
              description="Your cryptographic keypair was generated earlier.
              Below is your Public Key. We do not have access to your Private Key, so hopefully, you saved it securely at the time of generation."
              type="success"
              showIcon
            />
            <Alert
              message="Public Key"
              description={
                <Typography.Paragraph className="values-token" copyable={{ text: practitionerPublicKey }}>
                  {practitionerPublicKey?.slice(0, 200) + '...'}
                </Typography.Paragraph>
              }
              type="info"
            />
          </>
        )
      }
      case 'error': {
        const getError = (error: FetchBaseQueryError | SerializedError) => {
          if (error) {
            if ('status' in error) {
              // you can access all properties of `FetchBaseQueryError` here
              return 'error' in error ? error.error : JSON.stringify(error.data)
            }
            // you can access all properties of `SerializedError` here
            return error?.message
          }
        }
        const errorMessage =
          typeof generationKeypairError === 'string'
            ? generationKeypairError
            : !!getPractitionerError
            ? getError(getPractitionerError)
            : !!modifyPractitionerError
            ? getError(modifyPractitionerError)
            : 'An unexpected error occurred. Please try again, and if the problem persists, contact support for assistance.'
        return <Alert message="Oops! Something went wrong..." description={errorMessage} type="error" showIcon />
      }
    }
  }
  const getCustomFooter = () => (
    <div className="customFooter">
      {/*Here could be another btn*/}
      <div> </div>
      <div className="customFooter__btnGroup">
        {componentState === 'keypairIsGenerated' ? (
          <Popconfirm
            title="Close this window?"
            description={
              <div className="modalCryptographicKeypair__popconfirm">
                <p>The Private Key won’t be available in PetraCare anymore.</p>
                <p>Make sure it’s securely saved before proceeding.</p>
              </div>
            }
            onConfirm={defaultOnClose}
            okText="Yes"
            cancelText="No"
            placement="topRight"
          >
            <Button key="back">Close</Button>
          </Popconfirm>
        ) : (
          <Button key="back" onClick={() => getOnCloseFunction()}>
            {getOnCloseTitle()}
          </Button>
        )}
        {!!getOnOkTitle() ? (
          <Button
            key="submit"
            type="primary"
            onClick={() => getOnOkFunction()}
            disabled={isLoading || !!generationKeypairError || !!modifyPractitionerError || !!getPractitionerError}
          >
            {getOnOkTitle()}
          </Button>
        ) : undefined}
      </div>
    </div>
  )

  return (
    <CustomModal isVisible={isVisible} handleClose={() => getOnCloseFunction()} title="Generate cryptographic keypair" customFooter={getCustomFooter()}>
      <div className="modalCryptographicKeypair">{getComponentContent()}</div>
    </CustomModal>
  )
}
