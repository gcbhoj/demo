export class Ball {
  constructor(effect) {
    this.effect = effect;
    this.outerRadius = 10;
    this.innerRadius = 5;
    this.x =
      this.outerRadius +
      Math.random() * (this.effect.width - this.outerRadius * 2);
    this.y =
      this.outerRadius +
      Math.random() * (this.effect.height - this.outerRadius * 2);

    this.velocityX = Math.random() * 1 - 0.5;
    this.velocityY = Math.random() * 1 - 0.5;
    this.returnVelocity = 1;
    this.innerCirclePosition = 2;
  }

  update() {
    this.x += this.velocityX;
    if (
      this.x > this.effect.width - this.outerRadius ||
      this.x < this.outerRadius
    ) {
      this.velocityX *= -this.returnVelocity;
    }
    this.y += this.velocityY;
    if (
      this.y > this.effect.height - this.outerRadius ||
      this.y < this.outerRadius
    ) {
      this.velocityY *= -this.returnVelocity;
    }
  }
  draw(context) {
    /*const color1 = context.createLinearGradient(
        0,
        0,
        this.effect.width,
        this.effect.height
      );
      color1.addColorStop(0, `hsl(${Math.random() * 360}, 100%, 50%)`);
      color1.addColorStop(0.25, `hsl(${Math.random() * 360}, 100%, 50%)`);
      color1.addColorStop(0.5, `hsl(${Math.random() * 360}, 100%, 50%)`);
      color1.addColorStop(1, `hsl(${Math.random() * 360}, 100%, 50%)`);*/
    const color1 = context.createLinearGradient(
      0,
      0,
      this.effect.width,
      this.effect.height
    );
    color1.addColorStop(0, "cyan");
    color1.addColorStop(0.25, "magenta");
    color1.addColorStop(0.5, "yellow");
    color1.addColorStop(1, "blue");

    //const color1 = "rgba(236,240,241,1)";
    const color2 = "rgba(179,179,179,.8)";
    context.fillStyle = color1;
    context.beginPath();
    context.arc(this.x, this.y, this.outerRadius, 0, Math.PI * 2);
    context.fill();

    context.fillStyle = color2;
    context.beginPath();
    context.arc(
      this.x - this.innerCirclePosition,
      this.y - this.innerCirclePosition,
      this.innerRadius,
      0,
      Math.PI * 2
    );
    context.fill();
  }
}
