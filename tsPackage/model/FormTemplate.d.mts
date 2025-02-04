import { CodeStub } from './base/CodeStub.mjs';
import { StoredDocument } from './base/StoredDocument.mjs';
import { DocumentGroup } from './embed/DocumentGroup.mjs';
import { FormTemplateLayout } from './embed/form/template/FormTemplateLayout.mjs';
export declare class FormTemplate implements StoredDocument {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    templateLayout: FormTemplateLayout | undefined;
    rawTemplateLayout: Int8Array | undefined;
    name: string | undefined;
    guid: string | undefined;
    group: DocumentGroup | undefined;
    descr: string | undefined;
    disabled: string | undefined;
    specialty: CodeStub | undefined;
    author: string | undefined;
    formInstancePreferredLocation: string | undefined;
    keyboardShortcut: string | undefined;
    shortReport: string | undefined;
    mediumReport: string | undefined;
    longReport: string | undefined;
    reports: Array<string>;
    tags: Array<CodeStub>;
    layoutAttachmentId: string | undefined;
    templateLayoutAttachmentId: string | undefined;
    constructor(partial: Partial<FormTemplate>);
}
