var horse,horseImage;
var backgroundImage,BG;
var gameState="PLAY";
var Rock,RockImage;
var Hurdle,HurdleImage;
var Diamond,DiamondImage;
var Treasure,TreasureImage;
var Bird,BirdImage;
var score=0

function preload(){
  horseImage=loadAnimation("horse 5.png","horse 6.png");
  backgroundImage=loadImage("track images.png");
  RockImage=loadImage("rock.png");
  HurdleImage=loadImage("hurdle.png");
  DiamondImage=loadImage("diamond.png");
  TreasureImage=loadImage("treasure.png");
  BirdImage=loadImage("bird.png");
}

function setup(){
  createCanvas(600,600)
  BG=createSprite(300,300)
  BG.addImage(backgroundImage)
  BG.scale=2.5;
  
  horse=createSprite(100,300)
  horse.addAnimation("horse",horseImage)
  horse.debug=true;
  horse.setCollider("rectangle",0,0,300,200)
  horse.scale=0.5;

  rockGroup=createGroup()
  hurdleGroup=createGroup()
  diamondGroup=createGroup()
  treasureGroup=createGroup()
  birdGroup=createGroup()
}

function draw(){
  background("grey")
  
  if(gameState==="PLAY"){
    BG.velocity.x=-2
    createrock();
    createhurdle();
    creatediamond();
    createtreasure();
    createbird();
    if(BG.x<0){
      BG.x=300;
    }
    if(keyDown("UP_ARROW")){
      horse.y=horse.y-10;
    }
  
    if(keyDown("DOWN_ARROW")){
      horse.y=horse.y+10;
    }

    if(horse.isTouching(hurdleGroup)||horse.isTouching(rockGroup)||horse.isTouching(birdGroup)){
      gameState="END"
    }

    if(horse.isTouching(diamondGroup)){
      score=score+20;
      diamondGroup.destroyEach()
    }

    if(horse.isTouching(treasureGroup)){
      score=score+10;
      treasureGroup.destroyEach()
    }

  }

    if(gameState==="END"){
      BG.velocityX=0;
      hurdleGroup.setVelocityXEach(0);
      rockGroup.setVelocityXEach(0);
      diamondGroup.setVelocityXEach(0);
      treasureGroup.setVelocityXEach(0);
      birdGroup.setVelocityXEach(0);

    }
  
  

    /*if(keyDown("SPACE")){
      horse.velocityY=-10;

    }
    horse.velocityY=horse.velocityY+0.8;*/
  

  drawSprites()
  textSize(25)
  fill("white")
  text("SCORE : "+score,50,50)

}

function createrock(){
  if(frameCount%200===0){
    Rock=createSprite(600,Math.round(random(50,600)))
    Rock.addImage(RockImage)
    Rock.debug=true;
    Rock.setCollider("circle",0,0,40)
    Rock.velocityX=-2;
    Rock.scale=0.4;
    rockGroup.add(Rock);
  }

 
}

function createhurdle(){
  if(frameCount%350===0){
    Hurdle=createSprite(600,Math.round(random(50,580)))
    Hurdle.addImage(HurdleImage)
    Hurdle.debug=true;
    Hurdle.setCollider("rectangle",0,0,300,300)
    Hurdle.velocityX=-2;
    Hurdle.scale=0.4;
    hurdleGroup.add(Hurdle);
  }
}

function creatediamond(){
  if(frameCount%400===0){
    Diamond=createSprite(600,Math.round(random(50,550)))
    Diamond.addImage(DiamondImage)
    Diamond.debug=true;
    Diamond.setCollider("circle",0,0,100)
    Diamond.velocityX=-2;
    Diamond.scale=0.2;
    diamondGroup.add(Diamond);
  }
}

function createtreasure(){
  if(frameCount%100===0){
    Treasure=createSprite(600,Math.round(random(50,550)))
    Treasure.addImage(TreasureImage)
    Treasure.debug=true;
    Treasure.setCollider("rectangle",0,0,300,200)
    Treasure.velocityX=-2;
    Treasure.scale=0.2;
    treasureGroup.add(Treasure);
  }
}

function createbird(){
  if(frameCount%100===0){
    Bird=createSprite(600,Math.round(random(50,550)))
    Bird.addImage(BirdImage)
    Bird.debug=true;
    Bird.setCollider("circle",0,-10,70)
    Bird.velocityX=-2;
    Bird.scale=0.3;
    birdGroup.add(Bird);
}
}