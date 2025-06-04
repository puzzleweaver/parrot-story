
import { type Actor } from "./actor";
import { Assets } from "./generated_asset";

export type Scene = {
    bg: string;
    actors: Actor[];
};

export class SceneUtil {
    static empty(): Scene {
        return {
            bg: Assets.bg.shop,
            actors: [],
        };
    }

    static getAllFlags(scene: Scene): string[] {
        var ret: string[] = [];
        for (const actor of scene.actors)
            ret = [...ret, ...(actor.needsFlags ?? [])];
        return ret;
    }
}