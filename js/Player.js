class Player {

  constructor(x, y, speed, size, image, imgWidth, imgHeight) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;
    this.bombNum = 3;
    this.bombSw = 0;
    this.bombSize = size;
    this.maxBombSize = 300;
    this.image = new Image();
    this.image.src = image;
    this.imgWidth = imgWidth;
    this.imgHeight = imgHeight;
    this.keyMap = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    this.death = 0;
  }

  moveX(direction, range) {
    if(this.size <= this.x && this.x <= range - this.size) {
      this.x += this.speed * direction;
      if(this.x < this.size) {
        this.x = this.size;
      }else if(this.x > range - this.size) {
        this.x = range - this.size
      }
    }
  }

  moveY(direction, range) {
    if(this.size <= this.y && this.y <= range - this.size) {
      this.y += this.speed * direction;
      if(this.y < this.size) {
        this.y = this.size;
      }else if(this.y > range - this.size) {
        this.y = range - this.size
      }
    }
  }

  move(ctx) {
    if(this.keyMap.left == 1) {
      this.moveX(-1, ctx.canvas.width);
    }
    if(this.keyMap.top == 1) {
      this.moveY(-1, ctx.canvas.height);
    }
    if(this.keyMap.right == 1) {
      this.moveX(1, ctx.canvas.width);
    }
    if(this.keyMap.bottom == 1) {
      this.moveY(1, ctx.canvas.height);
    }
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  addKeyMap(key) {
    switch(key) {
      case 37:
        this.keyMap.left = 1;
        break;
      case 38:
        this.keyMap.top = 1;
        break;
      case 39:
        this.keyMap.right = 1;
        break;
      case 40:
        this.keyMap.bottom = 1;
        break;
    }
  }

  rmKeyMap(key) {
    switch(key) {
      case 37:
        this.keyMap.left = 0;
        break;
      case 38:
        this.keyMap.top = 0;
        break;
      case 39:
        this.keyMap.right = 0;
        break;
      case 40:
        this.keyMap.bottom = 0;
        break;
    }
  }

  isHit(bullets) {
    for(let i = 0; i < bullets.array.length; i++) {
      let dis = bullets.array[i].distance(this.x, this.y);
      if(dis < bullets.array[i].size && bullets.array[i].user == 1) {
        return true;
      }
    }
    return false;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x - this.imgWidth / 2, this.y - this.imgHeight / 2, this.imgWidth, this.imgHeight);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size + 2, 0, 2*Math.PI, false);
    ctx.closePath();
    ctx.fillStyle = '#000';
    ctx.fill();
    }
}
