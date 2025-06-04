import { FlagUtil } from "./flag";
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

    static getFlagsUsed(action: Action): string[] {
        const allFlagsUnprocessed = [
            ...(action.addsFlags ?? []),
            ...(action.needsFlags ?? []),
        ];
        return [...new Set(
            allFlagsUnprocessed
                .filter(flag => flag !== "")
                .map(flag => {
                    if (flag.charAt(0) === "!")
                        return flag.substring(1);
                    return flag;
                }),
        )];
    }

    static visible(flags: string[], action: Action): boolean {
        if (action.dest === undefined) {
            console.log(`Hiding "${action.label}" because of undefined destination`);
            return false;
        }
        return FlagUtil.matches(action.needsFlags ?? [], flags);
    }
};