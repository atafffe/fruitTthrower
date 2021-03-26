class Fruit {
    constructor(x,y,radius) {

      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':1.0,
          isStatic:true
      }
      
      this.body = Bodies.circle(this.x, this.y, this.radius, options);
      this.image = loadImage("mango.png")

      this.x = x;
      this.y = y;
      this.radius = radius;

      World.add(world,this.body);
    }
    display(){

      var position = this.body.position;
      push();
      translate(position.x,position.y);

      fill("yellow");

      imageMode(CENTER);
      ellipseMode(CENTER);
	    image(this.image, 0,0,this.radius*2, this.radius*2);
      pop();

    }
  }