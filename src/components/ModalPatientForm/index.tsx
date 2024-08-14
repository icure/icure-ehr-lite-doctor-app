import React, { useEffect, useState } from 'react'
import { DatePicker, Form, Input, Select, Upload } from 'antd'
import type { GetProp, UploadFile, UploadProps } from 'antd'
import { ContactPoint, GenderEnum, HumanName, HumanNameUseEnum, Location, LocationAddressTypeEnum, Patient, ContactPointTelecomTypeEnum } from '@icure/ehr-lite-sdk'
import ImgCrop from 'antd-img-crop'
import dayjs from 'dayjs'

import { CustomModal } from '../CustomModal'
import './index.css'
import { SpinLoader } from '../SpinLoader'
import { useCreateOrUpdatePatientMutation } from '../../core/api/patientApi'
import { getFileUploaderCommonProps, getImgSRC } from '../../helpers/fileToBase64'
import { getPatientDataFormated } from '../../helpers/patientDataManipulations'

type PatientForm = {
  firstName: string
  lastName: string
  dateOfBirth: number
  gender: GenderEnum
  phoneNumber: string
  emailAddress: string
  country: string
  city: string
  street: string
  houseNumber: string
  postalCode: string
}
interface ModalPatientFormProps {
  mode: 'edit' | 'create'
  isVisible: boolean
  onClose: () => void
  patientToEdit?: Patient
}

export const ModalPatientForm = ({ mode, isVisible, onClose, patientToEdit }: ModalPatientFormProps): JSX.Element => {
  const [patientPictureAsBase64, setPatientPictureAsBase64] = useState<string | undefined>(undefined)
  const patientAvatarSrc = getImgSRC(patientToEdit?.picture)
  const [fileList, setFileList] = useState<UploadFile[]>(
    patientAvatarSrc
      ? [
          {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: patientAvatarSrc ?? undefined,
          },
        ]
      : [],
  )
  const [form] = Form.useForm()

  const [
    createOrUpdatePatient,
    {
      data: updatedPatient,
      error: createOrUpdatePatientError,
      isError: isCreateOrUpdatePatientError,
      isSuccess: isPatientCreatedOrUpdateSuccessfully,
      isLoading: isPatientCreatingOrUpdatingLoading,
    },
  ] = useCreateOrUpdatePatientMutation()

  isCreateOrUpdatePatientError && console.log(createOrUpdatePatientError)

  const getPreparedUserData = (value: PatientForm) => {
    const { firstName, lastName, dateOfBirth, gender, phoneNumber, emailAddress, country, city, street, houseNumber, postalCode } = value
    const name = new HumanName({
      given: [firstName],
      family: lastName,
      use: HumanNameUseEnum.OFFICIAL,
    })
    const address = new Location({
      addressType: LocationAddressTypeEnum.HOME,
      telecoms: [
        new ContactPoint({
          system: ContactPointTelecomTypeEnum.EMAIL,
          value: emailAddress,
        }),
        new ContactPoint({
          system: ContactPointTelecomTypeEnum.MOBILE,
          value: phoneNumber,
        }),
      ],
      country,
      city,
      street,
      houseNumber,
      postalCode,
    })
    const dateOfBirthUnixTimestamp = dayjs(dateOfBirth).unix()
    const picture = patientPictureAsBase64 ?? patientAvatarSrc

    return { firstName, lastName, gender, names: [name], addresses: [address], dateOfBirth: dateOfBirthUnixTimestamp, picture }
  }

  const handleSubmit = (value: PatientForm) => {
    if (mode === 'create') createOrUpdatePatient(new Patient(getPreparedUserData(value)))
    if (mode === 'edit') createOrUpdatePatient(new Patient({ ...patientToEdit, ...getPreparedUserData(value) }))

    form.resetFields()
  }

  const getPatientToEdit = (patient: Patient) => {
    const { firstName, lastName, dateOfBirth, gender, phoneNumber, emailAddress, country, city, street, houseNumber, postalCode, picture } = getPatientDataFormated(patient)
    return {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth ? dayjs.unix(dateOfBirth) : undefined,
      gender,
      phoneNumber,
      emailAddress,
      country,
      city,
      street,
      houseNumber,
      postalCode,
      picture,
    }
  }

  useEffect(() => {
    isPatientCreatedOrUpdateSuccessfully && onClose()
  }, [isPatientCreatedOrUpdateSuccessfully])

  const handleOnClose = () => {
    setFileList([])
    setPatientPictureAsBase64(undefined)
    form.resetFields()
    onClose()
  }

  const { Option } = Select

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
    <CustomModal
      isVisible={isVisible}
      handleClose={handleOnClose}
      closeBtnTitle="Cancel"
      handleOk={() => form.submit()}
      okBtnTitle="Save"
      title={mode === 'edit' ? 'Edit Patient' : 'Create Patient'}
    >
      <div className="modalPatientForm">
        {isPatientCreatingOrUpdatingLoading && <SpinLoader />}
        <Form
          className="modalPatientForm__form"
          layout="vertical"
          colon={false}
          form={form}
          onFinish={(values) => handleSubmit(values)}
          initialValues={mode === 'edit' && patientToEdit ? getPatientToEdit(patientToEdit) : {}}
        >
          <div className="modalPatientForm__form__infoBlock">
            <h3 className="modalPatientForm__form__infoBlock__title">Main information:</h3>
            <div className="modalPatientForm__form__infoBlock__inputs">
              <Form.Item name="firstName" label="First name" rules={[{ required: true, message: 'First name is required' }]}>
                <Input placeholder="First name" size="large" />
              </Form.Item>
              <Form.Item name="lastName" label="Last name" rules={[{ required: true, message: 'Last name is required' }]}>
                <Input placeholder="Last name" size="large" />
              </Form.Item>
              <Form.Item name="dateOfBirth" label="Date of birth" rules={[{ required: true, message: 'Date of birth is required' }]}>
                <DatePicker format="DD.MM.YYYY" placeholder="Date of birth" size="large" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Gender is required' }]}>
                <Select placeholder="Gender" size="large">
                  <Option value={GenderEnum.MALE}>{GenderEnum.MALE}</Option>
                  <Option value={GenderEnum.FEMALE}>{GenderEnum.FEMALE}</Option>
                  <Option value={GenderEnum.INDETERMINATE}>{GenderEnum.INDETERMINATE}</Option>
                  <Option value={GenderEnum.CHANGED}>{GenderEnum.CHANGED}</Option>
                  <Option value={GenderEnum.CHANGED_TO_MALE}>{GenderEnum.CHANGED_TO_MALE}</Option>
                  <Option value={GenderEnum.CHANGED_TO_FEMALE}>{GenderEnum.CHANGED_TO_FEMALE}</Option>
                  <Option value={GenderEnum.UNKNOWN}>{GenderEnum.UNKNOWN}</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Picture" valuePropName="file">
                <ImgCrop rotationSlider modalClassName="PatientImgCrop">
                  <Upload {...fileUploaderProps} {...getFileUploaderCommonProps((data: string | undefined) => setPatientPictureAsBase64(data))}>
                    {fileList.length === 0 ? '+ Upload' : '+ Replace'}
                  </Upload>
                </ImgCrop>
              </Form.Item>
            </div>
          </div>
          <div className="modalPatientForm__form__infoBlock">
            <h3 className="modalPatientForm__form__infoBlock__title">Contacts:</h3>
            <div className="modalPatientForm__form__infoBlock__inputs">
              <Form.Item name="phoneNumber" label="Phone number" rules={[{ required: true, message: 'Phone number is required' }]}>
                <Input placeholder="Phone number" size="large" />
              </Form.Item>
              <Form.Item name="emailAddress" label="Email address" rules={[{ required: true, message: 'Email address is required' }]}>
                <Input placeholder="Email address" size="large" />
              </Form.Item>
            </div>
          </div>
          <div className="modalPatientForm__form__infoBlock">
            <h3 className="modalPatientForm__form__infoBlock__title">Home address:</h3>
            <div className="modalPatientForm__form__infoBlock__inputs">
              <Form.Item name="country" label="Country" rules={[{ required: true, message: 'Country is required' }]}>
                <Input placeholder="Country" size="large" />
              </Form.Item>
              <Form.Item name="city" label="City" rules={[{ required: true, message: 'City is required' }]}>
                <Input placeholder="City" size="large" />
              </Form.Item>
              <Form.Item name="street" label="Street" rules={[{ required: true, message: 'Street is required' }]}>
                <Input placeholder="Street" size="large" />
              </Form.Item>
              <Form.Item name="houseNumber" label="House number" rules={[{ required: true, message: 'House number is required' }]}>
                <Input placeholder="House number" size="large" />
              </Form.Item>
              <Form.Item name="postalCode" label="Postal code" rules={[{ required: true, message: 'Postal code is required' }]}>
                <Input placeholder="Postal code" size="large" />
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </CustomModal>
  )
}
