class Player {
  constructor() {
    this.img = loadImage("assets/player/kik.gif");
    this.bubble = loadImage("assets/player/watch-out.gif");
    this.gravity = 0.2;
    this.velocityY = 0;
    this.obstacleHit = false;
  }
  setup() {
    this.height = this.img.height / 5;
    console.log(this.height);
    this.width = this.img.width / 5;
    this.x = 10;

    this.y = height - this.height;
  }
  jump() {
    this.velocityY -= 3;
  }
  display() {
    this.velocityY += this.gravity;
    this.y += this.velocityY;
    if (this.y > height - this.height) {
      this.y = height - this.height;
      this.velocityY = 0;
    }
    image(this.img, this.x, this.y, this.width, this.height);
    if (this.obstacleHit) {
      image(
        this.bubble,
        this.x + 73,
        this.y - 20,
        this.bubble.width * 0.9,
        this.bubble.height * 0.9
      );
    }
  }
  onCollision() {
    this.obstacleHit = true;
    setTimeout(() => {
      this.obstacleHit = false;
      this.bubble.reset();
    }, 2500);
  }

  gotPackage() {
    console.log("WOOHOO GOT THAT MOTHER FUCKING PACKAGE");
  }
}
