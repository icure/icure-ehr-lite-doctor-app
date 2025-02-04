export class Launcher {
    constructor(partial) {
        this.shouldPassValue = false;
        this.name = partial.name;
        this.triggerer = partial.triggerer;
        if ('shouldPassValue' in partial && partial.shouldPassValue !== undefined)
            this.shouldPassValue = partial.shouldPassValue;
    }
}
//# sourceMappingURL=Launcher.mjs.map