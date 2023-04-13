import {
  Application,
  Container,
  Graphics,
  Sprite,
  TextStyle,
  Text,
  BlurFilter,
  ParticleContainer,
  Texture,
} from "pixi.js";
import * as particleSettings from "./emitter.json";
import { Emitter } from "pixi-particles";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: window.innerWidth,
  height: window.innerHeight,
});
const myBlurFilter = new BlurFilter();

const conty: Container = new Container();
conty.x = 200;
conty.y = 0;
app.stage.addChild(conty);

const clampy: Sprite = Sprite.from("clampy.png");
clampy.x = 100;
clampy.y = 100;
clampy.filters = [myBlurFilter];
conty.addChild(clampy);

const graphy: Graphics = new Graphics();

// we give instructions in order. begin fill, line style, draw circle, end filling
graphy.beginFill(0xff00ff);
graphy.lineStyle(10, 0x00ff00);
graphy.drawCircle(0, 0, 25); // See how I set the drawing at 0,0? NOT AT 100, 100!
graphy.endFill();

conty.addChild(graphy); //I can add it before setting position, nothing bad will happen.

// Here we set it at 100,100
graphy.x = 100;
graphy.y = 100;

const styly: TextStyle = new TextStyle({
  align: "center",
  fill: "#754c24",
  fontSize: 42,
});

const texty: Text = new Text("text", styly); // Text supports unicode!
texty.text = "This is expensive to change, please do not abuse";

conty.addChild(texty);

const particleContainer = new ParticleContainer();
app.stage.addChild(particleContainer);

const emitter = new Emitter(
  particleContainer,
  Texture.from("particle.png"),
  particleSettings
);
emitter.autoUpdate = true; // If you keep it false, you have to update your particles yourself.
emitter.updateSpawnPos(200, 100);
emitter.emit = true;
