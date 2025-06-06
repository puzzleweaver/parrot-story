import { Application } from "pixi.js";
import { PixiScene } from "./pixi/pixi-scene";
import { tree } from "./game/tree";

(async () => {
    const app = new Application();
    await app.init({ background: "#eee", resizeTo: window });
    document.getElementById("pixi-container")!.appendChild(app.canvas);

    var scene: PixiScene | undefined = undefined;

    // const id = Object.keys(tree)[Math.floor(Math.random() * Object.keys(tree).length)];
    // const screen = tree[id];
    // new PixiScene(app, screen);
    const setScene = (newScene: PixiScene) => {
        if (scene !== undefined)
            app.stage.removeChild(scene);
        app.stage.addChild(newScene);
        scene = newScene;
    };

    setScene(new PixiScene(app, tree[0], setScene, {}));

    // Create a bunny Sprite
    // const bunny = new Sprite(texture);
    // bunny.anchor.set(0.5);
    // bunny.position.set(app.screen.width / 2, app.screen.height / 2);

    // Listen for animate update
    app.ticker.add((time) => {
        scene?.onTick(time);
    });
})();
