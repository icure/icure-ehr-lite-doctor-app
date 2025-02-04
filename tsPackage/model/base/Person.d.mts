import { Address } from '../embed/Address.mjs';
import { Gender } from '../embed/Gender.mjs';
import { PersonName } from '../embed/PersonName.mjs';
import { Identifiable } from './Identifiable.mjs';
export interface Person extends Identifiable<string> {
    civility: string | undefined;
    gender: Gender | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    companyName: string | undefined;
    names: Array<PersonName>;
    addresses: Array<Address>;
    languages: Array<string>;
}
