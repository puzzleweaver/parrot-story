import type { StoryNode } from "./story-node";

/**
 * Actions represent the 
 */
export class Action {
    dest: () => StoryNode;
    label: string;

    constructor({ label, dest }: {
        label: string,
        dest: () => StoryNode,
    }) {
        this.label = label;
        this.dest = dest;
    }
};