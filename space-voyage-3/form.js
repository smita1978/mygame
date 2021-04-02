class Form {

    constructor() {
       this.logo = createSprite(width/2,120);
       this.logo.addImage(logoImg);
       this.logo.scale=1.3;
       this.logo.visible=false;

  //start
  this.start=createSprite(width/2,350);
  this.start.addImage(startImg);
  this.start.scale=0.25;
  this.start.visible=false;

  //rules logo
  this.rules = createSprite(width/2,500);
  this.rules.addImage(rulesImg);
  this.rules.scale=0.3;
  this.rules.visible=false;

  //rules text
  this.textr = createSprite(width/2,height/2);
  this. textr.addImage(ruletextImg);
  this.textr.scale=1.3;
  

  //cross for rules
  this.x=createSprite(width/2+250,50);
  this. x.addImage(xImg);
  this. x.scale=0.1;
  this.x.visible=false;
    }




    
    display(){ 
  
        this.logo.visible=true;
        this.start.visible=true;
        this.rules.visible=true;
        this.textr.visible=false;
        this.x.visible=false;
      
        if(mousePressedOver(this.rules))
      {
      
        
        
       this.textr.visible=true;
       this.x.visible=true;
       
      }
      
      

      if(mousePressedOver(this.start))
      {
        gameState="play";
        this.logo.visible=false;
        this.start.visible=false;
        this.rules.visible=false;
       
       bg.visible=true;
      };

      if(mousePressedOver(this.x)){
        gameState="start";
        this.textr.visible=false;
        this.x.visible=false;
  
        }
  
  
   }
  }
  