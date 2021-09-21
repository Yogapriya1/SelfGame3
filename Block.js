class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.5,
          friction :0.0001,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      this.visibility = 225
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed <= 3){
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
      }
    
      else {
        push()
        World.remove(world,this.body) 
        this.visibility= this.visibility-3
        tint(225,this.visibility)
        image(this.image,this.body.position.x,this.body.position.y,30,40)
        pop()
      }
    }
}