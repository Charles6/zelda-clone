var row = 12;
var column = 16;



const makeGrid = () => {
  for(x = 0; x < row; x++){
    makeRow();
    for(i = 0; i < column; i++){
      makeColumn();
    }
  }
};

const makeRow = () => {
  var gRow = document.createElement("div");
  gRow.className = "gridRow";
  document.getElementById("gameContainer").appendChild(gRow);
};

const makeColumn = () => {
  var node = document.createElement("div");
  node.className = "square";
  document.getElementsByClassName("gridRow")[x].appendChild(node);
};

makeGrid();