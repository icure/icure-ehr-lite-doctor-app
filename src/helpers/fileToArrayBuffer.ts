import { GetProp, UploadFile, UploadProps } from 'antd'

export const fileToArrayBuffer = (file: File): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      const arrayBuffer = reader.result as ArrayBuffer
      resolve(arrayBuffer)
    }

    reader.onerror = (error) => {
      reject(error)
    }

    reader.readAsArrayBuffer(file)
  })
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]
export const getFileUploaderCommonProps = (setPatientPictureAsArrayBuffer: (files: ArrayBuffer | undefined) => void): UploadProps => {
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
        const arrayBuffer = await fileToArrayBuffer(file)
        setPatientPictureAsArrayBuffer(arrayBuffer)
      } catch (error) {
        console.error('Error converting file to ArrayBuffer:', error)
      }
      // Prevent upload
      return false
    },
  }
}

export const getImgSRCFromArrayBuffer = (picture: ArrayBuffer | undefined) => {
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

  return `data:image/png;base64,${arrayBufferToBase64(picture)}`
}
