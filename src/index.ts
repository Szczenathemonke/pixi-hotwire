import { Application, ParticleContainer, Texture } from "pixi.js";
import * as particleSettings from "./emitter1.json";
import { Emitter } from "pixi-particles";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: "00AAFF",
  width: window.innerWidth,
  height: window.innerHeight,
});

const particleContainer = new ParticleContainer();
particleContainer.x = 200;
particleContainer.y = 200;
app.stage.addChild(particleContainer);

const emitter = new Emitter(
  particleContainer,
  Texture.from("szczonke.png"),
  particleSettings
);
emitter.autoUpdate = true; // If you keep it false, you have to update your particles yourself.
emitter.updateSpawnPos(200, 100);
emitter.emit = true;
