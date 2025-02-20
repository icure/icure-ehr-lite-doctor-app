import Icon from '@ant-design/icons'
import { AddressType, CodeStub, DecryptedAddress, DecryptedPatient, DecryptedTelecom, PersonName, PersonNameUse, TelecomType } from '@icure/cardinal-sdk'
import { Alert, Button, Upload, UploadFile, UploadProps } from 'antd'
import { saveAs } from 'file-saver'
import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import { attachedFileIcn, deleteIcn } from '../../assets/CustomIcons'
import { useCreatePatientsMutation } from '../../core/api/patientApi'

import { CustomModal } from '../CustomModal'
import './index.css'
import { SpinLoader } from '../SpinLoader'
import { PatientToUploadTable } from './PatientToUploadTable'
import { getExampleSheetBuffer, sheetTitle } from './utils/fileUtils'
import { UploadedPatientsTableEnum, UploadedPatientType } from './utils/types'

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
      const { name: firstName, surname: lastName, email, tags: tagsAsString } = value
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
      const getTags = () => {
        const separatedTags = tagsAsString.split(',')
        return separatedTags.map((tag) => {
          const tagType = 'PETRACARE'
          const tagVersion = '1'

          return new CodeStub({
            id: `${tagType}|${tag}|${tagVersion}`,
            type: tagType,
            code: tag,
            version: tagVersion,
          })
        })
      }

      return { firstName, lastName, names: [name], addresses: [address], tags: getTags() }
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
    reader.onload = (e) => {
      if (!e.target?.result) return
      const bstr = e.target.result as string
      const workbook = XLSX.read(bstr, { type: 'binary', bookVBA: true })

      if (!workbook) return
      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]

      if (!worksheet) return
      const jsonData = XLSX.utils.sheet_to_json(worksheet) as { [key: string]: string }[]

      // Process Data
      const formattedData = jsonData.map((row) => ({
        name: row[UploadedPatientsTableEnum.NAME],
        surname: row[UploadedPatientsTableEnum.SURNAME],
        email: row[UploadedPatientsTableEnum.EMAIL],
        tags: row[UploadedPatientsTableEnum.TAGS],
      }))

      // Validate Data
      setUploadState({
        validRowsList: formattedData.filter((row) => !!row.name && !!row.surname && !!row.email && isEmail(row.email) && !!row.tags),
        unValidEmailRowsList: formattedData.filter((row) => row.email && !isEmail(row.email)),
        missingFieldsRowsList: formattedData.filter((row) => !row.name || !row.surname || !row.email || !row.tags),
      })
    }

    reader.readAsBinaryString(file)
    return false // Prevent upload
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
    return (
      <div className="customFooter">
        <Upload {...uploadProps}>
          <Button type="primary">Upload file</Button>
        </Upload>
        <div className="customFooter__btnsRight">
          <Button onClick={onClose}>Cancel</Button>

          <Button type="primary" onClick={handleImport} disabled={componentState !== 'import' || uploadState.validRowsList.length === 0}>
            Import patients
          </Button>
        </div>
      </div>
    )
  }

  return (
    <CustomModal isVisible={isVisible} handleClose={onClose} customFooter={customFooter()} title={getModalTitle(componentState)}>
      <div className="modalImportPatients">
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
                <p>
                  Entries will be rejected if required fields are missing: <span className="highlighted"> Name, Surname, Email, and Tags.</span>
                </p>
              }
              type="warning"
              showIcon
            />
          </div>
        )}
        {componentState === 'import' && (
          <div className="modalImportPatients__import">
            {isPatientsCreatingLoading && <SpinLoader />}
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
