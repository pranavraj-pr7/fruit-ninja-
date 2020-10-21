var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["76bf470b-616a-4df4-8fb4-9d00069e57a0","92c768d4-9535-4707-a326-a3858792301f","ee2cdfad-a20d-4b4e-8a28-ec16e1f7c45f","10a445b9-17d4-408a-9b28-d8d33b943d12","079bbdcb-c7b0-4319-8b50-95e65c031020","f53f9343-31d6-4539-bc3d-ac6f3005879f","7f894736-d3e5-4f2d-8370-ef6d31f9debf","27b04389-a773-4ba5-8ddb-a17467c82f02","773bbbf8-40f0-4cd7-bc6f-dfa42e6ad6e5","fd34a885-30f2-4d9f-ae74-832ce7b0c698"],"propsByKey":{"76bf470b-616a-4df4-8fb4-9d00069e57a0":{"name":"fruit2","sourceUrl":null,"frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":15,"version":"Yi3RjHXG83U5BPLT7cZDOL_A5jmMAhLB","loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/76bf470b-616a-4df4-8fb4-9d00069e57a0.png"},"92c768d4-9535-4707-a326-a3858792301f":{"name":"fruit3","sourceUrl":"assets/api/v1/animation-library/gamelab/oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL/category_food/pear.png","frameSize":{"x":206,"y":300},"frameCount":1,"looping":true,"frameDelay":5,"version":"oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL","loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL/category_food/pear.png"},"ee2cdfad-a20d-4b4e-8a28-ec16e1f7c45f":{"name":"alienGreen_badge_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":10,"version":"oJA_StLAuFjArBvI70IttdAWhnlMl8Wo","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png"},"10a445b9-17d4-408a-9b28-d8d33b943d12":{"name":"sword_silvlner_1","sourceUrl":null,"frameSize":{"x":100,"y":109},"frameCount":1,"looping":true,"frameDelay":12,"version":"vVclHEmd4QNpS5to6lFhG3SjQfdt03lv","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":109},"rootRelativePath":"assets/10a445b9-17d4-408a-9b28-d8d33b943d12.png"},"079bbdcb-c7b0-4319-8b50-95e65c031020":{"name":"fruit1","sourceUrl":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png","frameSize":{"x":272,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"fMHBc6gLlWB588.zoou2w1zBXJtuuJKM","loadedFromSource":true,"saved":true,"sourceSize":{"x":272,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png"},"f53f9343-31d6-4539-bc3d-ac6f3005879f":{"name":"fruit4","sourceUrl":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png","frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":2,"version":"beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png"},"7f894736-d3e5-4f2d-8370-ef6d31f9debf":{"name":"textGameOver_1","sourceUrl":null,"frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":12,"version":"Cf1U7sbapC44T6zmlcS.0rT5hgjrlMTu","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/7f894736-d3e5-4f2d-8370-ef6d31f9debf.png"},"27b04389-a773-4ba5-8ddb-a17467c82f02":{"name":"background","sourceUrl":null,"frameSize":{"x":330,"y":330},"frameCount":1,"looping":true,"frameDelay":12,"version":"svbMfJimbMtzdIU375KBQT_7RmukXwpC","loadedFromSource":true,"saved":true,"sourceSize":{"x":330,"y":330},"rootRelativePath":"assets/27b04389-a773-4ba5-8ddb-a17467c82f02.png"},"773bbbf8-40f0-4cd7-bc6f-dfa42e6ad6e5":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Mw9QtmAQ._LZr36ngdi1Q6X6vZA0VGbF","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/773bbbf8-40f0-4cd7-bc6f-dfa42e6ad6e5.png"},"fd34a885-30f2-4d9f-ae74-832ce7b0c698":{"name":"sword_silver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/HeFQ85uK4eE9PqoLds9oS75i.D.EEmVe/category_tools/sword_diamond.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"HeFQ85uK4eE9PqoLds9oS75i.D.EEmVe","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HeFQ85uK4eE9PqoLds9oS75i.D.EEmVe/category_tools/sword_diamond.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var PLAY = 1;
var END = 0;
var gameState =1;



  

var ground = createSprite(200,200);
ground.setAnimation("background");
ground.scale=1.3;

var sword = createSprite(200,300);
sword.setAnimation("sword_silver_1");


//var fruit = createSprite(400,200,20,20);

var score = 0;
var fruitGroup=createGroup();
var EnemyGroup=createGroup();



function draw() {
  
 
 

  
//score.overlap(ground);
  

 

if(gameState===PLAY){
    Fruits();
    Enemy();
    if (fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      playSound("assets/category_accent/puzzle_game_accent_lock_02.mp3");
      score = score + 5;
    }
  }
 else if(gameState===END){
   sword.x = 200;
   sword.y = 200;
 }


 if (EnemyGroup.isTouching(sword)){
    gameState=END;
    fruitGroup.destroyEach();
    EnemyGroup.destroyEach();
    var gameover = createSprite(200,200,10,10);
    gameover.setAnimation("textGameOver_1");
    gameover.scale = 0.9;
   playSound("assets/category_female_voiceover/game_over_female.mp3");
  }
  
  
  
 

 
 sword.x = World.mouseX;
  sword.y = World.mouseY;
  


drawSprites(); 

textFont("Times New Roman");
 textSize(25); 
 fill("turquoise");
text("score :"+score,234,63);


}




  function Fruits(){
    var position=randomNumber(1,2);
 if (World.frameCount % 85 === 0) {
    var fruit = createSprite(400,320,40,10);
    fruit.y = randomNumber(50,300);
   fruit.velocityX = -3;
    var rand = randomNumber(1,4);
    fruit.setAnimation("fruit"+rand);
    fruit.lifetime = 150;
    fruit.scale=0.3;
    
    fruitGroup.add(fruit);
    
     if(position===1){
   fruit.x=400;
   fruit.velocityX=-(7+(score/4));
 }
 else{
   if(position===2){
     fruit.x=0;
     
     fruit.velocityX=7+(score/4);
   }
 }
 
    
    }
  }
  
  function Enemy(){
    if(World.frameCount% 200===0){
      var enemy = createSprite(400,200);
      enemy.setAnimation("alienGreen_badge_1");
      enemy.y=randomNumber(100,300);
      enemy.velocityX=-(8+(score/10));
     // enemy.lifetime(50);
      
      EnemyGroup.add(enemy);
    }
  }
  
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
