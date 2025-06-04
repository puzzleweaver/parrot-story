import { ActionUtil, type Action } from "./action";
import { FlagUtil } from "./flag";
import { SceneUtil, type Scene } from "./scene";
import type { ScreenId, Tree } from "./tree-type";

/**
 * A scene is one node in the game's state machine
 */
export type Screen = {
    id: ScreenId;
    endgame?: "win" | "lose";
    label: string;
    scene: Scene;
    text: string;
    textVariants?: FlaggedText[];
    actions: Action[];
    addsFlags?: string[];
};

// type for text variants that depend on flags.
export type FlaggedText = {
    text: string;
    flags: string[];
};

export class ScreenUtil {
    static newId() {
        return `${Math.floor(100000 * Math.random())}`
    }

    static empty(): Screen {
        return {
            id: ScreenUtil.newId(),
            label: "Empty Screen",
            text: "lorem ipsum dolor sit amet and so on and so forth...",
            scene: SceneUtil.empty(),
            actions: [],
        };
    }

    static getIncomingScreens(to: Screen, tree: Tree): ScreenId[] {
        const ids: ScreenId[] = [];
        for (const screen of Object.values(tree)) {
            for (var i = 0; i < screen.actions.length; i++) {
                if (screen.actions[i].dest === to.id)
                    ids.push(screen.id);
            }
        }
        return ids;
    }

    static getAllFlags(screen: Screen): string[] {
        var ret: string[] = SceneUtil.getAllFlags(screen.scene);
        for (const action of screen.actions)
            ret = [...ret, ...ActionUtil.getFlagsUsed(action)];
        for (const variant of screen.textVariants ?? [])
            ret = [...ret, ...variant.flags];
        return ret;
    }

    static getText(screen: Screen, flags: string[]): string {
        for (const variant of screen.textVariants ?? []) {
            if (FlagUtil.matches(variant.flags, flags))
                return variant.text;
        }
        return screen.text;
    }
}
