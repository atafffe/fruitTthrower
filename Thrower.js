class Thrower {
    constructor(x,y) {

      var options = {
          density: 1.5,
          friction: 1,
          isStatic: true
      }
      
      this.body = Bodies.rectangle(x, y, 50, 50, options);

      this.width = 315;
      this.height = 380;

      this.image = loadImage("boy.png");
      
      World.add(world, this.body);
    }
    display() {

      var position = this.body.position;
      push();
      translate(position.x,position.y);

      strokeWeight(4);
      stroke("blue");
      fill("red");

      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }