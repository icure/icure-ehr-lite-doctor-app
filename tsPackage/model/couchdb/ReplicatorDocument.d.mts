import { Versionable } from '../base/Versionable.mjs';
import { Remote } from './Remote.mjs';
import { ReplicationStats } from './ReplicationStats.mjs';
export declare class ReplicatorDocument implements Versionable<string> {
    id: string;
    rev: string | undefined;
    source: Remote | undefined;
    target: Remote | undefined;
    owner: string | undefined;
    create_target: boolean | undefined;
    continuous: boolean | undefined;
    doc_ids: Array<string> | undefined;
    replicationState: string | undefined;
    replicationStateTime: string | undefined;
    replicationStats: ReplicationStats | undefined;
    errorCount: number | undefined;
    revsInfo: Array<{
        [key: string]: string;
    }> | undefined;
    revHistory: {
        [key: string]: string;
    } | undefined;
    constructor(partial: Partial<ReplicatorDocument>);
}
