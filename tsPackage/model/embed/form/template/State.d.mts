import { StateToUpdate } from './StateToUpdate.mjs';
export declare class State {
    name: string;
    stateToUpdate: StateToUpdate;
    canLaunchLauncher: boolean;
    constructor(partial: Partial<State> & Pick<State, "name" | "stateToUpdate">);
}
