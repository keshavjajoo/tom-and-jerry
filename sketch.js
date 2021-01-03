var garden,gardenimage
var jerry,jerryimage
var tom,tomimage

function preload() {
    //load the images here
tomimage1=loadAnimation("images/tomOne.png")
tomimage2=loadAnimation("images/tomTwo.png","images/tomThree.png")
tomimage3=loadAnimation("images/tomFour.png")
jerryimage1=loadAnimation("images/jerryOne.png")
jerryimage2=loadAnimation("images/jerryTwo.png","images/jerryThree.png")
jerryimage3=loadAnimation("images/jerryFour.png")
gardenimage=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   // garden=createSprite(1000,800,1000,800)
 //s garden.addImage(gardenimage)
    tom=createSprite(800,500,20,20)
    tom.addAnimation("tomsleeping",tomimage1)
   tom.scale=0.1
 jerry=createSprite(300,550,20,20)
  jerry.addAnimation("jerrysleeping",jerryimage1)
   jerry.scale=0.1
  

  
}

function draw() {

    background(gardenimage);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0
    tom.addAnimation("tomLastImage",tomimage3)
    tom.changeAnimation("tomLastImage",tomimage3)
    jerry.addAnimation("jerryrunning",jerryimage2)
    jerry.changeAnimation("jerryrunning",jerryimage2)
    }

    drawSprites();
}


function keyPressed(){
if(keyCode=== LEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("tomRunning",tomimage2)
    jerry.addAnimation("jerryrunning",jerryimage2)
    tom.changeAnimation("tomRunning",tomimage2)
    jerry.addAnimation("jerryrunning",jerryimage2)
}


}
