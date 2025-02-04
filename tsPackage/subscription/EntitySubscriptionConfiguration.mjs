export class EntitySubscriptionConfiguration {
    constructor(partial) {
        this.channelBufferCapacity = 100;
        this.onBufferFull = EntitySubscriptionConfiguration.FullBufferBehaviour.Close;
        this.reconnectionDelay = 2000;
        this.retryDelayExponentFactor = 2.0;
        this.connectionMaxRetries = 5;
        if ('channelBufferCapacity' in partial && partial.channelBufferCapacity !== undefined)
            this.channelBufferCapacity = partial.channelBufferCapacity;
        if ('onBufferFull' in partial && partial.onBufferFull !== undefined)
            this.onBufferFull = partial.onBufferFull;
        if ('reconnectionDelay' in partial && partial.reconnectionDelay !== undefined)
            this.reconnectionDelay = partial.reconnectionDelay;
        if ('retryDelayExponentFactor' in partial && partial.retryDelayExponentFactor !== undefined)
            this.retryDelayExponentFactor = partial.retryDelayExponentFactor;
        if ('connectionMaxRetries' in partial && partial.connectionMaxRetries !== undefined)
            this.connectionMaxRetries = partial.connectionMaxRetries;
    }
}
(function (EntitySubscriptionConfiguration) {
    let FullBufferBehaviour;
    (function (FullBufferBehaviour) {
        FullBufferBehaviour["Close"] = "Close";
        FullBufferBehaviour["DropOldest"] = "DropOldest";
        FullBufferBehaviour["Ignore"] = "Ignore";
    })(FullBufferBehaviour = EntitySubscriptionConfiguration.FullBufferBehaviour || (EntitySubscriptionConfiguration.FullBufferBehaviour = {}));
})(EntitySubscriptionConfiguration || (EntitySubscriptionConfiguration = {}));
//# sourceMappingURL=EntitySubscriptionConfiguration.mjs.map