var thunderImg1, thunderImg2, thunderImg3, thunderImg4
var thunderSprite
var man,
var manImg1, manImg2, manImg3, manImg4, manImg5, manImg6, manImg7, manImg8
function preload(){
    man_collided = loadAnimation("man_collided.png");
    man_running=loadAnimation(walking_1.png, walking_2.png,walking_3.png, walking_4.png, walking_5.png, walking_6.png, walking_7.png, walking_8.png)
    thunderImg1=loadImage("1.png")
    thunderImg2=loadImage("2.png")
    thunderImg3=loadImage("3.png")
    thunderImg4=loadImage("4.png")
}   

function setup(){
  thunderSprite=createSprite(300, 50, 50, 50) 
  thunderSprite.addImage(thunderImg1)
  thunderSprite.scale=0.3
  man=createSprite(300, 400, 50, 50)
  man.addAnimation(man_running)
  man.scale=0.4

}

function draw(){
    thunderSprite.display()
    man.display()
    poulateThunder()
}   
function poulateThunder(){

}
