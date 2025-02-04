export var EntitySubscriptionEvent;
(function (EntitySubscriptionEvent) {
    EntitySubscriptionEvent.Connected = {
        $ktClass: 'com.icure.cardinal.sdk.subscription.EntitySubscriptionEvent.Connected'
    };
    EntitySubscriptionEvent.Reconnected = {
        $ktClass: 'com.icure.cardinal.sdk.subscription.EntitySubscriptionEvent.Reconnected'
    };
    class UnexpectedError {
        constructor(partial) {
            this.$ktClass = 'com.icure.cardinal.sdk.subscription.EntitySubscriptionEvent.UnexpectedError';
            this.message = partial.message;
        }
    }
    EntitySubscriptionEvent.UnexpectedError = UnexpectedError;
    let ConnectionError;
    (function (ConnectionError) {
        ConnectionError.MissedPing = {
            $ktClass: 'com.icure.cardinal.sdk.subscription.EntitySubscriptionEvent.ConnectionError.MissedPing'
        };
        ConnectionError.ClosedByServer = {
            $ktClass: 'com.icure.cardinal.sdk.subscription.EntitySubscriptionEvent.ConnectionError.ClosedByServer'
        };
    })(ConnectionError = EntitySubscriptionEvent.ConnectionError || (EntitySubscriptionEvent.ConnectionError = {}));
    class EntityNotification {
        constructor(partial) {
            this.$ktClass = 'com.icure.cardinal.sdk.subscription.EntitySubscriptionEvent.EntityNotification';
            this.entity = partial.entity;
        }
    }
    EntitySubscriptionEvent.EntityNotification = EntityNotification;
    let EntityError;
    (function (EntityError) {
        EntityError.DeserializationError = {
            $ktClass: 'com.icure.cardinal.sdk.subscription.EntitySubscriptionEvent.EntityError.DeserializationError'
        };
    })(EntityError = EntitySubscriptionEvent.EntityError || (EntitySubscriptionEvent.EntityError = {}));
})(EntitySubscriptionEvent || (EntitySubscriptionEvent = {}));
//# sourceMappingURL=EntitySubscriptionEvent.mjs.map