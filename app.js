
const playerSelection = "Piedra";
const computerSelection = getComputerChoice();


// Funcion turno aleatorio para la maquina
function getComputerChoice(){
    let turno = ['Piedra', 'Papel', 'Tijeras'];
    const aleatorio = turno[Math.floor(Math.random() * turno.length)];
    return aleatorio;
}

// Funcion para una ronda
function playRound(playerSelection, computerSelection) {
    let ganaJugador=0;
    let ganaMaq=0;
    
    if(playerSelection == computerSelection){
        console.log("EMPATE"); 
    }else if(computerSelection == "Papel"){
        console.log("Gana la maquina, el papel puede con la piedra!")
        ganaMaq ++;
    }else if(computerSelection == "Tijeras"){
        console.log("Ganas, la piedra puede con las tijeras!")
        ganaJugador ++;
    }
    //Sacamos ganador de la ronda
    if (ganaJugador>ganaMaq){
        console.log("Ganas la ronda.");
    }else{
        console.log("Perdiste esta ronda");
    }
  }
   

  console.log(playRound(playerSelection, computerSelection));

  // JUEGO
  function game(){
        for (let i = 0; i <= 5; i++) {
            console.log("Ronda: " + i);
            playRound(playerSelection, computerSelection)           
         }     
  }
  
  game();
  