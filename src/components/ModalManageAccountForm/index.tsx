import React, { useEffect, useState } from 'react'
import { Form, Input, Upload, UploadFile, UploadProps } from 'antd'
import { Practitioner, Location, LocationAddressTypeEnum, ContactPoint } from '@icure/ehr-lite-sdk'

import { CustomModal } from '../CustomModal'
import { useCreateOrUpdatePractitionerMutation } from '../../core/api/practitionerApi'
import { SpinLoader } from '../SpinLoader'
import './index.css'
import ImgCrop from 'antd-img-crop'
import { getFileUploaderCommonProps, getImgSRC } from '../../helpers/fileToBase64'
import { ContactPointTelecomTypeEnum } from '@icure/ehr-lite-sdk/models/enums/ContactPointTelecomType.enum'

interface ModalManageAccountFormProps {
  isVisible: boolean
  onClose: () => void
  practitionerToBeUpdated?: Practitioner
}
export const ModalManageAccountForm = ({ isVisible, onClose, practitionerToBeUpdated }: ModalManageAccountFormProps): JSX.Element => {
  const [form] = Form.useForm()
  const [updatePractitioner, { isSuccess: isPractitionerUpdatedSuccessfully, isLoading: isPractitionerUpdatingLoading }] = useCreateOrUpdatePractitionerMutation()
  const userAvatarSrc = getImgSRC(practitionerToBeUpdated?.picture)
  const [patientPictureAsBase64, setPatientPictureAsBase64] = useState<string | undefined>(undefined)
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
  const handleSubmit = (value: any) => {
    const { firstName, lastName, emailAddress, speciality } = value
    const address = new Location({
      addressType: LocationAddressTypeEnum.HOME,
      telecoms: [
        new ContactPoint({
          system: ContactPointTelecomTypeEnum.EMAIL,
          value: emailAddress,
        }),
      ],
    })
    const picture = patientPictureAsBase64 ?? practitionerToBeUpdated?.picture

    updatePractitioner(new Practitioner({ ...practitionerToBeUpdated, firstName, lastName, speciality, addresses: [address], picture }))
    form.resetFields()
  }

  useEffect(() => {
    if (isPractitionerUpdatedSuccessfully) {
      onClose()
    }
  }, [isPractitionerUpdatedSuccessfully])

  const practitionerEmail = practitionerToBeUpdated?.addresses[0].telecoms.find((item) => item.system === 'email')?.value

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
    <CustomModal isVisible={isVisible} handleClose={onClose} closeBtnTitle="Cancel" handleOk={() => form.submit()} okBtnTitle="Save" title="Manage Account">
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
            speciality: practitionerToBeUpdated?.speciality,
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
            <Form.Item name="speciality" label="Speciality" rules={[{ required: true, message: 'Speciality is required' }]}>
              <Input placeholder="Speciality" size="large" style={{ fontSize: 13 }} />
            </Form.Item>
            <Form.Item label="Picture" valuePropName="file">
              <ImgCrop rotationSlider modalClassName="PatientImgCrop">
                <Upload {...fileUploaderProps} {...getFileUploaderCommonProps((data: string | undefined) => setPatientPictureAsBase64(data))}>
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
