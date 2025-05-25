import type { ScreenId } from "./tree-type";

/**
 * Actions represent the 
 */
export type Action = {
    dest?: ScreenId;
    label: string;
};

export class ActionUtil {
    static empty(): Action {
        return {
            dest: undefined,
            label: "Option",
        };
    }
};