import { FlagUtil } from "./flag";
import type { ScreenId } from "./tree-type";

/**
 * Actions represent the 
 */
export type Action = {
    dest?: ScreenId;
    label: string;
    needsFlags?: string[];
};

export class ActionUtil {
    static empty(): Action {
        return {
            dest: undefined,
            label: "Option",
        };
    }

    static getFlagsUsed(action: Action): string[] {
        return action.needsFlags ?? [];
    }

    static visible(flags: string[], action: Action): boolean {
        if (action.dest === undefined) {
            console.log(`Hiding "${action.label}" because of undefined destination`);
            return false;
        }
        return FlagUtil.matches(action.needsFlags ?? [], flags);
    }
};