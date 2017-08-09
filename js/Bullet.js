class Bullet {
  constructor(data) {
    this.x = data.x;
    this.y = data.y;
    this.dx = data.dx;
    this.dy = data.dy;
    this.size = data.size;
    this.user = data.user;
    this.color = data.color;
    this.image = data.image;
    this.frame = 0;
    if(data.func != undefined) {
      this.func = data.func;
      this.i = data.i;
    }
  }

  draw(ctx) {

    if(this.func == undefined) {
      this.x += this.dx;
      this.y += this.dy;
    } else if(this.func == 1) {
      let rad = (this.i + this.frame) * (Math.PI / 180);
      this.x += this.dx(rad) * 6;
      this.y += this.dy(rad) * 6;
    } else if(this.func == 2) {
      this.x += this.dx;
      this.y += this.dy;
      this.dx += this.dx / 120;
      this.dy += this.dy / 120;
    } else if(this.func == 3) {
      this.x += this.dx;
      this.y += this.dy;
      this.dx -= this.dx / 240;
      this.dy -= this.dy / 240;
    }

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
    ctx.closePath();

    ctx.fillStyle = '#26c';
    ctx.fill();
    ctx.drawImage(this.image, this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);

    this.frame++;
  }

  isOutside() {
    if(this.y < 0 || this.y > ctx.canvas.height || this.x < 0 || this.x > ctx.canvas.width) {
      return true;
    } else {
      return false;
    }
  }

  distance(x, y) {
    return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
  }
}
