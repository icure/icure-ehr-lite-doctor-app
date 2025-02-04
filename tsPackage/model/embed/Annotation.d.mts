import { CodeStub } from '../base/CodeStub.mjs';
import { Identifiable } from '../base/Identifiable.mjs';
export declare class Annotation implements Identifiable<string> {
    id: string;
    author: string | undefined;
    created: number | undefined;
    modified: number | undefined;
    text: string | undefined;
    markdown: {
        [key: string]: string;
    };
    location: string | undefined;
    confidential: boolean | undefined;
    tags: Array<CodeStub>;
    encryptedSelf: string | undefined;
    constructor(partial: Partial<Annotation>);
}
