const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerbase;
var player;
var computerbase;
var computer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerbase = new Playerbase (300,random(450,height-300),150,180)
   player = new Player (285,playerbase.body.position.y - 150,50,180);
   computerbase = new Computerbase (width-300,random(450,height-300),180,150)
   computer = new Computerplayer (width-285,computerbase.body.position.y - 150,50,180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
playerbase.display ()
player.display ()
computer.display()
computerbase.display()

   //display Player and computerplayer


}
