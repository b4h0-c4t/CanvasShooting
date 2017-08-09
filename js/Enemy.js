class Enemy {
  constructor(data) {
    this.x = data.x;
    this.y = data.y;
    this.size = data.size;
    this.hp = data.hp;
    this.maxHp = data.hp;
    this.dx = 0;
    this.dy = 0;
    this.image = new Image();
    this.image.src = data.image;
  }

  move(ctx) {
    this.x = (Math.sin(this.dx) * (ctx.canvas.width / 2 - this.size)) + (ctx.canvas.width / 2);
    this.dx += 0.01;
    this.y = (Math.cos(this.dy) * (ctx.canvas.height / 6 - this.size)) + (ctx.canvas.height / 6);
    this.dy += 0.01
  }

  isHit(bullets) {
    let hits = 0;
    for(let i = 0; i < bullets.array.length; i++) {
      let dis = bullets.array[i].distance(this.x, this.y);
      if(dis < this.size && bullets.array[i].user == 0) {
        bullets.array.splice(i, 1);
        hits++;
      }
    }

    return hits;
  }

  damage(bullets, bomb) {
    this.hp -= this.isHit(bullets);
  }

  isEnd() {
    if(this.hp < 0) {
      return true;
    }
    return false;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x - (this.size * 84 / 100) / 2, this.y / 2, this.size * 84 / 100, this.size);
    /*
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI, false);
    ctx.closePath();
    ctx.fillStyle = '#f06';
    ctx.fill();
    */
    ctx.beginPath();
    ctx.rect(0,0, ctx.canvas.width * this.hp / this.maxHp, 50);
    ctx.closePath();
    ctx.fillStyle = '#f00';
    ctx.fill();
  }
}
