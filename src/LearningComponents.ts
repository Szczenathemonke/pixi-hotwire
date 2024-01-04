import {
  Application,
  BitmapText,
  Container,
  Graphics,
  Sprite,
  TextStyle,
  Text,
  BitmapFont,
} from "pixi.js";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  backgroundColor: 0x6495ed,
  resizeTo: window,
});

//container section
const container = new Container();
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;
app.stage.addChild(container);

// Sprite section
const sprites: Sprite[] = [];
let parent = container;
for (let i = 0; i < 3; i++) {
  let sprite = Sprite.from("assets/szczonke.png");
  sprite.anchor.set(0.5);
  parent.addChild(sprite);
  sprites.push(sprite);
  parent = sprite;
}

// ticker section
let elapsed = 0.0;
app.ticker.add((delta) => {
  elapsed += delta / 60;
  const amount = Math.sin(elapsed);
  const scale = 1.0 + 0.25 * amount;
  const alpha = 0.75 + 0.25 * amount;
  const angle = 40 * amount;
  const x = 75 * amount;
  for (let i = 0; i < sprites.length; i++) {
    const sprite = sprites[i];
    sprite.scale.set(scale);
    sprite.alpha = alpha;
    sprite.angle = angle;
    sprite.x = x;
  }
});
// new graphic
const graphic = new Graphics();

graphic.beginFill(0xff00ff);
graphic.lineStyle(10, 0xff00ff);
graphic.drawCircle(0, 0, 25);
graphic.endFill();

container.addChild(graphic);

// new text

const styly = new TextStyle({
  align: "center",
  fill: "#754c24",
  fontSize: 42,
});
const texty: Text = new Text("私に気づいて先輩！", styly);

container.addChild(texty);

// new bitmap

BitmapFont.from("comic 32", {
  fill: "#ffffff", // White, will be colored later
  fontFamily: "Comic Sans MS",
  fontSize: 32,
});

const bitmapTexty = new BitmapText("I love baking, my family, and my friends", {
  fontName: "comic 32",
  fontSize: 32, // Making it too big or too small will look bad
  tint: 0xff0000, // Here we make it red.
});

container.addChild(bitmapTexty);
