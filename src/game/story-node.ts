import type { Action } from "./action";
import { SceneUtil, type Scene } from "./scene";

/**
 * A scene is one node in the game's state machine
 */
export type StoryNode = {
    id: string;
    label: string;
    scene: Scene;
    text: string;
    actions: Action[];
};

export class StoryNodeUtil {
    static empty(): StoryNode {
        return {
            id: `${Math.floor(100000 * Math.random())}`,
            label: "example story node",
            text: "lorem ipsum dolor sit amet and so on and so forth...",
            scene: SceneUtil.empty(),
            actions: [],
        };
    }
}
