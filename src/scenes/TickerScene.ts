import { Container, Sprite, Ticker } from "pixi.js";

export class TickerScene extends Container {
  private readonly screenWidth: number;
  private readonly screenHeight: number;

  private clampy: Sprite;
  private clampyVelocity: number = 5;

  constructor(screenWidth: number, screenHeight: number) {
    super();

    this.screenHeight = screenHeight;
    this.screenWidth = screenWidth;

    this.clampy = Sprite.from("clampy.png");

    this.clampy.anchor.set(0.5);
    this.clampy.x = 0;
    this.clampy.y = this.screenHeight / 2;
    this.addChild(this.clampy);

    Ticker.shared.add(this.update, this);
    // Ticker.shared.add(this.update.bind(this)); same as this
  }
  private update(deltaTime: number): void {
    this.clampy.x = this.clampy.x + this.clampyVelocity * deltaTime;

    if (this.clampy.x > this.screenWidth) {
      this.clampy.x = 0;
    }
  }
}
