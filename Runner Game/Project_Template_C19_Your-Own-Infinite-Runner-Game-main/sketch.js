var bgImg, bg
var boy, boyImg
var cactus, cactusImg
var police, policeImg



function preload(){
    bgImg = loadImage("bgImage.jpg")
    boyImg = loadImage("boyanimation.png")
    cactusImg = loadImage("cactusanimation.png")
    policeImg = loadImage("policeanimation.png")
}

function setup() {

    createCanvas(windowWidth , windowHeight)

    bg = createSprite(width/2 , height/2)
    bg.addImage(bgImg)

    boy = createSprite(100 , height-150)
    boy.addImage(boyImg)
    boy.scale = 0.5



}

function draw() {

    background("black")

    spawnCacti()

    drawSprites()
 
}


function spawnCacti(){
    if(frameCount % 60 == 0){
        cactus = createSprite(width ,  height-120)
        cactus.addImage(cactusImg)
        cactus.velocityX = -5
    cactus.scale = 0.3

    }
}