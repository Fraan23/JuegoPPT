
const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";

const EMPATE = 0;
const GANA = 1;
const PIERDE = 2;


//Constantes para recoger botones por id
const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijerasBtn = document.getElementById("tijeras");
const resultado = document.getElementById("start-text");
const usuarioImg = document.getElementById("usuario-img");
const maquinaImg = document.getElementById("maquina-img");

//Recoger eventos de los botones
piedraBtn.addEventListener("click", () => { 
    play(PIEDRA); 
});
papelBtn.addEventListener("click", () =>{ 
    play(PAPEL);
});
tijerasBtn.addEventListener("click", () => {
    play(TIJERAS);
});

//Funcion eleccion de la maquina
function play(opcionUsuario){
    const opcionMaquina = calcOpcionMaquina();
    const result = calcResultado(opcionUsuario, opcionMaquina);

    usuarioImg.src = "img/papel.png";
    maquinaImg.src = "img/" + opcionMaquina + ".png";

    switch(result){
        case EMPATE:
            resultado.innerHTML = "Has empatado!";
            break;
        case GANA:
            resultado.innerHTML = "Has ganado!";
            break;
        case PIERDE:
            resultado.innerHTML = "Has perdido!";
            break;
    }
}

function calcOpcionMaquina(){
    const numero = Math.floor(Math.random() * 3);
    switch(numero){
        case 0:
            return EMPATE;
        case 1:
            return GANA;
        case 2:
            return PIERDE;
    }
}

function calcResultado(opcionUsuario, opcionMaquina){
    if(opcionUsuario === opcionMaquina){
        return EMPATE;

    }else if(opcionUsuario === PIEDRA){
        
        if(opcionMaquina === PAPEL) return PIERDE;
        if(opcionMaquina === TIJERAS) return GANA;
        
    }else if(opcionUsuario === PAPEL){

        if(opcionMaquina === TIJERAS) return PIERDE;
        if(opcionMaquina === PIEDRA) return GANA;
    }
    else if(opcionUsuario === TIJERAS){

        if(opcionMaquina === PIEDRA) return PIERDE;
        if(opcionMaquina === PAPEL) return GANA;
    }
}