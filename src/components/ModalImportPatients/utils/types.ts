export type UploadedPatientType = {
  name: string
  surname: string
  email: string
  tags: string
}

export enum UploadedPatientsTableEnum {
  NAME = 'Name',
  SURNAME = 'Surname',
  EMAIL = 'Email',
  TAGS = 'Tags',
}
