let canvas;
let ctx;
let hpId;
let bombId;

let blueBullet = new Image();
blueBullet.src = './images/boal.png';
let player = new Player(300, 600, 10, 1, './images/player.png', 100, 75);
let bullets = new Bullets();
let bomb = new Bomb(350, 3, 8);
let enemy = new Enemy({
  x: 300,
  y: 200,
  size: 100,
  hp: 1000,
  image: './images/enemy.png'
});
let frame = 0;

function loop() {
    requestAnimFrame(loop);
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
    player.move(ctx);
    player.draw(ctx);

    bomb.bulletClear(bullets);
    bomb.draw(ctx);

    enemy.move(ctx);
    enemy.draw(ctx);

    bullets.draw(ctx);

    //player bullets
    if(frame % 5 == 0) {
      bullets.setBullet({
        x: player.x,
        y: player.y - 50,
        dx: 0,
        dy: -50,
        size: 5,
        color: '#444',
        user: 0,
        image: blueBullet
      });
      bullets.setBullet({
        x: player.x -30,
        y: player.y,
        dx: 0,
        dy: -50,
        size: 5,
        color: '#444',
        user: 0,
        image: blueBullet
      });
      bullets.setBullet({
        x: player.x + 30,
        y: player.y,
        dx: 0,
        dy: -50,
        size: 5,
        color: '#444',
        user: 0,
        image: blueBullet
      });
    }

    //enemy bullets
    if(enemy.hp >= enemy.maxHp * 3 / 4) {
      if(frame % 15 == 0) {
        for(let i = 0; i < 360; i += 9) {
          let rad = i * (Math.PI / 180);
          bullets.setBullet({
            x: enemy.x,
            y: enemy.y,
            dx: Math.cos(rad) * 2,
            dy: Math.sin(rad) * 2,
            func: 2,
            size: 7,
            color: '#26c',
            user: 1,
            image: blueBullet
          });
        }
      }
      if(frame % 50 == 0) {
        for(let i = 0; i < 360; i += 18) {
          let rad = i * (Math.PI / 180);
          bullets.setBullet({
            x: enemy.x,
            y: enemy.y,
            dx: Math.cos(rad) * 5,
            dy: Math.sin(rad) * 5,
            func: 3,
            size: 7,
            color: '#26c',
            user: 1,
            image: blueBullet
          });
        }
      }
    }

    if(enemy.hp < enemy.maxHp * 3 / 4 && enemy.hp >= enemy.maxHp / 2) {
      if(frame % 30 == 0) {
        if((frame / 30) % 2 == 0) {
          for(let i = 0; i < 360; i += 18) {
            let rad = i * (Math.PI / 180);
            bullets.setBullet({
              x: enemy.x,
              y: enemy.y,
              dx: Math.cos,
              dy: Math.sin,
              i: i,
              func: 1,
              size: 7,
              color: '#26c',
              user: 1,
              image: blueBullet
            });
          }
        } else {
          for(let i = 0; i < 360; i += 18) {
            let rad = i * (Math.PI / 180);
            bullets.setBullet({
              x: enemy.x,
              y: enemy.y,
              dx: Math.sin,
              dy: Math.cos,
              i: i,
              func: 1,
              size: 7,
              color: '#26c',
              user: 1,
              image: blueBullet
            });
          }
        }
      }
      if(frame % 40 == 0) {
        for(let i = 0; i < 360; i += 18) {
          let rad = i * (Math.PI / 180);
          bullets.setBullet({
            x: enemy.x,
            y: enemy.y,
            dx: Math.cos(rad),
            dy: Math.sin(rad),
            func: 2,
            size: 7,
            color: '#26c',
            user: 1,
            image: blueBullet
          });
        }
      }
    }

    if(enemy.hp < enemy.maxHp / 2 && enemy.hp >= enemy.maxHp / 4) {
      if(frame % 10 == 0) {
        for(let i = 0; i < ctx.canvas.height; i += 60) {
          if((i / 60) % 2 == 0) {
            bullets.setBullet({
              x: 0,
              y: i + (frame / 60) % 100,
              dx: 3,
              dy: 1,
              size: 7,
              color: '#26c',
              user: 1,
              image: blueBullet
            });
          } else {
            bullets.setBullet({
              x: ctx.canvas.width,
              y: i + (frame / 60) % 100,
              dx: -3,
              dy: 1,
              size: 7,
              color: '#26c',
              user: 1,
              image: blueBullet
            });
          }
        }
      }
      if(frame % 1 == 0) {
        let rad = (frame * 1.5) % 360 * (Math.PI / 180);
        bullets.setBullet({
          x: enemy.x,
          y: enemy.y,
          dx: Math.cos(rad * Math.PI) * 3,
          dy: Math.sin(rad * Math.PI) * 3,
          size: 7,
          color: '#26c',
          user: 1,
          image: blueBullet
        });
      }
    }

    if(enemy.hp < enemy.maxHp / 4) {
      if(frame % 1 == 0) {
        let rad = (frame * 2.5) % 360 * (Math.PI / 180);
        bullets.setBullet({
          x: Math.cos(rad) * ctx.canvas.width / 2 + ctx.canvas.width / 2,
          y: Math.sin(rad) * ctx.canvas.width / 2 + ctx.canvas.height / 3,
          dx: -Math.cos(rad + 1) * 5 + Math.sin(rad),
          dy: -Math.sin(rad + 1) * 5 + Math.cos(rad),
          size: 7,
          color: '#26c',
          user: 1,
          image: blueBullet
        });
        bullets.setBullet({
          x: Math.sin(rad) * ctx.canvas.width / 2 + ctx.canvas.width / 2,
          y: Math.cos(rad) * ctx.canvas.width / 2 + ctx.canvas.height / 3,
          dx: -Math.sin(rad) * 5 + Math.cos(rad),
          dy: -Math.cos(rad) * 5 + Math.sin(rad),
          size: 7,
          color: '#26c',
          user: 1,
          image: blueBullet
        });
      }
      if(frame % 15 == 0) {
        bullets.setBullet({
          x: enemy.x,
          y: enemy.y,
          dx: (player.x - enemy.x) / 120,
          dy: (player.y - enemy.y) / 120,
          size: 7,
          color: '#26c',
          user: 1,
          image: blueBullet
        });
      }
    }


    if(player.isHit(bullets) && bomb.sw == 0) {
      bomb.number++;
      bomb.setStart(player.x, player.y);
      player.death++;
      hpId.innerHTML = '';
      for(let i = 0; i < 5 - player.death; i++) {
        hpId.innerHTML += '♡';
      }
      if(player.death >= 5) alert('You died.');
    }

    enemy.damage(bullets);
    if(enemy.isEnd()) {
      alert('死亡回数:' + player.death + '回');
    }

    bullets.gc();
    frame++;
}

requestAnimFrame = (() => {
  return  requestAnimationFrame ||
    webkitRequestAnimationFrame ||
    mozRequestAnimationFrame    ||
    oRequestAnimationFrame      ||
    msRequestAnimationFrame     ||
    function(callback){
      setTimeout(callback, 1000 / 60);
    };
})();

addEventListener('load', () => {
  canvas = document.querySelector('#canvas');
  ctx = canvas.getContext('2d');
  hpId = document.querySelector('#hp');
  bombId = document.querySelector('#bomb');
  hpId.innerHTML = '♡♡♡♡♡';
  bombId.innerHTML = '○○○';

  loop();
});

addEventListener('keydown', (e) => {
  player.addKeyMap(e.keyCode);
  if(e.keyCode == 16) {
    player.setSpeed(2.5);
  }
  if(e.keyCode == 88) {
    bomb.setStart(player.x, player.y, bombId);
  }
});

addEventListener('keyup', (e) => {
  player.rmKeyMap(e.keyCode);
  if(e.keyCode == 16) {
    player.setSpeed(7);
  }
});
