
import { Actor } from "./actor";
import { Assets } from "./asset";

export class Scene {
    label: string;
    bg: Asset;
    actors: Actor[];

    constructor({ label, bg, actors }: {
        label: string,
        bg: Asset,
        actors: Actor[],
    }) {
        this.label = label;
        this.bg = bg;
        this.actors = actors;
    }

    static empty(): Scene {
        return new Scene({
            label: "",
            bg: Assets.bg.shop,
            actors: [],
        });
    }

    static toTS(scene: Scene): string {
        return [
            "new Scene({",
            `label: "${scene.label}",`,
            `bg: "${scene.bg}",`,
            "actors: [",
            scene.actors.map(actor => Actor.toTS(actor)).join(",\n"),
            "],",
            "})",
        ].join("\n");
    }
}

export type Asset = string;