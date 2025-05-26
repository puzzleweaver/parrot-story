import type { GameState } from "./game";
import type { ScreenId } from "./tree-type";

/**
 * Actions represent the 
 */
export type Action = {
    dest?: ScreenId;
    label: string;
    addsFlags?: string[];
    needsFlags?: string[];
};

export class ActionUtil {
    static empty(): Action {
        return {
            dest: undefined,
            label: "Option",
        };
    }
    static visible(state: GameState, action: Action): boolean {
        if (action.dest === undefined) {
            console.log(`Hiding "${action.label}" because of undefined destination`);
            return false;
        }
        const screenFlags: string[] = state.flags;
        const neededFlags: string[] = action.needsFlags ?? [];
        for (const neededFlag of neededFlags) {
            if (neededFlag.length === 0) continue;
            if (neededFlag.charAt(0) === "!") {
                const excludedFlag = neededFlag.substring(1);
                if (screenFlags.includes(excludedFlag)) return false;
            } else {
                if (!screenFlags.includes(neededFlag)) return false;
            }
        }
        return true;
    }
};