import { Application, Assets, Container, Sprite, Texture, Ticker } from "pixi.js";
import { type Actor } from "../game/actor";
import { ScreenUtil, type Screen } from "../game/screen";
import { ActorSprite } from "./actor-sprite";
import { tree } from "../game/tree";
import { FlagUtil } from "../game/flag";
import { ParrotText } from "./parrot-text";
import type { Action } from "../game/action";

export class PixiScene extends Container {
    flags: { [flag: string]: any };
    app: Application;
    screen: Screen;
    setScene: (newScene: PixiScene) => void;

    actorSprites: ActorSprite[];

    constructor(
        app: Application,
        screen: Screen,
        setScene: (newScene: PixiScene) => void,
        flags: { [key: string]: any },
    ) {
        super();
        this.app = app;
        this.screen = screen;
        this.setScene = setScene;
        this.actorSprites = [];
        this.flags = flags;

        this.loadStuff();
    }

    onTick(time: Ticker): void {
        for (const sprite of this.actorSprites)
            sprite.onTick(time);
    }

    takeAction(action: Action): void {
        const newScreen = tree[action.dest!];
        const newFlags = { ...this.flags };
        for (const flag of newScreen.addsFlags ?? []) {
            newFlags[flag] = 1;
        }
        this.setScene(
            new PixiScene(
                this.app,
                newScreen,
                this.setScene,
                newFlags,
            ),
        );
    };

    async loadStuff(): Promise<void> {
        const bgAsset = await Assets.load(`images/${this.screen.scene.bg}`);
        const bgTexture = new Texture(bgAsset);
        const bg = new Sprite(bgTexture);
        bg.setSize(this.app.screen.width, this.app.screen.height);
        this.addChild(bg);

        // height of the scene/narration section of the screen
        const H = this.app.screen.height * 0.8;
        const W = H * 3 / 2;
        const narrationWidth = this.app.screen.width - W;

        ActorSprite.setViewport({
            x: this.app.screen.width - W / 2,
            y: H / 2,
            w: W,
            h: H,
        });
        for (const actor of this.screen.scene.actors) {
            const sprite = await ActorSprite.create(this.app, actor);
            this.actorSprites.push(sprite);
            this.addChild(sprite);
        }
        // this.addChild(new ParrotText({
        //     label: "Scene",
        //     width: W,
        //     height: H,
        //     x: this.app.screen.width - W / 2,
        //     y: H / 2,
        //     wrapLength: 1000,
        //     onclick: undefined,
        // }));

        var i = 0;
        const actions = this.screen.actions.filter(action => {
            return FlagUtil.matches(
                action.needsFlags ?? [],
                Object.keys(this.flags),
            );
        });

        const len = actions.length;
        const totalWidth = this.app.screen.width * 0.8;
        for (const action of actions) {
            const text = new ParrotText({
                label: action.label,
                x: this.app.screen.width / 2 - totalWidth / 2 + totalWidth * (i + 0.5) / len,
                y: this.app.screen.height * 9 / 10,
                width: totalWidth / len * 0.8,
                height: this.app.screen.height * 0.15,
                wrapLength: 16,
                onclick: () => this.takeAction(action),
            });
            this.addChild(text);
            i++;
        }

        const narration = new ParrotText({
            label: ScreenUtil.getText(this.screen, Object.keys(this.flags)),
            x: narrationWidth / 2,
            y: H / 2,
            width: narrationWidth,
            height: H,
            wrapLength: 30,
            onclick: undefined,
        });
        this.addChild(narration);
    }

    async createSprite(actor: Actor): Promise<Sprite> {
        const asset = await Assets.load(`images/${actor.img}`);
        const sprite = new Sprite(new Texture(asset));
        return sprite;
    }
}