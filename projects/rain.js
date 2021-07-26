function RainDrop(in_x, in_y, in_size){
  this.x = in_x;
  this.y = in_y;
  this.size = in_size;
  this.speed = in_size * 13;
  this.w = random(5) + 10;
  this.r1 = random(8) - 6;
  this.h_speed = 2 * in_size + random(.1);
  colorMode(HSB, 100);
  h = random(10) + 55;
  s = 100;
  b = 100;
  a = in_size * 200 - 50;
  this.color = color(h, s, b, a);

  this.show = function(){
    fill(this.color);
    beginShape();
    vertex(this.x, this.y);
    bezierVertex(this.x+10*this.size+this.r1, this.y+32*this.size, this.x+(this.w-1)*this.size, this.y+25*this.size, this.x+this.w*this.size, this.y+40*this.size);
    bezierVertex(this.x+this.w*this.size, this.y+60*this.size, this.x-this.w*this.size, this.y+60*this.size, this.x-this.w*this.size, this.y+40*this.size);
    bezierVertex(this.x-(this.w-1)*this.size, this.y+25*this.size, this.x-10*this.size-this.r1, this.y+32*this.size, this.x , this.y );
    endShape();
  }
}

let rain = [];

function setup() {
  createCanvas(windowWidth, windowHeight - 5);
  frameRate(35);
  noStroke();
}


function draw() {
  background(0);
  for(var i = 0; i < 5; i += 1){
    if(rain.length < 400){
      rain.push(new RainDrop(random(width), random(5), random(0.3)+0.4));
    }
  }

  for (let drop of rain) {
    drop.y += drop.speed;
    drop.x += drop.h_speed;
    if(drop.y > height){
      drop.y -= height;
    }
    if(drop.x > width){
      drop.x -= width;
    }
    drop.show();
  }
}

