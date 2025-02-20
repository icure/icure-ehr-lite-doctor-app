import * as XLSX from 'xlsx'
import { UploadedPatientsTableEnum } from './types'

export const sheetTitle = 'Patients-sheet-example'
export const getExampleSheetBuffer = () => {
  // Generate Excel Sheet
  const exampleSheet = XLSX.utils.book_new()
  const columns = [
    { title: UploadedPatientsTableEnum.NAME, dataIndex: 'name', key: 'name' },
    { title: UploadedPatientsTableEnum.SURNAME, dataIndex: 'surname', key: 'surname' },
    { title: UploadedPatientsTableEnum.EMAIL, dataIndex: 'email', key: 'email' },
    { title: UploadedPatientsTableEnum.TAGS, dataIndex: 'tags', key: 'tags' },
  ]
  exampleSheet.Props = { Title: sheetTitle }
  exampleSheet.SheetNames.push(sheetTitle)
  const columnTitles = columns.map((col) => col.title)
  exampleSheet.Sheets[sheetTitle] = XLSX.utils.aoa_to_sheet([columnTitles])
  // Convert Binary String to ArrayBuffer
  const binaryToArrayBuffer = (binary: string) => {
    const buffer = new ArrayBuffer(binary.length)
    const view = new Uint8Array(buffer)
    for (let i = 0; i < binary.length; i++) {
      view[i] = binary.charCodeAt(i) & 0xff
    }
    return buffer
  }

  const exampleSheetBinary = XLSX.write(exampleSheet, { bookType: 'xlsx', type: 'binary' })
  return binaryToArrayBuffer(exampleSheetBinary)
}
