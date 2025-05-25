import type { Action } from "./action";
import { nodeId0, tree } from "./tree";
import type { StoryNode } from "./story-node";

export class GameState {
    node: StoryNode;

    constructor({ node }: {
        node: StoryNode,
    }) {
        this.node = node;
    }

    static initial(): GameState {
        return new GameState({
            node: tree[Object.keys(tree)[0]],
        });
    }

    step(action: Action): GameState {
        return new GameState({
            node: tree[action.dest],
        });
    }
}