var garden,rabbit; 
var gardenImg,rabbitImg; 
var appleImg; 
var apple; 
var redleaf, redleafImg; 
var orangeleaf, orangeleafImg; 

function preload() 
{ gardenImg = loadImage("garden.png");
rabbitImg = loadImage("rabbit.png"); 
appleImg = loadImage ("apple.png"); 
redleafImg = loadImage("leaf.png"); 
orangeleafImg = loadImage("orangeleaf.png") } 
function setup() { createCanvas(400,400); 
  // Moving background 
  garden=createSprite(200,200); 
  garden.addImage(gardenImg); 
  //creating boy running 
  rabbit = createSprite(180,340,30,30); 
  rabbit.scale =0.09; 
  rabbit.addImage(rabbitImg);
 } 
  
  function draw() 
  { 
    background(0);
    edges= createEdgeSprites(); 
    rabbit.collide(edges); 
    rabbit.x = World.mouseX; 
    select_sprites = Math.round (random(1,2)); 
    if (frameCount % 80 == 0) { 
      if (select_sprites == 1){
         createApples(); 
      } 
    else if (select_sprites == 2) {
      createOrangeLeaf(); 
    } 
    else {
       createRedLeaf (); 
      }
   } 
   drawSprites(); 
  } 
  
  function createApples() {
     apple = createSprite (random(50, 350), 40, 10, 10);
      apple.addImage ("Fruit", appleImg);
       apple.velocityY = 1;
        apple.scale = 0.1;
         apple.lifetime = 135; 
        } 
        
        function createRedLeaf () { 
          redLeaf = createSprite (random(50, 350), 40, 10, 10);
           redLeaf.addImage ("RedLeaf", redleafImg);
            redLeaf.velocityY = 1; 
            redLeaf.scale = 0.1; 
            redLeaf.lifetime = 135;
           }
           
           function createOrangeLeaf () {
              orangeLeaf = createSprite (random(50, 350), 40, 10, 10);
               orangeLeaf.addImage ("OrangeLeaf", orangeleafImg);
                orangeLeaf.velocityY = 1;
                 orangeLeaf.scale = 0.1; 
                 orangeLeaf.lifetime = 135; 
                }