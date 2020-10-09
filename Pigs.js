class pig {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 75, 75, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("green");
      strokeWeight(5);
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  