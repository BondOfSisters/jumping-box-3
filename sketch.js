var fixedSprite1,fixedSprite2,fixedSprite3,fixedSprite4;
var movingSprite;
var music;

function preload(){
   
    music = loadSound("music.mp3");
}


function setup(){
canvas=createCanvas(900,600);

    movingSprite=createSprite(random(10,700),300,20,20)
    movingSprite=shapeColor="black";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;

    fixedSprite1=createSprite(300,590,180,20);
    fixedSprite1.shapeColor="yellow";
    
    fixedSprite2=createSprite(500,590,180,20);
    fixedSprite2.shapeColor="red";
    
    fixedSprite3=createSprite(700,590,180,20);
    fixedSprite3.shapeColor="blue";

    fixedSprite4=createSprite(100,590,180,20);
    fixedSprite4.shapeColor="orange";

}

function draw() {
background("skyBlue");

      if (movingSprite.x<0){
          music.stop()
          movingSprite.velocityX=3;
    
}else if (movingSprite.x>800){
          music.stop()
          movingSprite.velocityX=-3;
}
        
        
       if (isTouching(movingSprite,fixedSprite4)){
           music.play()
           movingSprite.shapeColor="orange"
           bounceOff(movingSprite,fixedSprite4)

} else if (isTouching(movingSprite,fixedSprite3)){
           music.stop()
           movingSprite.shapeColor="blue"
           bounceOff(movingSprite,fixedSprite3)

}else if  (isTouching(movingSprite,fixedSprite2)){
           music.stop()
           movingSprite.shapeColor="red"
           bounceOff(movingSprite,fixedSprite2)
           movingSprite.velocityX=0;
           movingSprite.velocityY=0;

}else if  (isTouching(movingSprite,fixedSprite1)){
           music.stop()
           movingSprite.shapeColor="yellow"
           bounceOff(movingSprite,fixedSprite1)


}
     if(movingSprite.y<0){ 
          music.stop()
          movingSprite.velocityY=3
}

drawSprites();

}
