export class Action {
    constructor(partial) {
        this.launchers = [];
        this.expression = undefined;
        this.states = [];
        if ('launchers' in partial)
            this.launchers = partial.launchers;
        if ('expression' in partial)
            this.expression = partial.expression;
        if ('states' in partial)
            this.states = partial.states;
    }
}
//# sourceMappingURL=Action.mjs.map