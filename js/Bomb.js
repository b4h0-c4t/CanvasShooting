class Bomb {
  constructor(maxSize, number, speed) {
    this.size = 0;
    this.maxSize = maxSize;
    this.number = number;
    this.speed = speed;
    this.width = 10;
    this.sw = 0;
    this.x = 0;
    this.y = 0;
  }

  bulletClear(bullets) {
    for(let i = 0; i < bullets.array.length; i++) {
      let dis = bullets.array[i].distance(bullets.array[i].x, bullets.array[i].y);
      if(dis < this.size && bullets.array[i].user == 1) {
        bullets.array.splice(i, 1);
      }
    }
  }

  setStart(x, y) {
    if(this.sw == 0 && this.number > 0) {
      this.sw = 1;
      this.x = x;
      this.y = y;
      this.number--;
    }
  }

  draw(ctx) {
    if(this.sw == 1) {
      this.size += this.speed;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI, false);
      ctx.strokeStyle = '#306';
      ctx.lineWidth = this.width;
      ctx.stroke();
      if(this.size > this.maxSize) {
        this.size = 0;
        this.sw = 0;
      }
    }
  }

  distance(x, y) {
    return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
  }

}
