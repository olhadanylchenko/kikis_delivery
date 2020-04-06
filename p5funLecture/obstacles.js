class Obstacles {
  constructor() {
    this.img = loadImage("assets/crow.gif");
    this.height = 40;
    this.width = 40;
    this.x = width;
    //GIVING RANDOM NUMBER TO THE this.y
    this.y = random(0, height - this.height);
  }
  checkCollision(player) {
    let left = this.x;
    let right = this.x + this.width;
    let playerLeft = player.x;
    let playerRight = player.x + player.width;

    let top = this.y;
    let bottom = this.y + this.height;

    let playerTop = player.y;
    let playerBottom = player.y + player.height;

    let xCollision =
      (left > playerLeft && left < playerRight) ||
      (right > playerLeft && right < playerRight);

    let yCollision =
      (top > playerTop && top < playerBottom) ||
      (bottom > playerTop && bottom < playerBottom);

    let collision = xCollision && yCollision;
    return collision;
  }

  display() {
    //Moving the OBSTACLE TO THE LEFT
    this.x -= 2;
    image(this.img, this.x, this.y, this.width, this.height);
  }
}
