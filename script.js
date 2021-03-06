
let order = [];
let clickedOrder = [];
let score = 0;

//0 = green
//1 = red
//2 = yellow
//3 = blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder =[];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove("selected");
    })
}

//Checa os botões clicados com a sequencia criada do Jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert('Pontuação: '+score +"\n Você acertou! Iniciando próximo nivel!")
        nextLevel();
    }
}


//Função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add("selected");

    setTimeout(()=> {
        createColorElement(color).classList.remove("selected");
        checkOrder();
    }, 250)
}

//Função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }
    else if(color ==1){
        return red;
    }
    else if(color == 2){
        return yellow;
    }
    else if(color == 3){
        return blue;
    }
}

//Função para proximo nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}


//Função para Game Over
let gameOver = () => {
    alert("Pontuação: "+score+"\nVocê perdeu o jogo\nClique em OK para iniciar um novo jogo")
    order = [];
    clickedOrder = [];
    playGame();
}

//Função para iniciar o jogo
let playGame = () => {
    alert("Bem vindo ao Colors Order! Iniciando um novo Jogo!")
    score = 0;
    nextLevel();
}

//Eventos de clicks para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Iniciar game
playGame();