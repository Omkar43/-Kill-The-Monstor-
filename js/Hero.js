class Hero {
  constructor(x, y, r) {
    var options = { 
      isStatic : false,
      density: 1, 
      frictionAir: 1};

    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("images/Superhero-01.png");
    this.body = Bodies.circle(this.x,this.y,(this.r)/2,options); 
    World.add(world,this.body);

  }

  display() {
  
  var angle = this.angle;
    rotate(angle);
  push();

  translate(this.body.position.x,this.body.position.y);
  imageMode(CENTER);
  image(this.image, 0,0,this.r,this.r);
  pop();
  }
}
