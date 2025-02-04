import { DurationMs } from '../utils/DurationMs.mjs';
export declare class EntitySubscriptionConfiguration {
    channelBufferCapacity: number;
    onBufferFull: EntitySubscriptionConfiguration.FullBufferBehaviour;
    reconnectionDelay: DurationMs;
    retryDelayExponentFactor: number;
    connectionMaxRetries: number;
    constructor(partial: Partial<EntitySubscriptionConfiguration>);
}
export declare namespace EntitySubscriptionConfiguration {
    enum FullBufferBehaviour {
        Close = "Close",
        DropOldest = "DropOldest",
        Ignore = "Ignore"
    }
}
