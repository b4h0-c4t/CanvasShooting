class Bullets {

  constructor() {
    this.array = [];
  }

  setBullet(data) {
    this.array.push(new Bullet(data));
  }

  gc() {
    this.array.forEach((obj, i) => {
      if(obj.isOutside()) {
        this.array.splice(i, 1);
      }
    });
  }

  draw(ctx) {
    this.array.forEach((obj) => {
      obj.draw(ctx);
    });
  }

}
