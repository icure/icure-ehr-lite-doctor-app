import { Identifiable } from '../model/base/Identifiable.mjs';
export type EntitySubscriptionEvent<E extends Identifiable<string>> = typeof EntitySubscriptionEvent.Connected | typeof EntitySubscriptionEvent.Reconnected | EntitySubscriptionEvent.UnexpectedError | EntitySubscriptionEvent.ConnectionError | EntitySubscriptionEvent.EntityNotification<E> | EntitySubscriptionEvent.EntityError;
export declare namespace EntitySubscriptionEvent {
    const Connected: {
        readonly $ktClass: 'com.icure.cardinal.sdk.subscription.EntitySubscriptionEvent.Connected';
    };
    const Reconnected: {
        readonly $ktClass: 'com.icure.cardinal.sdk.subscription.EntitySubscriptionEvent.Reconnected';
    };
    class UnexpectedError {
        message: string;
        readonly $ktClass: 'com.icure.cardinal.sdk.subscription.EntitySubscriptionEvent.UnexpectedError';
        constructor(partial: Partial<UnexpectedError> & Pick<UnexpectedError, "message">);
    }
    namespace ConnectionError {
        const MissedPing: {
            readonly $ktClass: 'com.icure.cardinal.sdk.subscription.EntitySubscriptionEvent.ConnectionError.MissedPing';
        };
        const ClosedByServer: {
            readonly $ktClass: 'com.icure.cardinal.sdk.subscription.EntitySubscriptionEvent.ConnectionError.ClosedByServer';
        };
    }
    type ConnectionError = typeof ConnectionError.MissedPing | typeof ConnectionError.ClosedByServer;
    class EntityNotification<E extends Identifiable<string>> {
        entity: E;
        readonly $ktClass: 'com.icure.cardinal.sdk.subscription.EntitySubscriptionEvent.EntityNotification';
        constructor(partial: Partial<EntityNotification<E>> & Pick<EntityNotification<E>, "entity">);
    }
    namespace EntityError {
        const DeserializationError: {
            readonly $ktClass: 'com.icure.cardinal.sdk.subscription.EntitySubscriptionEvent.EntityError.DeserializationError';
        };
    }
    type EntityError = typeof EntityError.DeserializationError;
}
