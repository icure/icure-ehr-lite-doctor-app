import { GetProp, UploadFile, UploadProps } from 'antd'

export const fileToInt8Array = async (file: File): Promise<Int8Array> => {
  return file.arrayBuffer().then((bytes) => new Int8Array(bytes))
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]
export const getFileUploaderCommonProps = (setPatientPictureAsInt8Array: (files: Int8Array | undefined) => void): UploadProps => {
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
        const int8Array = await fileToInt8Array(file)
        setPatientPictureAsInt8Array(int8Array)
      } catch (error) {
        console.error('Error converting file to Int8Array:', error)
      }
      // Prevent upload
      return false
    },
  }
}

export const getImgSRC = (picture: Int8Array | undefined) => {
  if (!picture) {
    return undefined
  }

  const blob = new Blob([picture], { type: 'image/png' }) // Adjust MIME type as necessary
  return URL.createObjectURL(blob)
}
