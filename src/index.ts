import { Application } from "pixi.js";
import { AnimatedScene } from "./scenes/AnimatedScene";
import { TickerScene } from "./scenes/TickerScene";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

// pass in the screen size to avoid "asking up"
const sceny: AnimatedScene = new AnimatedScene();
const sceny2: TickerScene = new TickerScene(app.view.width, app.view.height);

app.stage.addChild(sceny);
app.stage.addChild(sceny2);
