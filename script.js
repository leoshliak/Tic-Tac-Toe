const GameBoard = (function(){
    const boardArray = ['', '', '', '', '', '', '', '', '',]
  const squares = document.querySelectorAll('.square');
  
  const player1 = {
    marker: 'X',
    hisTurn: true,
}
  const player2 = {
    marker: 'O',
    hisTurn: false,
}
 squares.forEach(addEventListener('click', function(e){
    if(!e.target.classList.contains('square'))return;
    if(!e.target.textContent == '')return;
   printMarker(e); 
   turnFunct();
  }));


  function turnFunct(){
    const turn1String = document.querySelector('.turn1');
  const turn2String = document.querySelector('.turn2');
  const player1Title = document.querySelector('.player1');
  const player2Title = document.querySelector('.player2');
    if(player1.hisTurn == true && player2.hisTurn == false){
   player1.hisTurn = false;
   player2.hisTurn = true;
   turn1String.style.opacity = 0;
   turn2String.style.opacity = 1;
   player1Title.classList.add('notYourTurn');
   player2Title.classList.remove('notYourTurn');
}else if(player1.hisTurn == false && player2.hisTurn == true){
    player1.hisTurn = true;
    player2.hisTurn = false;
    turn1String.style.opacity = 1;
   turn2String.style.opacity = 0;
   player1Title.classList.remove('notYourTurn');
   player2Title.classList.add('notYourTurn');
}
}
 function  printMarker(e){
    if(player1.hisTurn == true ){
      e.target.textContent =  player1.marker;
    }else if(player1.hisTurn == false ){
      e.target.textContent = player2.marker;
    }
  }
   
})();