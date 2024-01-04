import { AnimatedSprite, Container, Texture } from "pixi.js";

export class AnimatedScene extends Container {
  constructor() {
    super();

    // This is an array of strings, we need an array of Texture
    const clampyFrames: string[] = [
      "heart_seq_01.png",
      "heart_seq_02.png",
      "heart_seq_03.png",
      "heart_seq_04.png",
    ];

    const animatedClampy: AnimatedSprite = new AnimatedSprite(
      clampyFrames.map((stringy) => Texture.from(stringy))
    );
    animatedClampy.play();
    animatedClampy.animationSpeed = 0.04;

    this.addChild(animatedClampy); // we just add it to the scene

    // Now... what did we learn about assigning functions...
    animatedClampy.onFrameChange = this.onClampyFrameChange.bind(this);
  }

  private onClampyFrameChange(currentFrame: any): void {
    console.log("Heart's current frame is", currentFrame + 1);
  }
}
