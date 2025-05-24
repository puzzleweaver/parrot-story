import { Assets } from "./asset";
import type { Asset } from "./scene";

export class Actor {
    x: number;
    y: number;
    img: Asset;
    scale: number;
    angle: number;
    // TODO:
    // anim: Animation;

    constructor({ x, y, img, scale = 1, angle = 0 }: {
        x: number,
        y: number,
        img: Asset,
        scale?: number,
        angle?: number
    }) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.scale = scale;
        this.angle = angle;
    }

    static empty(): Actor {
        return new Actor({
            x: Math.random(),
            y: Math.random(),
            scale: 0.5,
            img: Assets.character.parrot["in-transit"],
        });
    }

    static indexColor(index: number): string {
        return [
            "red",
            "green",
            "blue",
            "magenta",
            "yellow",
            "cyan",
            "brown",
            "white",
        ][index];
    }

    static toTS(actor: Actor): string {
        return [
            "new Actor({",
            `x: ${actor.x},`,
            `y: ${actor.y},`,
            `img: "${actor.img}",`,
            `scale: ${actor.scale},`,
            `angle: ${actor.angle},`,
            "})",
        ].join("\n");
    }
}