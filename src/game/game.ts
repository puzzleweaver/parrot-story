import type { Action } from "./action";
import { tree } from "./tree";
import type { Screen } from "./screen";
import { screen0 } from "./tree-type";

export class GameState {
    node: Screen;
    flags: string[];

    constructor({ node, flags }: {
        node: Screen,
        flags: string[],
    }) {
        this.node = node;
        this.flags = flags;
    }

    static initial(): GameState {
        return new GameState({
            node: screen0,
            flags: [],
        });
    }

    static fromScreen(screen: Screen): GameState {
        return new GameState({
            node: screen,
            flags: [],
        });
    }

    step(action: Action): GameState {
        if (action.dest === undefined) {
            alert("Undefined destination D:");
            return this;
        }
        const destScreen = tree[action.dest];
        const newFlags: string[] = destScreen.addsFlags ?? [];
        return new GameState({
            node: tree[action.dest!],
            flags: [...this.flags, ...newFlags],
        });
    }
}