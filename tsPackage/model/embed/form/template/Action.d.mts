import { Launcher } from './Launcher.mjs';
import { State } from './State.mjs';
export declare class Action {
    launchers: Array<Launcher> | undefined;
    expression: string | undefined;
    states: Array<State> | undefined;
    constructor(partial: Partial<Action>);
}
