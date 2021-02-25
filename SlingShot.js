class SlingShot{
	constructor(body,anchor){
		
		var options={
             bodyA:body,			 
			pointB:anchor, 
			stiffness:0.007, 
			length:1
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.SlingShot=Constraint.create(options)
		World.add(world,this.SlingShot)
	}

	attach(body){
		this.SlingShot.bodyA=body;
	}

	fly(){
		this.SlingShot.bodyA=null;
	}

	display(){
		if(this.SlingShot.bodyA){
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}