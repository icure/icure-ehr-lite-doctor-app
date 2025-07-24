import Icon from '@ant-design/icons'
import { AddressType, DecryptedAddress, DecryptedPatient, DecryptedTelecom, Gender, PersonName, PersonNameUse, TelecomType } from '@icure/cardinal-sdk'
import { Alert, Button, Upload, UploadFile, UploadProps } from 'antd'
import { saveAs } from 'file-saver'
import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import { attachedFileIcn, deleteIcn } from '../../../../assets/CustomIcons'
import { useCreatePatientsMutation } from '../../../../core/api/patientApi'

import { CustomModal } from '../../../common/CustomModal'
import './index.css'
import { SpinLoader } from '../../../common/SpinLoader'
import { PatientToUploadTable } from './PatientToUploadTable'
import { getExampleSheetBuffer, sheetTitle } from './utils/fileUtils'
import { UploadedPatientsTableTitlesEnum, UploadedPatientType } from './utils/types'

interface ModalImportPatientsProps {
  isVisible: boolean
  onClose: () => void
}

type ComponentStateType = 'upload' | 'import'

export const ModalImportPatients = ({ onClose, isVisible }: ModalImportPatientsProps) => {
  const [componentState, setComponentState] = useState<ComponentStateType>('upload')
  const getModalTitle = (state: ComponentStateType): string => (state === 'upload' ? 'Upload file' : 'Import patients')
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [uploadState, setUploadState] = useState({
    validRowsList: [] as UploadedPatientType[],
    unValidEmailRowsList: [] as UploadedPatientType[],
    missingFieldsRowsList: [] as UploadedPatientType[],
  })

  const [createPatients, { error: createPatientsError, isError: isCreatePatientsError, isSuccess: isPatientsCreatedSuccessfully, isLoading: isPatientsCreatingLoading }] =
    useCreatePatientsMutation()

  useEffect(() => {
    if (isPatientsCreatedSuccessfully) {
      onClose()
    }
  }, [isPatientsCreatedSuccessfully])

  if (isCreatePatientsError) console.error(createPatientsError)

  const handleImport = () => {
    const getPreparedPatientData = (value: UploadedPatientType) => {
      const { firstName, lastName, ssin, email, birthSex, language, dateOfBirth } = value
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
            telecomNumber: email,
          }),
        ],
      })

      const getBirthSex = (birthSex: string): Gender | undefined => {
        if (birthSex === 'Male' || birthSex === 'M') return Gender.Male
        if (birthSex === 'Female' || birthSex === 'F') return Gender.Female
        return undefined
      }
      return {
        firstName,
        lastName,
        ssin: ssin?.toString(),
        names: [name],
        dateOfBirth: dateOfBirth,
        birthSex: birthSex ? getBirthSex(birthSex) : undefined,
        addresses: [address],
        languages: language ? [language] : [],
      }
    }
    const patientsToBeCreated = uploadState.validRowsList.map((patient) => new DecryptedPatient(getPreparedPatientData(patient)))
    createPatients(patientsToBeCreated)
  }

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isEmail = (email: string): boolean => emailRegExp.test(email)
  const SheetJSFT = ['xlsx', 'xls', 'xml', 'csv', 'txt', 'ods'].map((x) => '.' + x).join(', ')

  const handleChange: UploadProps['onChange'] = (info) => {
    setFileList([info.file])
    setComponentState('import')
  }

  const handleDelete = (file: UploadFile) => {
    // in case if multiple: true
    setFileList((prev) => prev.filter((item) => item.uid !== file.uid))

    setUploadState({
      missingFieldsRowsList: [],
      unValidEmailRowsList: [],
      validRowsList: [],
    })
    setComponentState('upload')
  }
  const handleFileUpload = (file: File) => {
    const reader = new FileReader()
    const isTextFile = (filename: string) => filename.endsWith('.csv') || filename.endsWith('.txt') || filename.endsWith('.xml')

    reader.onload = (e) => {
      if (!e.target?.result) return

      let workbook

      if (isTextFile(file.name)) {
        // Text-based file
        const text = e.target.result as string
        workbook = XLSX.read(text, { type: 'string', codepage: 65001 })
      } else {
        // Binary-based file
        const data = new Uint8Array(e.target.result as ArrayBuffer)
        workbook = XLSX.read(data, { type: 'array', bookVBA: true })
      }

      if (!workbook) return
      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]

      if (!worksheet) return
      const jsonData = XLSX.utils.sheet_to_json(worksheet) as { [key: string]: string }[]

      // Process Data
      const formattedData = jsonData.map((row) => ({
        firstName: row[UploadedPatientsTableTitlesEnum.FIRST_NAME],
        lastName: row[UploadedPatientsTableTitlesEnum.LAST_NAME],
        ssin: row[UploadedPatientsTableTitlesEnum.SSIN],
        email: row[UploadedPatientsTableTitlesEnum.EMAIL],
        birthSex: row[UploadedPatientsTableTitlesEnum.BIRTH_SEX],
        dateOfBirth: +row[UploadedPatientsTableTitlesEnum.DATE_OF_BIRTH],
        language: row[UploadedPatientsTableTitlesEnum.LANGUAGE],
      }))

      // Validate Data
      setUploadState({
        validRowsList: formattedData.filter((row) => !!row.firstName && !!row.lastName),
        unValidEmailRowsList: formattedData.filter((row) => !isEmail(row.email)),
        missingFieldsRowsList: formattedData.filter((row) => !row.firstName || !row.lastName),
      })
    }

    reader.onerror = (e) => {
      console.error('FileReader error:', e)
    }

    if (isTextFile(file.name)) {
      reader.readAsText(file, 'utf-8')
    } else {
      reader.readAsArrayBuffer(file)
    }

    return false // Prevent automatic upload
  }

  const uploadProps: UploadProps = {
    accept: SheetJSFT,
    beforeUpload: handleFileUpload,
    onChange: handleChange,
    onRemove: handleDelete,
    maxCount: 1,
    multiple: false,
    showUploadList: false,
  }

  const customFooter = () => {
    return [
      <div key="customFooter" className="customFooter">
        <Upload {...uploadProps}>
          <Button type="primary">Upload file</Button>
        </Upload>
        <div className="customFooter__btnsRight">
          <Button onClick={onClose}>Cancel</Button>

          <Button type="primary" onClick={handleImport} disabled={componentState !== 'import' || uploadState.validRowsList.length === 0}>
            Import patients
          </Button>
        </div>
      </div>,
    ]
  }

  return (
    <CustomModal isVisible={isVisible} handleClose={onClose} customFooter={customFooter()} title={getModalTitle(componentState)}>
      <div className="modalImportPatients">
        {<SpinLoader /> && isPatientsCreatingLoading}
        {componentState === 'upload' && (
          <div className="modalImportPatients__upload">
            <p>
              To import patients, upload a file in one of supported formats (.xlsx, .xls, .xml, .csv, .txt, .ods) with the correct field structure (you can find it in the template
              <a onClick={() => saveAs(new Blob([getExampleSheetBuffer()], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), `${sheetTitle}.xlsx`)}>
                Download the template here
              </a>
              ).
            </p>

            <Alert
              message={
                <>
                  <p>
                    Entries will be rejected if required fields are missing: <span className="highlighted"> Fist Name and Last Name.</span>
                  </p>
                  <p>
                    The Date of Birth should be in the <span className="highlighted">YYYYMMDD</span> format. For example: 20250131
                  </p>
                </>
              }
              type="warning"
              showIcon
            />
          </div>
        )}
        {componentState === 'import' && (
          <div className="modalImportPatients__import">
            <div className="modalImportPatients__import__results">
              {uploadState.missingFieldsRowsList.length !== 0 && (
                <div className="modalImportPatients__import__results__item">
                  <Alert message="Entries were rejected due to missing required fields." type="error" showIcon />
                  <PatientToUploadTable patients={uploadState.missingFieldsRowsList} />
                </div>
              )}
              {uploadState.unValidEmailRowsList.length !== 0 && (
                <div className="modalImportPatients__import__results__item">
                  <Alert message="Entries were rejected due to invalid email." type="error" showIcon />
                  <PatientToUploadTable patients={uploadState.unValidEmailRowsList} />
                </div>
              )}
              {uploadState.validRowsList.length !== 0 && (
                <div className="modalImportPatients__import__results__item">
                  <Alert message="Entries were successfully uploaded and ready to be imported." type="success" showIcon />
                  <PatientToUploadTable patients={uploadState.validRowsList} />
                </div>
              )}
            </div>
            <div className="modalImportPatients__import__fileList">
              {fileList.map((file, index) => (
                <div key={index} className="modalImportPatients__import__fileList__item">
                  <div className="modalImportPatients__import__fileList__item__title">
                    <Icon component={attachedFileIcn} className="icon attachedFileIcn" />
                    <p>{file.name}</p>
                  </div>

                  <Icon component={deleteIcn} onClick={() => handleDelete(file)} className="icon deleteIcn" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </CustomModal>
  )
}
