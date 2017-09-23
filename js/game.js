const playerCreate = () => {
  var player = document.createElement("DIV");
  player.id = "playerCSS";
  player.innerText = "L";
  document.getElementById("gameContainer").appendChild(player);
}

var startX = 0;
var startY = 0;

document.addEventListener('keydown', function(event) {
  if (event.key == "ArrowUp"){
    if(startY > 0){
      startY -= 50;
      document.getElementById("playerCSS").style.top = startY + "px";
    }; 
  };
  if (event.key == "ArrowRight"){
    if(startX < 750){
      startX += 50;
      document.getElementById("playerCSS").style.left = startX + "px";
    }; 
  };
  if (event.key == "ArrowDown"){
    if(startY < 550){
      startY += 50;
      document.getElementById("playerCSS").style.top = startY + "px";
    }; 
  };
  if (event.key == "ArrowLeft"){
    if(startX > 0){
      startX -= 50;
      document.getElementById("playerCSS").style.left = startX + "px";
    }; 
  };
});

playerCreate();