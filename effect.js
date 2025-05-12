import { Ball } from "./ball.js";

export class Effects {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ballParticles = [];
    this.numberOfBallParticles = 100;
    this.colorAdjustment = 1;
    this.createBallParticles();
  }
  createBallParticles() {
    for (let i = 0; i < this.numberOfBallParticles; i++) {
      this.ballParticles.push(new Ball(this));
    }
  }
  handleBallParticles(context) {
    this.connectBallParticles(context);
    this.ballParticles.forEach((ball) => {
      ball.draw(context);
      ball.update();
    });
  }
  connectBallParticles(context) {
    const maxDistance = 100;
    for (let i = 0; i < this.ballParticles.length; i++) {
      for (let j = i; j < this.ballParticles.length; j++) {
        const distanceX = this.ballParticles[i].x - this.ballParticles[j].x;
        const distanceY = this.ballParticles[i].y - this.ballParticles[j].y;
        const distance = Math.hypot(distanceX, distanceY);
        if (distance < maxDistance) {
          context.save();
          const opacity = this.colorAdjustment - distance / maxDistance;
          context.globalAlpha = opacity;
          context.beginPath();
          context.moveTo(this.ballParticles[i].x, this.ballParticles[i].y);
          context.lineTo(this.ballParticles[j].x, this.ballParticles[j].y);
          context.strokeStyle = "white";
          context.stroke();
          context.restore();
        }
      }
    }
  }
}
