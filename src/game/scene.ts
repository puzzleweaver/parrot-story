
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
}