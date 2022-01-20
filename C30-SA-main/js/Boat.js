class Boat {

  constructor(x, y, width, height, boatPos ) {
    var options = {
     restitution:0.8,
    friction:1.0,
    density:1.0,
    };
    this.width = width;
    this.height = height;
    this.boatPostion = boatPos;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("assets/boat.png")
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
  //fill("brown");
    imageMode(CENTER);
   // rect(0, 0, this.width, this.height);
   image(this.image,0,this.boatPostion,this.width,this.height);
   noTint();
    pop();
  }
}
