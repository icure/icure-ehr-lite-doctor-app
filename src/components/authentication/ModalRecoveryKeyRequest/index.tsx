import { Alert, Form, Input } from 'antd'
import React from 'react'

import { resolveCurrentRequest, useKeyRecoveryRequest } from '../../../core/services/keyRecoveryBridge'
import { CustomModal } from '../../common/CustomModal'

import './index.less'

export const ModalRecoveryKeyRequest = () => {
  const [form] = Form.useForm<{ recoveryKey: string }>()
  const request = useKeyRecoveryRequest()

  const isVisible = !!request
  const reasonsLabel = request?.reasons.length ? Array.from(new Set(request.reasons)).join(', ') : 'Undefined'

  const handleSubmit = ({ recoveryKey }: { recoveryKey: string }) => {
    const keys = recoveryKey
      .split(/\r?\n/)
      .map((k) => k.trim())
      .filter((k) => k.length > 0)
    if (keys.length === 0) {
      return
    }
    form.resetFields()
    resolveCurrentRequest({ kind: 'recovered', recoveryKeys: keys })
  }

  const handleSkip = () => {
    form.resetFields()
    resolveCurrentRequest({ kind: 'cancel' })
  }

  return (
    <CustomModal
      isVisible={isVisible}
      handleClose={handleSkip}
      secondaryBtnTitle="Skip"
      handleClickPrimaryBtn={() => form.submit()}
      primaryBtnTitle="Submit"
      title="Provide your recovery key"
    >
      <div className="modalRecoveryKeyRequest">
        <Alert
          title={
            <>
              <p>We couldn’t find the encryption keys needed to access your sensitive data. Paste the recovery key you saved when creating your account.</p>
              <p>
                You can paste several keys, one per line, if you have keys for parent organisations as well. Skip if you don’t have one — you will still be logged in but cannot
                decrypt previously stored data.
              </p>
              <p>
                [<span className="highlighted">Reason:</span> {reasonsLabel}]
              </p>
            </>
          }
          type="error"
          showIcon
        />

        <Form className="modalRecoveryKeyRequest__form" layout="vertical" colon={false} form={form} onFinish={handleSubmit}>
          <Form.Item name="recoveryKey" label="Recovery key(s)" rules={[{ required: true, message: 'Recovery key is required' }]}>
            <Input.TextArea rows={4} placeholder="xxxx-xxxx-xxxx-xxxx-..." autoFocus />
          </Form.Item>
        </Form>
      </div>
    </CustomModal>
  )
}
