export class State {
    constructor(partial) {
        this.canLaunchLauncher = false;
        this.name = partial.name;
        this.stateToUpdate = partial.stateToUpdate;
        if ('canLaunchLauncher' in partial && partial.canLaunchLauncher !== undefined)
            this.canLaunchLauncher = partial.canLaunchLauncher;
    }
}
//# sourceMappingURL=State.mjs.map