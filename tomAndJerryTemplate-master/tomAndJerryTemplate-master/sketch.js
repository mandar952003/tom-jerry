var Tom
var garden
function preload() {
    //load the images here
    
}

function setup(){
    createCanvas(800,800);
    //create tom (and jerry sprites here


garden=createSprite(400,400,800,800)

  
Tom=createSprite(400,400,20,20)
Tom.shapeColor=("white")


Jerry=createSprite(200,400,20,20)
Jerry.shapeColor=("orange")
}

function draw() {

    background(25);
    //Write condition here to evalute if tom and jerry collide

    if (Tom.x - Jerry.x < (Tom.width - Jerry.width)/2){

        
    }
    drawSprites();
}


function keyPressed(){
    

    if(keyCode === LEFT_ARROW){
     Jerry.frameDelay = 25
    
     if(keyCode === RIGHT_ARROW){
     Tom.frameDelay = 25
     }
    }
  //For moving and changing animation write code here

}
