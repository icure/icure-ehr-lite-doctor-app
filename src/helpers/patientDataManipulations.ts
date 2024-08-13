import { GenderEnum, Patient } from '@icure/ehr-lite-sdk'
import { ContactPointTelecomTypeEnum } from '@icure/ehr-lite-sdk/models/enums/ContactPointTelecomType.enum'
import { HumanNameUseEnum } from '@icure/ehr-lite-sdk/models/enums/HumanNameUse.enum'
import { LocationAddressTypeEnum } from '@icure/ehr-lite-sdk/models/enums/LocationAddressType.enum'
import dayjs from 'dayjs'

export interface PatientFormated {
  id: string
  firstName?: string
  lastName?: string
  dateOfBirth?: number
  gender?: GenderEnum
  phoneNumber?: string
  emailAddress?: string
  country?: string
  city?: string
  street?: string
  houseNumber?: string
  postalCode?: string
  homeAddressString?: string
  userNameOneString?: string
  userHomeAddressOneString?: string
  userDateOfBirthOneString?: string
  picture?: any
}

export const getPatientDataFormated = (patient: Patient): PatientFormated => {
  const { id, names, firstName, lastName, dateOfBirth, addresses, gender, picture } = patient
  const getTelecomBySystem = (telecomSystem: ContactPointTelecomTypeEnum) => {
    const expectedAddress = addresses?.find(({ telecoms }) => telecoms.some(({ system }) => system === telecomSystem))
    const expectedTelecom = expectedAddress?.telecoms.find(({ system }) => system === telecomSystem)
    return expectedTelecom?.value
  }
  // get username
  const officialUserNameObj = names.find((nameElement) => nameElement.use === HumanNameUseEnum.OFFICIAL)
  const userFirstName = officialUserNameObj && officialUserNameObj?.given?.length !== 0 ? officialUserNameObj?.given?.join(' ') : firstName
  const userLastName = officialUserNameObj?.family ?? lastName
  const userName = userFirstName && userLastName ? userFirstName.concat(' ', userLastName) : userFirstName ?? userLastName
  // get user home address
  const homeAddressObj = addresses?.find(({ addressType }) => addressType === LocationAddressTypeEnum.HOME)
  const homeAddressString = [homeAddressObj?.street, homeAddressObj?.houseNumber, homeAddressObj?.postalCode, homeAddressObj?.city, homeAddressObj?.country]
    .filter((el) => !!el)
    .join(', ')
  // get users birthday
  const userDateOfBirth = dateOfBirth ? dayjs.unix(dateOfBirth).format('DD.MM.YYYY') : '-'
  return {
    id,
    firstName: userFirstName,
    lastName: userLastName,
    dateOfBirth,
    gender,
    phoneNumber: getTelecomBySystem(ContactPointTelecomTypeEnum.MOBILE) ?? '-',
    emailAddress: getTelecomBySystem(ContactPointTelecomTypeEnum.EMAIL) ?? '-',
    country: homeAddressObj?.country,
    city: homeAddressObj?.city,
    street: homeAddressObj?.street,
    houseNumber: homeAddressObj?.houseNumber,
    postalCode: homeAddressObj?.postalCode,
    userNameOneString: userName,
    userHomeAddressOneString: homeAddressString.length !== 0 ? homeAddressString : '-',
    userDateOfBirthOneString: userDateOfBirth,
    picture: picture,
  }
}
