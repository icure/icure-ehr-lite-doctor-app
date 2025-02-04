import { Trigger } from './Trigger.mjs';
export declare class Launcher {
    name: string;
    triggerer: Trigger;
    shouldPassValue: boolean;
    constructor(partial: Partial<Launcher> & Pick<Launcher, "name" | "triggerer">);
}
