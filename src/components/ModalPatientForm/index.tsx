import { AddressType, DecryptedAddress, DecryptedPatient, DecryptedTelecom, Gender, PersonName, PersonNameUse, TelecomType } from '@icure/cardinal-sdk'
import type { GetProps, UploadFile, UploadProps } from 'antd'
import { DatePicker, Form, Input, Select, Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import dayjs from 'dayjs'
import React, { ReactElement, useEffect, useState } from 'react'
import { DEFAULT_IMG_CROP_MODAL_WIDTH } from '../../constants'
import { useCreateOrUpdatePatientMutation } from '../../core/api/patientApi'
import { getFileUploaderCommonProps, getImgSRC } from '../../helpers/fileToBase64'
import { getPatientDataFormated } from '../../helpers/patientDataManipulations'
import { breakpoints, getWindowSize } from '../../helpers/windowSize'

import { CustomModal, getCustomModalResponsiveStyles } from '../CustomModal'
import './index.css'
import { SpinLoader } from '../SpinLoader'

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>

type PatientForm = {
  firstName: string
  lastName: string
  dateOfBirth: number
  gender: Gender
  phoneNumber: string
  emailAddress: string
  country: string
  city: string
  street: string
  houseNumber: string
  postalCode: string
  picture: Int8Array | undefined
}

interface ModalPatientFormProps {
  mode: 'edit' | 'create'
  isVisible: boolean
  onClose: () => void
  patientToEdit?: DecryptedPatient
}

export const ModalPatientForm = ({ mode, isVisible, onClose, patientToEdit }: ModalPatientFormProps): ReactElement => {
  const [patientPictureAsInt8Array, setPatientPictureAsInt8Array] = useState<Int8Array | undefined>(undefined)
  const patientAvatarSrc = patientToEdit?.picture
  const [fileList, setFileList] = useState<UploadFile[]>(
    patientAvatarSrc
      ? [
          {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: getImgSRC(patientAvatarSrc),
          },
        ]
      : [],
  )
  const [form] = Form.useForm()

  const [
    createOrUpdatePatient,
    { error: createOrUpdatePatientError, isError: isCreateOrUpdatePatientError, isSuccess: isPatientCreatedOrUpdateSuccessfully, isLoading: isPatientCreatingOrUpdatingLoading },
  ] = useCreateOrUpdatePatientMutation()

  if (isCreateOrUpdatePatientError) {
    console.log(createOrUpdatePatientError)
  }

  const getPreparedUserData = (value: PatientForm) => {
    const { firstName, lastName, dateOfBirth, gender, phoneNumber, emailAddress, country, city, street, houseNumber, postalCode } = value
    const name = new PersonName({
      firstNames: [firstName],
      lastName: lastName,
      use: PersonNameUse.Official,
    })
    const address = new DecryptedAddress({
      addressType: AddressType.Home,
      telecoms: [
        new DecryptedTelecom({
          telecomType: TelecomType.Email,
          telecomNumber: emailAddress,
        }),
        new DecryptedTelecom({
          telecomType: TelecomType.Mobile,
          telecomNumber: phoneNumber,
        }),
      ],
      country,
      city,
      street,
      houseNumber,
      postalCode,
    })
    const dateOfBirthUnixTimestamp = dayjs(dateOfBirth).unix()
    const picture = patientPictureAsInt8Array ?? patientAvatarSrc

    return { firstName, lastName, gender, names: [name], addresses: [address], dateOfBirth: dateOfBirthUnixTimestamp, picture }
  }
  const handleSubmit = (value: PatientForm) => {
    if (mode === 'create') createOrUpdatePatient(new DecryptedPatient(getPreparedUserData(value)))
    if (mode === 'edit') createOrUpdatePatient(new DecryptedPatient({ ...patientToEdit, ...getPreparedUserData(value) }))

    form.resetFields()
  }
  const getPatientToEdit = (patient: DecryptedPatient) => {
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
    if (isPatientCreatedOrUpdateSuccessfully) {
      onClose()
    }
  }, [isPatientCreatedOrUpdateSuccessfully])

  const handleOnClose = () => {
    setFileList([])
    setPatientPictureAsInt8Array(undefined)
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
      setPatientPictureAsInt8Array(undefined)
    },
  }

  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf('day')
  }
  const dateFormat = 'DD.MM.YYYY'
  const { innerWidth } = getWindowSize()

  return (
    <CustomModal
      isVisible={isVisible}
      handleClose={handleOnClose}
      secondaryBtnTitle="Cancel"
      handleClickPrimaryBtn={() => form.submit()}
      primaryBtnTitle="Save"
      title={mode === 'edit' ? 'Edit patient' : 'Create patient'}
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
                <DatePicker format={dateFormat} placeholder="Date of birth" size="large" style={{ width: '100%' }} disabledDate={disabledDate} />
              </Form.Item>
              <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Gender is required' }]}>
                <Select placeholder="Gender" size="large">
                  <Option value={Gender.Male}>{Gender.Male}</Option>
                  <Option value={Gender.Female}>{Gender.Female}</Option>
                  <Option value={Gender.Indeterminate}>{Gender.Indeterminate}</Option>
                  <Option value={Gender.Changed}>{Gender.Changed}</Option>
                  <Option value={Gender.ChangedToMale}>{Gender.ChangedToMale}</Option>
                  <Option value={Gender.ChangedToFemale}>{Gender.ChangedToFemale}</Option>
                  <Option value={Gender.Unknown}>{Gender.Unknown}</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Picture" valuePropName="file">
                <ImgCrop
                  rotationSlider
                  modalClassName="PatientImgCrop"
                  modalWidth={innerWidth < breakpoints.md ? '100vw' : DEFAULT_IMG_CROP_MODAL_WIDTH}
                  modalProps={{ style: getCustomModalResponsiveStyles(innerWidth < breakpoints.md) }}
                >
                  <Upload {...fileUploaderProps} {...getFileUploaderCommonProps((data: Int8Array | undefined) => setPatientPictureAsInt8Array(data))}>
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
