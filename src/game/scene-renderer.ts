import { Actor } from "./actor";
import type { Scene } from "./scene";

const cachedImages: { [key: string]: HTMLImageElement } = {};

const withImage = (src: string, callback: (img: HTMLImageElement) => any): Promise<void> => {
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
        img.src = `/src/assets/images/${src}`;
    });
};

export class SceneRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    debug: boolean;

    constructor({ canvas, debug }: {
        canvas: HTMLCanvasElement,
        debug: boolean,
    }) {
        this.canvas = canvas;
        this.debug = debug;
        this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    }

    async render(scene: Scene): Promise<void> {
        console.log("Render call.");
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        await this.drawBackground(scene.bg);
        for (var i = 0; i < scene.actors.length; i++) {
            await this.drawActor(i, scene.actors[i]);
        }
    }

    async drawBackground(src: string): Promise<void> {
        return withImage(src, (img) => {
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        });
    }

    drawImage({ src, x, y, scale, rotation }: {
        src: string,
        x: number,
        y: number,
        scale: number,
        rotation: number,
    }): Promise<void> {
        return withImage(src, (img) => {
            scale = scale * this.canvas.height / img.height;
            this.ctx.save();
            this.ctx.setTransform(scale, 0, 0, scale, x * this.canvas.width, y * this.canvas.height);
            this.ctx.rotate(rotation);
            this.ctx.drawImage(img, -img.width / 2, -img.height / 2);
            this.ctx.restore();
        });
    }

    async drawActor(index: number, actor: Actor): Promise<void> {
        if (this.debug) {
            this.ctx.save();
            this.ctx.globalCompositeOperation = "source-over"
            this.ctx.fillStyle = Actor.indexColor(index);
        }
        return this.drawImage({
            src: actor.img,
            x: actor.x,
            y: actor.y,
            scale: actor.scale ?? 1,
            rotation: Date.now() % 1000 < 500 ? -0.1 : 0.1,
        }).then(() => {
            this.ctx.restore();
        });
    }

}