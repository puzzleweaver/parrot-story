import type { Action } from "./action";
import { SceneUtil, type Scene } from "./scene";
import type { ScreenId } from "./tree-type";

/**
 * A scene is one node in the game's state machine
 */
export type Screen = {
    id: ScreenId;
    endgame?: "win" | "lose";
    label: string;
    scene: Scene;
    text: string;
    actions: Action[];
};

export class ScreenUtil {
    static empty(): Screen {
        return {
            id: `${Math.floor(100000 * Math.random())}`,
            label: "Empty Screen",
            text: "lorem ipsum dolor sit amet and so on and so forth...",
            scene: SceneUtil.empty(),
            actions: [],
        };
    }
}
