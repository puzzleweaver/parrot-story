import type { Action } from "./action";
import { exampleNode } from "./example-story";
import type { StoryNode } from "./story-node";

export class GameState {
    scene: StoryNode;

    constructor({ scene }: {
        scene: StoryNode,
    }) {
        this.scene = scene;
    }

    static initial(): GameState {
        return new GameState({
            scene: exampleNode,
        });
    }

    step(action: Action): GameState {
        return new GameState({
            scene: action.dest(),
        });
    }
}