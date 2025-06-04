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
        const neededFlags: string[] = action.needsFlags ?? [];
        for (const neededFlag of neededFlags) {
            if (neededFlag.length === 0) continue;
            if (neededFlag.charAt(0) === "!") {
                const excludedFlag = neededFlag.substring(1);
                if (flags.includes(excludedFlag)) return false;
            } else {
                if (!flags.includes(neededFlag)) return false;
            }
        }
        return true;
    }
};