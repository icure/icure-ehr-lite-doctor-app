import { AddressType, DecryptedAddress, DecryptedTelecom, HealthcareParty, TelecomType } from '@icure/cardinal-sdk'
import { Form, Input, Upload, UploadFile, UploadProps } from 'antd'
import ImgCrop from 'antd-img-crop'
import React, { ReactElement, useEffect, useState } from 'react'
import { useCreateOrUpdatePractitionerMutation } from '../../../core/api/practitionerApi'
import { getFileUploaderCommonProps, getImgSRC } from '../../../helpers/fileToBase64'

import { CustomModal } from '../../common/CustomModal'
import { SpinLoader } from '../../common/SpinLoader'
import './index.css'

interface ModalManageAccountFormProps {
  isVisible: boolean
  onClose: () => void
  practitionerToBeUpdated?: HealthcareParty
}

export const ModalManageAccountForm = ({ isVisible, onClose, practitionerToBeUpdated }: ModalManageAccountFormProps): ReactElement => {
  const [form] = Form.useForm()
  const [updatePractitioner, { isSuccess: isPractitionerUpdatedSuccessfully, isLoading: isPractitionerUpdatingLoading }] = useCreateOrUpdatePractitionerMutation()

  const userAvatarSrc = getImgSRC(practitionerToBeUpdated?.picture)

  const [patientPictureAsBase64, setPatientPictureAsBase64] = useState<Int8Array | undefined>(undefined)
  const [fileList, setFileList] = useState<UploadFile[]>(
    !userAvatarSrc
      ? []
      : [
          {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: userAvatarSrc,
          },
        ],
  )
  const handleSubmit = (value: { firstName: string; lastName: string; emailAddress: string; ssin: string; nihii: string }) => {
    const { firstName, lastName, emailAddress, nihii, ssin } = value
    const address = new DecryptedAddress({
      addressType: AddressType.Home,
      telecoms: [
        new DecryptedTelecom({
          telecomType: TelecomType.Email,
          telecomNumber: emailAddress,
        }),
      ],
    })
    const picture = patientPictureAsBase64 ?? practitionerToBeUpdated?.picture
    updatePractitioner(new HealthcareParty({ ...practitionerToBeUpdated, firstName, lastName, addresses: [address], picture, ssin, nihii }))
    form.resetFields()
  }

  useEffect(() => {
    if (isPractitionerUpdatedSuccessfully) {
      onClose()
    }
  }, [isPractitionerUpdatedSuccessfully])

  const practitionerEmail = practitionerToBeUpdated?.addresses[0].telecoms.find((item) => item.telecomType === TelecomType.Email)?.telecomNumber

  const fileUploaderProps: UploadProps = {
    listType: 'picture-card',
    multiple: false,
    showUploadList: {
      showRemoveIcon: true,
    },
    maxCount: 1,
    fileList: fileList,
    onChange: ({ fileList: newFileList }) => {
      setFileList(newFileList)
    },
    onRemove() {
      setFileList([])
      setPatientPictureAsBase64(undefined)
    },
  }

  return (
    <CustomModal isVisible={isVisible} handleClose={onClose} secondaryBtnTitle="Cancel" handleClickPrimaryBtn={() => form.submit()} primaryBtnTitle="Save" title="Manage Account">
      <div className="modalManageAccountForm">
        {isPractitionerUpdatingLoading && <SpinLoader />}
        <Form
          className="modalManageAccountForm__form"
          layout="vertical"
          onFinish={(values) => handleSubmit(values)}
          colon={false}
          form={form}
          initialValues={{
            emailAddress: practitionerEmail,
            firstName: practitionerToBeUpdated?.firstName,
            lastName: practitionerToBeUpdated?.lastName,
            ssin: practitionerToBeUpdated?.ssin,
            nihii: practitionerToBeUpdated?.nihii,
            file: practitionerToBeUpdated?.picture,
          }}
        >
          <div className="modalManageAccountForm__form__inputs">
            <Form.Item name="firstName" label="First name" rules={[{ required: true, message: 'First name is required' }]}>
              <Input placeholder="First name" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item name="lastName" label="Last name" rules={[{ required: true, message: 'Last name is required' }]}>
              <Input placeholder="Last name" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item name="emailAddress" label="Email address" rules={[{ required: true, message: 'Email address is required' }]}>
              <Input placeholder="Email address" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item name="ssin" label="Social Security Identification Number (SSIN)" rules={[{ required: true, message: 'SSIN is required' }]}>
              <Input placeholder="SSIN" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item
              name="nihii"
              label="Number assigned by the National Institute for Health and Invalidity Insurance"
              rules={[{ required: true, message: 'NIHII is required' }]}
            >
              <Input placeholder="NIHII" size="large" style={{ fontSize: 13 }} />
            </Form.Item>

            <Form.Item label="Picture" valuePropName="file">
              <ImgCrop rotationSlider modalClassName="PatientImgCrop">
                <Upload {...fileUploaderProps} {...getFileUploaderCommonProps((data: Int8Array | undefined) => setPatientPictureAsBase64(data))}>
                  {fileList.length === 0 ? '+ Upload' : '+ Replace'}
                </Upload>
              </ImgCrop>
            </Form.Item>
          </div>
        </Form>
      </div>
    </CustomModal>
  )
}
