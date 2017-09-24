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

const moveEntity = (entity,id) => {

  //document.removeEventListener("keydown", keyboardBindings());

  document.addEventListener('keydown', function(){
    if (event.key == "ArrowUp"){
      if(entity.posY > 0){
        entity.posY -= 50;
        document.getElementById(id).style.top = entity.posY + "px";
      }; 
    };
    if (event.key == "ArrowRight"){
      if(entity.posX < 750){
        entity.posX += 50;
        document.getElementById(id).style.left = entity.posX + "px";
      }; 
    };
    if (event.key == "ArrowDown"){
      if(entity.posY < 550){
        entity.posY += 50;
        document.getElementById(id).style.top = entity.posY + "px";
      }; 
    };
    if (event.key == "ArrowLeft"){
      if(entity.posX > 0){
        entity.posX -= 50;
        document.getElementById(id).style.left = entity.posX + "px";
      }; 
    };
    sameLoc();
  });
};

// const keyboardBindings = (entity,id) => {
//     if (event.key == "ArrowUp"){
//       if(entity.posY > 0){
//         entity.posY -= 50;
//         document.getElementById(id).style.top = entity.posY + "px";
//       }; 
//     };
//     if (event.key == "ArrowRight"){
//       if(entity.posX < 750){
//         entity.posX += 50;
//         document.getElementById(id).style.left = entity.posX + "px";
//       }; 
//     };
//     if (event.key == "ArrowDown"){
//       if(entity.posY < 550){
//         entity.posY += 50;
//         document.getElementById(id).style.top = entity.posY + "px";
//       }; 
//     };
//     if (event.key == "ArrowLeft"){
//       if(entity.posX > 0){
//         entity.posX -= 50;
//         document.getElementById(id).style.left = entity.posX + "px";
//       }; 
//     };
// }

const enemyList = [];

const newEnemy = () => {
  var enemyStat = {
    num:-1,
    posX:0,
    posY:0,
    hp:10,
    lv:1
  }
  const createEnemy = () => {
    enemyStat.num++;
    enemyStat.posX = Math.floor(Math.random()*16)*50;
    enemyStat.posY = Math.floor(Math.random()*11)*50;

    var enemy = document.createElement("DIV");
    enemy.className = "enemyCSS";
    enemy.innerText = "E";
    enemy.id = "e"+enemyStat.num;
    enemy.dataset.clicked = enemyStat.num;
    //enemy.onclick = function(){ test(this); };
    document.getElementById("board").appendChild(enemy);

    document.getElementById("e"+enemyStat.num).style.top = enemyStat.posY + "px";
    document.getElementById("e"+enemyStat.num).style.left = enemyStat.posX + "px";
    console.log("enemy" + enemyStat.num + " x:" + enemyStat.posX + " y:" + enemyStat.posY);

    return enemyStat;
  }
  return createEnemy;
}

const test = (input) => {
  console.log(input.id);
  moveEntity(enemyList[input.dataset.clicked],input.id)
}

const sameLoc = () => {
  for(var i = 0; i <= enemyList.length-1; i++){
    if (playerStat.posX === enemyList[i].posX && playerStat.posY === enemyList[i].posY){
      playerStat.inv.push("enemy"+i);
      document.getElementById("invId").innerHTML = playerStat.inv;
      var idRemove = "e"+i;
      console.log(idRemove);
      var removeItem = document.getElementById(idRemove)
      removeItem.parentNode.removeChild(removeItem);
      //removeThing(idRemove);
      // removeThing("enemyCSS",i);
      // console.log("List of total Enemies: "+enemyList);
      // console.log("List of collected Enemies: "+playerStat.inv);
    }
  }
}


function removeThing(id){
    var removeItem = document.getElementById("board")
    removeItem.removeChild(id);
}

const startGame = () => {
  playerCreate();

  var enemyAdd = newEnemy();

  for (var i = 0; i <= 10; i++) {

    var testObj = {
        num:-1,
        posX:0,
        posY:0,
        hp:10,
        lv:1
    }

    var testItem = enemyAdd();
    console.log(testItem);
    testObj.num = testItem.num;
    testObj.posX = testItem.posX;
    testObj.posY = testItem.posY;
    enemyList.push(testObj);

  };
  console.log(enemyList);
  moveEntity(playerStat,"playerCSS")
}
startGame();