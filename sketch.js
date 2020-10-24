

var car,wall;
var redcar,redcarImg;
var bluecar,bluecarImg;
var greencar,greencarImg;
var yellowcar,yellowcarImg;


var speed, weight; 

function preload(){
	redcarImg=loadImage("red_car.png");
	bluecarImg=loadImage("blue_car.png");
	yellowcarImg=loadImage("yellow_car.png");
	greencarImg=loadImage("green_car.png");

}


function setup() {
  createCanvas(1600, 400);


	speed=random(55,200)
	weight=random(400,1500)


	car=createSprite(50, 200, 50,50);   
    car.addImage("car1", greencarImg);
	car.velocityX = speed;

	car.shapeColor=color(255);


  
  	wall=createSprite(1500,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(255);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		car.addImage("car1",redcarImg);
		car.scale=0.6;
	}

	if(deformation<180 && deformation>100)
	{
		car.addImage("car1",bluecarImg);
	}

	if(deformation<100)
	{
		car.addImage("car1",yellowcarImg);
	}
  }  
  
  drawSprites();
 
}


