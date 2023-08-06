var bg,bgimg
var player,shooterimg,shootingimg
var zombie,zombieimg
var zombiegroup;
function  preload(){
    bgimg = loadImage("assets/bg.jpeg")
    shooterimg = loadImage("assets/shooter_2.png")
    shootingimg = loadImage("assets/shooter_3.png")
    zombieimg = loadImage("assets/zombie.png")
    }


function setup(){
    createCanvas(windowWidth,windowHeight)
    bg = createSprite(displayWidth/2-20,displayHeight/2,20,20)
    bg.addImage(bgimg)
    bg.scale = 1.1

    player = createSprite(100,500,10,10)
    player.addImage(shooterimg)
    player.scale = 0.3

    zombiegroup=new Group();


}
function draw(){
    background("yellow")
    if(keyDown("UP_ARROW") && player.y>60){
      player.y -= 30
    }
    if(keyDown("DOWN_ARROW") && player.y<500 ){
      player.y += 30
    }
    if(keyDown("RIGHT_ARROW")){
      player.x += 30
    }
    if(keyDown("LEFT_ARROW")){
      player.x -= 30
    }
    if(keyWentDown("SPACE")){
      player.addImage(shootingimg)
    }
    if(keyWentUp("SPACE")){
      player.addImage(shooterimg)
    }
    enemy()
    //checking collision between zombie and player
    if(zombiegroup.isTouching(player)){
     for(var i=0;i<zombiegroup.length;i++){
      if(zombiegroup[i].isTouching(player)){
        zombiegroup[i].destroy()
      }
     }
    }
    drawSprites()
}

function enemy(){
    if(frameCount%50==0){
    zombie = createSprite(random(500,1100),random(100,500))
    zombie.scale = 0.15
    zombie.addImage(zombieimg) 
    zombie.velocityX = -3
    zombie.lifetime=400
    zombiegroup.add(zombie)
    }
}


  

