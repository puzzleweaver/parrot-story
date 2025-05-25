
/**
 * Actions represent the 
 */
export type Action = {
    dest: string;
    label: string;
};

export class ActionUtil {
    static empty(): Action {
        return {
            dest: "TODO",
            label: "Do something?",
        };
    }
};