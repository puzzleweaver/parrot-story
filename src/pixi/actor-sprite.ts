import { Application, Assets, Sprite, Texture, Ticker } from "pixi.js";
import type { Actor } from "../game/actor";

const getOsc = (period: number, amount: number): number => {
    return (Date.now() % period < period / 2 ? -0.5 : 0.5) * amount;
};

export class ActorSprite extends Sprite {
    app: Application;
    actor: Actor;

    static centerX = 0;
    static centerY = 0;
    static sceneWidth = 0;
    static sceneHeight = 0;

    static setViewport({
        x, y, w, h
    }: { x: number, y: number, w: number, h: number }) {
        this.centerX = x;
        this.centerY = y;
        this.sceneWidth = w;
        this.sceneHeight = h;
    }

    constructor(app: Application, texture: Texture, actor: Actor) {
        super(texture);
        this.app = app;
        this.actor = actor;
        this.anchor.set(0.5);
        this.setPosition(actor.x, actor.y);
        this.setScale(actor.scale, actor.flipped ?? false);
    }

    static async create(app: Application, actor: Actor): Promise<ActorSprite> {
        const asset = await Assets.load(`images/${actor.img}`);
        return new ActorSprite(app, new Texture(asset), actor);
    }

    setPosition(x: number, y: number): void {
        const cx = ActorSprite.centerX,
            cy = ActorSprite.centerY;
        const width = ActorSprite.sceneWidth;
        const height = ActorSprite.sceneHeight;
        this.position.set(
            cx - width / 2 + width * x,
            cy - height / 2 + height * y,
        );
    }

    setScale(scale: number, flipped: boolean): void {
        // const centerX = this.app.screen.width / 2, centerY = this.app.screen.height / 2;
        const height = ActorSprite.sceneHeight;
        this.scale = scale * height / this.texture.source.pixelHeight;
        this.scale.x = (flipped ? -1 : 1) * Math.abs(this.scale.x);
    }

    setAngle(angle: number) {
        this.angle = angle * 360 / 6.283;
    }

    onTick(_time: Ticker): void {
        switch (this.actor.animation) {
            case undefined: // default "back and forth" rotation thing
                this.setAngle(
                    (this.actor.angle ?? 0) + getOsc(500, 0.1),
                );
                break;
            case "wobble_fast": // faster default
                this.setAngle(
                    (this.actor.angle ?? 0) + getOsc(159, 0.1),
                );
                break;
            case "hop_slow":
                this.setPosition(
                    this.actor.x,
                    this.actor.y + getOsc(497, 0.02),
                );
                break;
            case "hop_fast":
                this.setPosition(
                    this.actor.x,
                    this.actor.y + getOsc(157, 0.05),
                );
                break;
            case "shake_slow":
                this.setPosition(
                    this.actor.x + getOsc(510, 0.02),
                    this.actor.y,
                );
                break;
            case "shake_fast":
                return this.setPosition(
                    this.actor.x + getOsc(160, 0.02),
                    this.actor.y,
                );
            case "zoom_slow":
                this.setScale(
                    this.actor.scale * (1 + getOsc(510, 0.03)),
                    this.actor.flipped ?? false,
                );
                break;
            case "zoom_fast":
                this.setScale(
                    this.actor.scale * (1 + getOsc(160, 0.03)),
                    this.actor.flipped ?? false,
                );
                break;
            case "spin_fast":
                this.setAngle(
                    (9 * Date.now() / 1000) % 6.283,
                );
                break;
            case "spin_slow":
                this.setAngle(
                    (1 * Date.now() / 1000) % 6.283,
                );
        }
    }
}