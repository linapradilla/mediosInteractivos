
function createBoard() {
    var board = document.getElementById("board");
    for(var i = 0; i < 15; i++) {
      var fila = document.createElement("div");
      fila.className = "fila";
      for(var j = 0; j < 15; j++) {
        var cell = document.createElement("div");
        if(Math.random() < 0.7) {
          cell.className = "cuadrado";
        } else {
          cell.className = "cuadrado bomba";
        }
        cell.id = "cell_" + i + "_" + j;
        fila.appendChild(cell);
      }
      board.appendChild(fila);
    }
}

function start() {
    createBoard();
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
    //document.onmousemove = myfuncion
}

window.onload = start
