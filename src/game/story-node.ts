import type { Action } from "./action";
import type { Scene } from "./scene";

/**
 * A scene is one node in the game's state machine
 */
export class StoryNode {
    scene: Scene;
    text: string;
    actions: Action[];

    constructor({ text, scene, actions }: {
        text: string,
        scene: Scene,
        actions: Action[],
    }) {
        this.text = text;
        this.scene = scene;
        this.actions = actions;
    }
};