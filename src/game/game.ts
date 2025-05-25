import type { Action } from "./action";
import { tree } from "./tree";
import type { Screen } from "./screen";

export class GameState {
    node: Screen;

    constructor({ node }: {
        node: Screen,
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
            node: tree[action.dest!],
        });
    }
}