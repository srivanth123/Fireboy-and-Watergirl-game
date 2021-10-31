const Engine = Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var engine,world
var crate1,ground,fireboy,watergirl,lava1,score

 

function preload(){

bgImg=loadImage("bg.png")
blueStarImg=loadImage("bluestar.png")
redStarImg=loadImage("redstar.png")
landImg=loadImage("land.png")
lavaImg=loadImage("Lava.png")
endImg=loadImage("end.png")
fireboyImg=loadImage("Fireboy.png")
watergirlImg=loadImage("watergirl.png")
waterImg=loadImage("water.png")
greenImg=loadImage("green.jpg")
crateImg=loadImage("crate.png")
gameOverImg=loadImage("gameover.jpg")
}


function setup(){
    createCanvas(1360,650)
    
    

engine=Engine.create()
world=engine.world




ground=new Ground(700,540,1400,150)
crate1=new Crate(420,345,50,50)
crate2=new Crate(580,450,50,50)
watergirl=new Watergirl(130,420,100,100)
lava1=new Lava(300,490,120,15)
land1=new Land(370,380,280,20)
land2=new Land(250,280,180,20)
land3=new Land(560,280,150,20)
land4=new Land(760,380,250,20)
redstar2=new Redstar(840,305,30,27)
water1=new Water(310,355,100,25)
lava2= new Lava(270,265,60,15)
bluestar1=new Bluestar(480,355,30,27)
bluestar2= new Bluestar(210,257,30,27)
redstar1=new Redstar(390,450,30,27)
water2=new Water(720,355,75,25)
crate3= new Crate(840,340,50,50)
redstar3= new Redstar(610,257,30,27)
bluestar3=new Bluestar(510,257,30,27)


green=createSprite(580,260,20,10)
green.addImage(greenImg)
green.scale=0.13

reddoor=createSprite(1000,408,60,110)
reddoor.shapeColor="red"

knob1=createSprite(1020,408,12,12)
knob1.shapeColor="black"


bluedoor=createSprite(1100,408,60,110)
bluedoor.shapeColor="blue"

knob2=createSprite(1120,408,12,12)
knob2.shapeColor="black"

fireboy1=createSprite(100,420,100,100)
fireboy1.addImage(fireboyImg)
fireboy1.scale=0.026

watergirl=createSprite(40,420,100,100)
watergirl.addImage(watergirlImg)
watergirl.scale=0.25

ground1= createSprite(700,540,1400,150)
ground1.shapeColor="maroon"

crate1=createSprite(420,345,50,50)
crate1.addImage(crateImg)
crate1.scale=0.23

crate2=createSprite(580,440,50,50)
crate2.addImage(crateImg)
crate2.scale=0.23

crate3= createSprite(840,345,50,50)
crate3.addImage(crateImg)
crate3.scale=0.23


lava1=createSprite(300,455,140,15)
lava1.addImage(lavaImg)
lava1.scale=0.12

lava2= createSprite(250,260,60,15)
lava2.addImage(lavaImg)
lava2.scale=0.12

land1=createSprite(370,380,280,20)
land1.shapeColor="brown"

land2=createSprite(240,280,210,20)
land2.shapeColor="brown"

land3=createSprite(580,280,150,20)
land3.shapeColor="brown"

land4=createSprite(760,380,250,20)
land4.shapeColor="brown"

redstar1=createSprite(390,450,30,27)
redstar1.addImage(redStarImg)
redstar1.scale=0.07


redstar2=createSprite(840,305,30,27)
redstar2.addImage(redStarImg)
redstar2.scale=0.07

redstar3= createSprite(630,257,30,27)
redstar3.addImage(redStarImg)
redstar3.scale=0.07


water1=createSprite(310,355,100,25)
water1.addImage(waterImg)
water1.scale=0.15


water2=createSprite(760,355,55,25)
water2.addImage(waterImg)
water2.scale=0.14

bluestar1=createSprite(480,355,30,27)
bluestar1.addImage(blueStarImg)
bluestar1.scale=0.13

bluestar2=createSprite(160,257,30,27)
bluestar2.addImage(blueStarImg)
bluestar2.scale=0.13

bluestar3=createSprite(530,257,30,27)
bluestar3.addImage(blueStarImg)
bluestar3.scale=0.13

score=0


}

function draw(){

Engine.update(engine)

background(bgImg);

ground.display()
crate1.display()
watergirl.display()
lava1.display()
land1.display()
water1.display()
bluestar1.display()
redstar1.display()
crate2.display()
land2.display()
land3.display()
lava2.display()
bluestar2.display()
land4.display()
water2.display()
crate3.display()
redstar2.display()
redstar3.display()
bluestar3.display()

if(keyDown("RIGHT_ARROW")){

    fireboy1.x=fireboy1.x+5
}

if(keyDown("LEFT_ARROW")){

    fireboy1.x=fireboy1.x-4
}

if(keyDown("UP_ARROW") && fireboy1.y>200){

    fireboy1.velocityY=-5
}

if(keyDown("d")){

    watergirl.x=watergirl.x+5
}

if(keyDown("a")){

    watergirl.x=watergirl.x-4
}

if(keyDown("w") && watergirl.y>150){

    watergirl.velocityY=-5
}

fireboy1.velocityY=fireboy1.velocityY+0.5

fireboy1.collide(ground1)
fireboy1.collide(land1)
fireboy1.collide(land2)
fireboy1.collide(land3)
fireboy1.collide(land4)
fireboy1.collide(crate1)
fireboy1.collide(crate2)
fireboy1.collide(crate3)


if(fireboy1.isTouching(reddoor)){
fireboy1.velocityY=0

}

watergirl.velocityY=watergirl.velocityY+0.5
watergirl.collide(ground1)
watergirl.collide(land1)
watergirl.collide(land2)
watergirl.collide(land3)
watergirl.collide(land4)
watergirl.collide(crate1)
watergirl.collide(crate2)
watergirl.collide(crate3)

if(watergirl.isTouching(bluedoor)){
watergirl.velocityY=0

}

if(watergirl.isTouching(bluestar1)){
score=score+1
    bluestar1.x=10000
}

if(watergirl.isTouching(bluestar2)){
    score=score+1
        bluestar2.x=10000
    }

    if(watergirl.isTouching(bluestar3)){
        score=score+1
            bluestar3.x=10000
        }

        if(fireboy1.isTouching(redstar1)){
            score=score+1
                redstar1.x=10000
            }
            
            if(fireboy1.isTouching(redstar2)){
                score=score+1
                    redstar2.x=10000
                }

                if(fireboy1.isTouching(redstar3)){
                    score=score+1
                        redstar3.x=10000
                    }

textSize(30)
fill("red")
text("score:- "+score,900,100)

if(score===6 && fireboy1.isTouching(reddoor) && watergirl.isTouching(bluedoor)){

    background(endImg)
    fireboy1.hide()
}

if(fireboy1.isTouching(water1)||fireboy1.isTouching(water2)||fireboy1.isTouching(green)){

    background(gameOverImg)
    fireboy1.hide()
}

if(watergirl.isTouching(lava1)||watergirl.isTouching(lava2)||watergirl.isTouching(green)){

    background(gameOverImg)
    watergirl.hide()
}


drawSprites()
    
}

