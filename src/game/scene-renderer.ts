import { ActorUtil, type Actor } from "./actor";
import { AssetList } from "./generated_asset";
import type { Scene } from "./scene";

const cachedImages: { [key: string]: HTMLImageElement } = {};

const withImage = (src: string, callback: (img: HTMLImageElement) => any): Promise<void> => {
    if (src !== "prop/error.png" && !AssetList.includes(src)) {
        return withImage("prop/error.png", callback);
    }
    return new Promise((resolve, _) => {
        if (cachedImages[src]?.complete ?? false) {
            callback(cachedImages[src]);
            resolve();
            return;
        }
        const img = cachedImages[src] = new Image;
        img.onload = () => {
            callback(img);
            resolve();
        };
        img.src = `/images/${src}`;
    });
};

export class SceneRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor({ canvas }: {
        canvas: HTMLCanvasElement,
    }) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    }

    async render(scene: Scene): Promise<void> {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        await this.drawBackground(scene.bg);
        for (const actor of scene.actors) {
            await this.drawActor(actor);
        }
    }

    async drawBackground(src: string): Promise<void> {
        return withImage(src, (img) => {
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        });
    }

    drawImage({ src, x, y, scale, rotation, flipped }: {
        src: string,
        x: number,
        y: number,
        scale: number,
        rotation: number,
        flipped: boolean,
    }): Promise<void> {
        return withImage(src, (img) => {
            scale = scale * this.canvas.height / img.height;
            this.ctx.save();
            const flippedSign = flipped ? -1 : 1;
            this.ctx.setTransform(
                scale * flippedSign,
                0,
                0,
                scale,
                x * this.canvas.width,
                y * this.canvas.height,
            );
            this.ctx.rotate(rotation * flippedSign);
            this.ctx.drawImage(img, -img.width / 2, -img.height / 2);
            this.ctx.restore();
        });
    }

    async drawActor(actor: Actor): Promise<void> {
        actor = ActorUtil.animated(actor);
        return this.drawImage({
            src: actor.img,
            x: actor.x,
            y: actor.y,
            scale: actor.scale ?? 1,
            rotation: (actor.angle ?? 0),
            flipped: actor.flipped ?? false,
        }).then(() => {
            this.ctx.restore();
        });
    }

}