// Rogel Sih
// Assignment 4 - Bouncy Balls Start
// INFT1206 - Web Development Fundamentals
// A web page to demonstrate objects in this case bouncy balls. With some added functions.
// The user will now be able to control a shape and when it colides with any of the balls,
// the ball will be eaten/deleted.

// set up canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {

   constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
   }

   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
   }

   update() {
      if ((this.x + this.size) >= width) {
         this.velX = -(Math.abs(this.velX));
      }

      if ((this.x - this.size) <= 0) {
         this.velX = Math.abs(this.velX);
      }

      if ((this.y + this.size) >= height) {
         this.velY = -(Math.abs(this.velY));
      }

      if ((this.y - this.size) <= 0) {
         this.velY = Math.abs(this.velY);
      }

      this.x += this.velX;
      this.y += this.velY;
   }

   collisionDetect() {
      for (const ball of balls) {
        if (!(this === ball) && ball.exists) {
          const dx = this.x - ball.x;
          const dy = this.y - ball.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
    
          if (distance < this.size + ball.size) {
            ball.color = this.color = randomRGB();
          }
        }
      }
    }

}
// Shape Class
class Shape {
   constructor(x, y, velX, velY) {
     this.x = x;
     this.y = y;
     this.velX = velX;
     this.velY = velY;
   }
 }

 // Ball class derived from Shape
class Ball extends Shape {
   constructor(x, y, velX, velY, size, color) {
     super(x, y, velX, velY);
     this.color = color;
     this.size = size;
     // used to track wether the ball exists
     this.exists = true;
   }
 }
// EVIL CIRCLE CLASS!
 class EvilCircle extends Shape {
   constructor(x, y) {
     // hard coded values
     super(x, y, 20, 20);
     this.color = 'white';
     this.size = 10;
   }

   // used to control the evil circle using the WASD keys
   ControlCircle() {
   window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "a":
         // subtract value of x to go left
          this.x -= this.velX;
          break;
         // add value of x to go right
        case "d":
          this.x += this.velX;
          break;
         // add value y to go up
        case "w":
          this.y += this.velY;
          break;
         // subtract value y to go down
        case "s":
          this.y -= this.velY;
          break;
      }
    });
   }
   // Draw the evil circle 
   // use strokeStyle and stroke because we dont want the evil circle to be filled
   draw(ctx) {
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 3; // Thicker line
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.stroke(); // Stroke instead of fill
    }
 }

const balls = [];

while (balls.length < 25) {
   const size = random(10,20);
   const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

  balls.push(ball);
}

function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0,  width, height);

   for (const ball of balls) {
     ball.draw();
     ball.update();
     ball.collisionDetect();
   }

   requestAnimationFrame(loop);
}

loop();
