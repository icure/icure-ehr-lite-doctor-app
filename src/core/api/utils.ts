import { Medication as FhcMedication } from '@icure/be-fhc-lite-api'
import {
  AdministrationQuantity,
  CodeStub,
  Duration,
  Medication,
  Medicinalproduct,
  PaginatedListIterator,
  RegimenItem,
  Renewal,
  Substanceproduct,
  Weekday,
} from '@icure/cardinal-sdk'

export async function loadFromIterator<T>(paginatedListIterator: PaginatedListIterator<T>, min: number, acc: T[] = []): Promise<T[]> {
  // Get the next page of healthcare parties
  const hasNext = await paginatedListIterator?.hasNext()
  const page = hasNext ? await paginatedListIterator?.next(min) : []

  // Check if we've met the required minimum count
  const items: T[] = [...acc, ...page]
  if (page.length === 0 || items.length >= min) {
    return items
  }

  // Recursively load the next page
  return loadFromIterator<T>(paginatedListIterator, min, items)
}

export const tagById =
  <TagType extends string>(tagType: TagType) =>
  (result: { id?: string } | undefined) =>
    result?.id ? [{ type: tagType, id: result.id }] : []

export const tagsByIds =
  <TagType extends string>(tagType: TagType, listMarker?: string) =>
  (result: { id?: string }[] | undefined) => {
    const listMarkerTag = listMarker ? [{ type: tagType, id: listMarker }] : []
    return result ? result.map(({ id }: { id?: string }) => ({ type: tagType, id })).concat(listMarkerTag) : []
  }

export const fhcMedicationToCardinalMedication = (m: FhcMedication): Medication =>
  new Medication({
    ...m,
    substanceProduct: m.substanceProduct
      ? new Substanceproduct({
          ...m.substanceProduct!,
          intendedcds: m.substanceProduct?.intendedcds?.map(
            (cd) =>
              new CodeStub({
                ...cd,
              }),
          ),
          deliveredcds: m.substanceProduct?.deliveredcds?.map(
            (cd) =>
              new CodeStub({
                ...cd,
              }),
          ),
        })
      : undefined,
    medicinalProduct: m.medicinalProduct
      ? new Medicinalproduct({
          ...m.medicinalProduct!,
          intendedcds: m.substanceProduct?.intendedcds?.map(
            (cd) =>
              new CodeStub({
                ...cd,
              }),
          ),
          deliveredcds: m.medicinalProduct?.deliveredcds?.map(
            (cd) =>
              new CodeStub({
                ...cd,
              }),
          ),
        })
      : undefined,
    temporality: m.temporality?.code,
    duration: m.duration ? new Duration({ ...m.duration!, unit: m.duration.unit ? new CodeStub(m.duration.unit) : undefined }) : undefined,
    renewal: m.renewal
      ? new Renewal({
          ...m.renewal!,
          duration: m.renewal.duration
            ? new Duration({
                ...m.renewal.duration!,
                unit: m.renewal.duration.unit ? new CodeStub(m.renewal.duration.unit) : undefined,
              })
            : undefined,
        })
      : undefined,
    regimen: m.regimen?.map(
      (r) =>
        new RegimenItem({
          ...r,
          administratedQuantity: r.administratedQuantity
            ? new AdministrationQuantity({
                ...r.administratedQuantity,
                administrationUnit: r.administratedQuantity.administrationUnit ? new CodeStub(r.administratedQuantity.administrationUnit) : undefined,
              })
            : undefined,
          dayPeriod: r.dayPeriod ? new CodeStub(r.dayPeriod) : undefined,
          weekday: r.weekday ? new Weekday(r.weekday) : undefined,
        }),
    ),
  })
