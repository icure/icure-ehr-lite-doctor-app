import { RemoteAuthentication } from './RemoteAuthentication.mjs';
export declare class Remote {
    url: string;
    auth: RemoteAuthentication | undefined;
    constructor(partial: Partial<Remote> & Pick<Remote, "url">);
}
