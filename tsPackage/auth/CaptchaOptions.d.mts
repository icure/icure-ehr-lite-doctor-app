import { Solution } from '../kerberus/Solution.mjs';
export type CaptchaOptions = CaptchaOptions.Recaptcha | CaptchaOptions.FriendlyCaptcha | CaptchaOptions.Kerberus;
export declare namespace CaptchaOptions {
    class Recaptcha {
        solution: string;
        readonly $ktClass: 'com.icure.cardinal.sdk.auth.CaptchaOptions.Recaptcha';
        constructor(partial: Partial<Recaptcha> & Pick<Recaptcha, "solution">);
    }
    class FriendlyCaptcha {
        solution: string;
        readonly $ktClass: 'com.icure.cardinal.sdk.auth.CaptchaOptions.FriendlyCaptcha';
        constructor(partial: Partial<FriendlyCaptcha> & Pick<FriendlyCaptcha, "solution">);
    }
    namespace Kerberus {
        class Computed {
            solution: Solution;
            readonly $ktClass: 'com.icure.cardinal.sdk.auth.CaptchaOptions.Kerberus.Computed';
            constructor(partial: Partial<Computed> & Pick<Computed, "solution">);
        }
        class Delegated {
            onProgress: ((x1: number) => void) | undefined;
            readonly $ktClass: 'com.icure.cardinal.sdk.auth.CaptchaOptions.Kerberus.Delegated';
            constructor(partial: Partial<Delegated>);
        }
    }
    type Kerberus = Kerberus.Computed | Kerberus.Delegated;
}
