document.addEventListener("DOMContentLoaded", createBoard);

function createBoard(){
  let board = document.getElementById("board");
  let square = board.children;
  let play = "X";
  let button = document.getElementsByClassName('btn');
  let status = document.getElementById('status');
  let array = [0,1,2,3,4,5,6,7,8];

  // Displays squares and event listeners are given to each 
  for(let a = 0;a < square.length;a++){
    square[a].classList.add("square");

    // Changes the colour of square when mouse hovers over it
    square[a].addEventListener("mouseover", function () {
      square[a].classList.add("hover");
    });

    // Removes colour from square when mouse is not hovering over it
    square[a].addEventListener("mouseout", function () {
      square[a].classList.remove("hover");
    });

    // X or O is placed when mouse is clicked
    square[a].addEventListener("click", function addClick() {
        if(square[a].textContent == ""){
          square[a].classList.add(play);
          square[a].textContent = play;
          array[a] = square[a].textContent;
          if(winnerCheck(array)){
            status.classList.add("you-won");
            status.textContent = play + " Won!";
            for(let b = 0; b < array.length; b++){
              if(array[b]!= "X" && array[b]!= "O"){
                square[b].textContent = " ";
              }
            }
          }
          if(play == "X"){
            play = "O";
          }
          else{
            play = "X";
          }
        }
    });
  }

  //Resets the board when new game button is clicked
  button[0].addEventListener("click", function () {
    status.classList.remove("you-won");
    status.textContent = "Move your mouse over a square and click to play an X or an O.";
    play = "X";
    array = [0,1,2,3,4,5,6,7,8];
    for(c = 0;c < square.length;c++){
      square[c].classList = "";
      square[c].textContent = "";
      square[c].classList.add("square");
    }
  });
}

function winnerCheck(array){
  if(array[0] == array[1] && array[0] == array[2]){
    return true;
  }
  else if(array[3] == array[4] && array[3] == array[5]){
    return true;
  }
  else if(array[6] == array[7] && array[6] == array[8]){
    return true;
  }
  else if(array[0] == array[3] && array[0] == array[6]){
    return true;
  }
  else if(array[1] == array[4] && array[1] == array[7]){
    return true;
  }
  else if(array[2] == array[5] && array[2] == array[8]){
    return true;
  }
  else if(array[0] == array[4] && array[0] == array[8]){
    return true;
  }
  else if(array[2] == array[4] && array[2] == array[6]){
    return true;
  }
  else{
    return false;
  }
}