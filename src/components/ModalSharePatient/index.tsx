import React, { ReactElement, useState } from 'react'
import { Form } from 'antd'
import { CustomModal } from '../CustomModal'
import './index.css'
import { DecryptedPatient, HealthcareParty, HealthcarePartyFilters, DeviceFilters, PaginatedListIterator, Device } from '@icure/cardinal-sdk'
import DebounceSelect from '../DebounceSelect'
import { createSelector } from '@reduxjs/toolkit'
import { CardinalApiState, getApiFromState } from '../../core/services/auth.api'
import { useAppSelector } from '../../core/hooks'
import { useSharePatientWithMutation } from '../../core/api/patientApi'
import { SpinLoader } from '../SpinLoader'

interface ModalPatientFormProps {
  isVisible: boolean
  onClose: () => void
  patientToEdit: DecryptedPatient
}

const reduxSelector = createSelector(
  (state: { cardinalApi: CardinalApiState }) => state.cardinalApi,
  (cardinalApi: CardinalApiState) => ({
    cardinalApi: getApiFromState(() => cardinalApi),
  }),
)

export const ModalSharePatient = ({ isVisible, onClose, patientToEdit }: ModalPatientFormProps): ReactElement => {
  const [form] = Form.useForm()
  const { cardinalApi } = useAppSelector(reduxSelector)
  const [practitionersList, setPractitionersList] = useState<{ value: string; label: string }[]>([])
  const [practitionersListLoading, setPractitionersListLoading] = useState<boolean>(false)
  const [devicesList, setDevicesList] = useState<{ value: string; label: string }[]>([])
  const [devicesListLoading, setDevicesListLoading] = useState<boolean>(false)

  const [sharePatient, { error: sharePatientError, isError: isSharePatientError, isSuccess: isSharePatientSuccessfully, isLoading: isSharePatientLoading }] =
    useSharePatientWithMutation()

  isSharePatientError && console.error(sharePatientError)

  async function loadUsers<T>(usersPaginatedList: PaginatedListIterator<T>, min: number, acc: T[] = []): Promise<T[]> {
    // Get the next page of healthcare parties
    const hasNext = await usersPaginatedList.hasNext()
    const page = hasNext ? await usersPaginatedList.next(min) : []

    // Check if we've met the required minimum count
    const users = [...acc, ...page]
    if (page.length === 0 || users.length >= min) {
      return users
    }

    // Recursively load the next page
    return loadUsers<T>(usersPaginatedList, min, users)
  }

  const fetchPractitionersList = async (name: string) => {
    setPractitionersListLoading(true)
    try {
      const practitionerApi = (await cardinalApi)?.healthcareParty
      if (!practitionerApi) {
        throw new Error('practitionerApi isn`t initialized')
      }
      const filter = HealthcarePartyFilters.byName(name)
      const practitioners = await practitionerApi?.filterHealthPartiesBy(filter)
      if (!practitioners) {
        throw new Error('Practitioners do not exist')
      }
      loadUsers(practitioners, 10).then((result) => {
        const hcpAsDropdownOptions = result.map((el) => {
          return {
            value: el.id,
            label: el.name ?? '',
          }
        })
        setPractitionersList(hcpAsDropdownOptions) // Update state with resolved data
        setPractitionersListLoading(false)
      })
      return practitionersList
    } catch (error) {
      throw new Error('Error while fetching practitioners list')
    } finally {
      setPractitionersListLoading(false)
    }
  }
  const fetchDevicesList = async (name: string) => {
    setDevicesListLoading(true)
    try {
      const deviceApi = (await cardinalApi)?.device
      if (!deviceApi) {
        throw new Error('deviceApi isn`t initialized')
      }
      const filter = DeviceFilters.all()
      const devices = await deviceApi?.filterDevicesBy(filter)
      if (!devices) {
        throw new Error('Devices do not exist')
      }
      loadUsers(devices, 10).then((result) => {
        const devicesAsDropdownOptions = result.map((el) => {
          return {
            value: el.id,
            label: el.name ?? '',
          }
        })
        setDevicesList(devicesAsDropdownOptions) // Update state with resolved data
        setDevicesListLoading(false)
      })
      return devicesList
    } catch (error) {
      throw new Error('Error while fetching devices list')
    } finally {
      setDevicesListLoading(false)
    }
  }

  const handleOnClose = () => {
    form.resetFields()
    onClose()
  }
  const handleOnOk = (values: { selectedDoctors: { value: string; label: string }[]; selectedDevices: { value: string; label: string }[] }) => {
    if (values.selectedDoctors.length !== 0) {
      values.selectedDoctors.map((el) => sharePatient({ patient: new DecryptedPatient(patientToEdit), delegateId: el.value }))
    }
    if (values.selectedDevices.length !== 0) {
      values.selectedDevices.map((el) => sharePatient({ patient: new DecryptedPatient(patientToEdit), delegateId: el.value }))
    }

    form.resetFields()
    onClose()
  }

  return (
    <CustomModal isVisible={isVisible} handleClose={handleOnClose} closeBtnTitle="Cancel" handleOk={() => form.submit()} okBtnTitle="Save" title="Share patient">
      <div className="modalSharePatient">
        {isSharePatientLoading && <SpinLoader />}
        <Form className="modalSharePatient__form" layout="vertical" colon={false} form={form} onFinish={(values) => handleOnOk(values)}>
          <div className="modalSharePatient__form__inputs">
            <Form.Item name="selectedDoctors" label="Select healthcare professionals">
              <DebounceSelect
                mode="multiple"
                fetchOptions={fetchPractitionersList}
                style={{ width: '100%' }}
                size="large"
                allowClear
                showSearch
                placeholder="Search by Name"
                loading={practitionersListLoading}
              />
            </Form.Item>
            <Form.Item name="selectedDevices" label="Select devices">
              <DebounceSelect
                mode="multiple"
                fetchOptions={fetchDevicesList}
                style={{ width: '100%' }}
                size="large"
                allowClear
                showSearch
                placeholder="Search by Name or Email"
                loading={devicesListLoading}
              />
            </Form.Item>
          </div>
        </Form>
      </div>
    </CustomModal>
  )
}
