var PLAY=1
var END=0
var gamestate=PLAY


var back_img
var Flower1,Flower2,Flower3
var Bomb
var bee1,bee2,bee3,bee4,bee5
var restart, gameover

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function preload(){

  back_img = loadImage("Images/Background.jpg")
  Bomb_Img = loadImage("Images/Bomb.png")
  Flower1 = loadImage("Images/Flower1.png")
  Flower2 = loadImage("Images/Flower2.png")
  Flower3 = loadImage("Images/Flower3.png")
  bee1=loadImage("Images/bee1.png")
  bee2=loadImage("Images/bee2.png")
  bee3=loadImage("Images/bee3.png")
  bee4=loadImage("Images/bee4.png")
  bee5=loadImage("Images/bee5.png")

  reset_img=loadImage("Images/restart.png")
  gameover_Img=loadImage("Images/gameover.png")

}




function setup(){
  createCanvas(400,400);

  back=createSprite(200,200)
  back.addImage("back_img",back_img)
  back.scale=3

  gameOver = createSprite(300,100);
  gameOver.addImage(gameover_Img);
  
  restart = createSprite(300,140);
  restart.addImage(reset_img);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

function draw() 
{
  background("white");
Flower()
Bomb()
Bees()



 drawSprites();
}
function Flower(){
  if (frameCount % 40 === 0){
    var flower = createSprite(0,200)
    var num = Math.round(random(50,350))
    flower.y=num;
    flower.velocityX=5
    flower.scale=0.2

    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:flower.addImage(Flower1)
      break;
      case 2:flower.addImage(Flower2)
      break;
      case 3:flower.addImage(Flower3)
      break;
      default:break;
    }
  }
}
function Bomb(){
  if(frameCount % 250 === 0){
    var bomb = createSprite(0,200)
    bomb.addImage(Bomb_Img)
    var bom=Math.round(random(200,200))
    bomb.y=bom;
    bomb.velocityX=5
    bomb.scale=0.3
  }
}
function Bees(){
  if(frameCount % 60 === 0){
    var bee=createSprite(0,200)
    bee.velocityX=5
    var be = Math.round(random(50,350))
    bee.y=be;
    bee.scale=0.5

    var rand = Math.round(random(1,5))
    switch(rand){
      case 1:bee.addImage(bee1)
      break;
      case 2:bee.addImage(bee2)
      break;
      case 3:bee.addImage(bee3)
      break;
      case 4:bee.addImage(bee4)
      break;
      case 5:bee.addImage(bee5)
      bee.scale=0.2
      break;
      default:break;


    }
  
  }
}
}