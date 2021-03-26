class Rock {
	constructor(x,y,radius){

		var options = {
			isStatic:false,
			density: 1.2,
			restitution: 0.5,
			friction: 1
		}

		this.x = x;
		this.y = y;
		this.radius = radius

		this.image = loadImage("stone.png");

		this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
		World.add(world,this.body);

	}
	display()
	{
		var position = this.body.position;		
		push();
		translate(position.x,position.y);
		fill("grey");

		imageMode(CENTER);
		ellipseMode(RADIUS);
		image(this.image, 0, 0, this.radius*2, this.radius*2);
		pop();
	}

}