import { View } from './View.mjs';
export declare class DesignDocument {
    id: string;
    rev: string | undefined;
    revHistory: {
        [key: string]: string;
    };
    language: string | undefined;
    views: {
        [key: string]: View;
    };
    lists: {
        [key: string]: string;
    };
    shows: {
        [key: string]: string;
    };
    updateHandlers: {
        [key: string]: string;
    } | undefined;
    filters: {
        [key: string]: string;
    };
    constructor(partial: Partial<DesignDocument>);
}
