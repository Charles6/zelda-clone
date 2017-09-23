const playerCreate = () => {
  var player = document.createElement("DIV");
  player.id = "playerCSS";
  player.innerText = "P";
  document.getElementById("board").appendChild(player);
}

const playerStat = {
  posX:0,
  posY:0,
  hp:100,
  lv:1,
  inv:[]
}

var health = document.createElement("DIV");
var level = document.createElement("DIV");
var inventory = document.createElement("DIV");
health.className = "statCSS";
level.className = "statCSS";
inventory.className = "statCSS";inventory.innerText = "Nothing so far";
inventory.id = "invId"
health.innerText = playerStat.hp;
level.innerText = playerStat.lv;
inventory.innerText = "Nothing so far";
document.getElementById("info").appendChild(health);
document.getElementById("info").appendChild(level);
document.getElementById("info").appendChild(inventory);

document.addEventListener('keydown', function(event) {
  if (event.key == "ArrowUp"){
    if(playerStat.posY > 0){
      playerStat.posY -= 50;
      document.getElementById("playerCSS").style.top = playerStat.posY + "px";
    }; 
  };
  if (event.key == "ArrowRight"){
    if(playerStat.posX < 750){
      playerStat.posX += 50;
      document.getElementById("playerCSS").style.left = playerStat.posX + "px";
    }; 
  };
  if (event.key == "ArrowDown"){
    if(playerStat.posY < 550){
      playerStat.posY += 50;
      document.getElementById("playerCSS").style.top = playerStat.posY + "px";
    }; 
  };
  if (event.key == "ArrowLeft"){
    if(playerStat.posX > 0){
      playerStat.posX -= 50;
      document.getElementById("playerCSS").style.left = playerStat.posX + "px";
    }; 
  };
  
  sameLoc();
});


const enemyList = [];

const newEnemy = () => {
  var enemyStat = {
    posX:0,
    posY:0,
    hp:10,
    lv:1
  }
  const createEnemy = () => {
    enemyStat.posX = Math.floor(Math.random()*16)*50;
    enemyStat.posY = Math.floor(Math.random()*11)*50;
    return enemyStat;
  }
  return createEnemy;
}


const placeEnemy = (index) => {
  var enemyAdd = newEnemy();

  enemyList.push(enemyAdd());

  var enemy = document.createElement("DIV");
  enemy.className = "enemyCSS";
  enemy.innerText = "E";
  document.getElementById("board").appendChild(enemy);

  document.getElementsByClassName("enemyCSS")[index].style.top = enemyList[index].posY + "px";
  document.getElementsByClassName("enemyCSS")[index].style.left = enemyList[index].posX + "px";
  console.log("enemy"+ index +" x:"+enemyList[index].posX+" y:"+enemyList[index].posY);
}


const sameLoc = () => {
  for(var i = 0; i <= enemyList.length-1; i++){
    if (playerStat.posX === enemyList[i].posX && playerStat.posY === enemyList[i].posY){
      playerStat.inv.push("enemy"+i);
      document.getElementById("invId").innerHTML = playerStat.inv;
      // removeThing("enemyCSS",i);
      // console.log("List of total Enemies: "+enemyList);
      // console.log("List of collected Enemies: "+playerStat.inv);
    }
  }
}


function removeThing(className,index){
    var elements = document.getElementsByClassName(className);
    elements[index].parentNode.removeChild(elements[index]);
}


const startGame = () => {
  playerCreate();
  for (var i = 0; i <= 7; i++) {
    placeEnemy(i);
  };
  
}
startGame();