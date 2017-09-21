const playerCreate = () => {
  var player = document.createElement("DIV");
  player.id = "playerCSS";
  document.getElementById("gameContainer").appendChild(player);
}

var startX = 0;
var startY = 0;

const move = (x,y) => {
  if(startX >= 0 && startX <= 750){
    startX += x;
    document.getElementById("playerCSS").style.left = startX + "px";
  };
  if(startY >= 0 && startY <= 550){
    startY += y;
    document.getElementById("playerCSS").style.top = startY + "px";
  };
  console.log("X:"+startX+" , Y:"+startY);
}

playerCreate();