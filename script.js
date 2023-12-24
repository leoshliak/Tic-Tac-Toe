const GameBoard = (function(){
    let boardArray = ['', '', '', '', '', '', '', '', '',];
    let gameOver = false;
  const squares = document.querySelectorAll('.square');
  const turn1String = document.querySelector('.turn1');
  const turn2String = document.querySelector('.turn2');
  const restartBtn = document.querySelector('.restart');
  const player1Title = document.querySelector('.player1');
  const player2Title = document.querySelector('.player2');
  const player1 = {
    marker: 'X',
    hisTurn: true,
}
  const player2 = {
    marker: 'O',
    hisTurn: false, 
}

  const playRound = {
 addToArray: function(e){
     boardArray[e.target.id] = e.target.textContent;
     console.log(boardArray)
   },
   turnFunct: function(){
    if(player1.hisTurn == true && player2.hisTurn == false && gameOver == false){
   player1.hisTurn = false;
   player2.hisTurn = true;
   turn1String.style.opacity = 0;
   turn2String.style.opacity = 1;
   player1Title.classList.add('notYourTurn');
   player2Title.classList.remove('notYourTurn');
}else if(player1.hisTurn == false && player2.hisTurn == true && gameOver == false){
    player1.hisTurn = true;
    player2.hisTurn = false;
    turn1String.style.opacity = 1;
   turn2String.style.opacity = 0;
   player1Title.classList.remove('notYourTurn');
   player2Title.classList.add('notYourTurn');
}
},
  printMarker: function (e){
    if(player1.hisTurn == true ){
      e.target.textContent =  player1.marker;
    }else if(player1.hisTurn == false ){
      e.target.textContent = player2.marker;
    }
  },  
  checkForWinner: function(board){
    const winningComb = [
      [0, 1, 2], [3, 4, 5], 
      [6, 7, 8], [0, 3, 6], 
      [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6], 
    ];
    for (let i = 0; i < winningComb.length; i++) {
      const [a, b, c] = winningComb[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        if(board[a] == 'X'){
          turn1String.textContent = 'Player 1 Won!';
        }else if(board[a] == 'O'){
          turn2String.textContent = 'Player 2 Won!'
        }
        return gameOver = true;
      }
    }
  },
  restart: function(){
    squares.forEach(function(element) {
      element.textContent = '';
  });
    boardArray = ['', '', '', '', '', '', '', '', '',];
    gameOver = false;
    player1.hisTurn = true;
    player2.hisTurn = false;
    turn1String.style.opacity = 1;
    turn2String.style.opacity = 0;
    player1Title.classList.remove('notYourTurn');
    player2Title.classList.add('notYourTurn');
    turn1String.textContent = "Player 1's turn";
    turn2String.textContent = "Player 2's turn";
    console.log(boardArray)
  },
 }

 restartBtn.addEventListener('click',() =>{
  playRound.restart();
  
 });

  squares.forEach(addEventListener('click', function(e){
    if(!e.target.classList.contains('square'))return;
    if(!e.target.textContent == '')return;
    if(gameOver == true)return;
   playRound.printMarker(e); 
   playRound.addToArray(e);
   playRound.checkForWinner(boardArray);
   playRound.turnFunct();
  }));
})();