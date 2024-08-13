import { GetProp, UploadFile, UploadProps } from 'antd'
import { fromByteArray } from 'base64-js'
export const fileToBase64 = async (file: File): Promise<string> => {
  return file.arrayBuffer().then((bytes) => fromByteArray(new Uint8Array(bytes)))
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]
export const getFileUploaderCommonProps = (setPatientPictureAsBase64: (files: string | undefined) => void): UploadProps => {
  return {
    onPreview: async (file: UploadFile) => {
      let src = file.url as string
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader()
          reader.readAsDataURL(file.originFileObj as FileType)
          reader.onload = () => resolve(reader.result as string)
        })
      }
      const image = new Image()
      image.src = src
      const imgWindow = window.open(src)
      imgWindow?.document.write(image.outerHTML)
    },
    beforeUpload: async (file) => {
      try {
        const base64String = await fileToBase64(file)
        setPatientPictureAsBase64(base64String)
      } catch (error) {
        console.error('Error converting file to Base64:', error)
      }
      // Prevent upload
      return false
    },
  }
}

export const getImgSRC = (picture: string | undefined) => {
  if (!picture) {
    return undefined
  }

  const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
    let binary = ''
    const bytes = new Uint8Array(buffer)
    const len = bytes.byteLength
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return window.btoa(binary)
  }

  return `data:image/png;base64,${picture}`
}
