import dayjs from 'dayjs'
import { AddressType, DecryptedPatient, Gender, PersonNameUse, TelecomType } from '@icure/cardinal-sdk'

export interface PatientFormated {
  id: string
  firstName?: string
  lastName?: string
  dateOfBirth?: number
  gender?: Gender
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
  picture?: Int8Array
}

export const getPatientDataFormated = (patient: DecryptedPatient): PatientFormated => {
  const { id, names, firstName, lastName, dateOfBirth, addresses, gender, picture } = patient
  const getTelecomBySystem = (telecomSystem: TelecomType) => {
    const expectedAddress = addresses?.find(({ telecoms }) => telecoms.some(({ telecomType }) => telecomType === telecomSystem))
    const expectedTelecom = expectedAddress?.telecoms.find(({ telecomType }) => telecomType === telecomSystem)
    return expectedTelecom?.telecomNumber
  }
  // get username
  const officialUserNameObj = names.find((nameElement) => nameElement.use === PersonNameUse.Official)
  const userFirstName = officialUserNameObj && officialUserNameObj?.firstNames?.length !== 0 ? officialUserNameObj?.firstNames?.join(' ') : firstName
  const userLastName = officialUserNameObj?.lastName ?? lastName
  const userName = userFirstName && userLastName ? userFirstName.concat(' ', userLastName) : (userFirstName ?? userLastName)
  // get user home address
  const homeAddressObj = addresses?.find(({ addressType }) => addressType === AddressType.Home)
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
    phoneNumber: getTelecomBySystem(TelecomType.Mobile) ?? '-',
    emailAddress: getTelecomBySystem(TelecomType.Email) ?? '-',
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
