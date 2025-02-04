export interface CodeIdentification<K> {
    id: K;
    code: string | undefined;
    context: string | undefined;
    type: string | undefined;
    version: string | undefined;
    label: {
        [key: string]: string;
    } | undefined;
}
