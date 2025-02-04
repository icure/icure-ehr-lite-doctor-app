export var CaptchaOptions;
(function (CaptchaOptions) {
    class Recaptcha {
        constructor(partial) {
            this.$ktClass = 'com.icure.cardinal.sdk.auth.CaptchaOptions.Recaptcha';
            this.solution = partial.solution;
        }
    }
    CaptchaOptions.Recaptcha = Recaptcha;
    class FriendlyCaptcha {
        constructor(partial) {
            this.$ktClass = 'com.icure.cardinal.sdk.auth.CaptchaOptions.FriendlyCaptcha';
            this.solution = partial.solution;
        }
    }
    CaptchaOptions.FriendlyCaptcha = FriendlyCaptcha;
    let Kerberus;
    (function (Kerberus) {
        class Computed {
            constructor(partial) {
                this.$ktClass = 'com.icure.cardinal.sdk.auth.CaptchaOptions.Kerberus.Computed';
                this.solution = partial.solution;
            }
        }
        Kerberus.Computed = Computed;
        class Delegated {
            constructor(partial) {
                this.onProgress = undefined;
                this.$ktClass = 'com.icure.cardinal.sdk.auth.CaptchaOptions.Kerberus.Delegated';
                if ('onProgress' in partial)
                    this.onProgress = partial.onProgress;
            }
        }
        Kerberus.Delegated = Delegated;
    })(Kerberus = CaptchaOptions.Kerberus || (CaptchaOptions.Kerberus = {}));
})(CaptchaOptions || (CaptchaOptions = {}));
//# sourceMappingURL=CaptchaOptions.mjs.map