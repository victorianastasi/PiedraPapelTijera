let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("score-user");
const compScore_span = document.getElementById("score-comp");

const board_div = document.getElementById("board");
const result_div = document.getElementById("result");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const computerChoice_div = document.getElementById("computer-choice");
const image_div = document.getElementById("img");


function getComputerChoice (){
    const choices = ["r", "p", "s"];
    let random = Math.floor(Math.random()*3);
    switch(random){
        case 0: 
            computerChoice_div.innerHTML = '<i class="far fa-hand-rock"></i>';
        break;
        case 1: 
            computerChoice_div.innerHTML = '<i class="far fa-hand-paper"></i>';
        break;
        case 2: 
            computerChoice_div.innerHTML = '<i class="far fa-hand-scissors"></i>';
        break;
    }
    return choices[random];

};


function game (userChoice){
    
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice){
        case "rr":
        case "pp":
        case "ss":
            result_div.innerHTML = '<p class="msg">Empate!</p>';
        break;
        case "rs":
        case "pr":
        case "sp":
            result_div.innerHTML = '<p class="msg">Ganaste!</p>';
            userScore++;
            userScore_span.innerHTML = userScore;
            image_div.innerHTML = `<img class="win animate__animated animate__bounceIn" src="./win.png" alt="">`;
            setTimeout(() => {
                image_div.innerHTML = '';
            }, 1500);
        break;
        case "rp":
        case "ps":
        case "sr":
            result_div.innerHTML = '<p class="msg">Ganó la computadora!</p>';
            compScore++;
            compScore_span.innerHTML = compScore;
            image_div.innerHTML = `<img class="lost animate__animated animate__bounceIn" src="./lost.png" alt="">`;
            setTimeout(() => {
                image_div.innerHTML = '';
            }, 1500);
        break;
    }
}

function msg (choice_div){
    choice_div.classList.add("active");
    setTimeout(() => {
        choice_div.classList.remove("active");
        result_div.innerHTML = '<p class="move">Haz tu Movimiento</p> <p class="move-arrow"><i class="fas fa-arrow-down"></i></p>';
        computerChoice_div.innerHTML = "";
    }, 1500);
}

function main () {

    rock_div.addEventListener('click', () => {
        game("r");
        paper_div.classList.remove("active");
        scissors_div.classList.remove("active")
        msg(rock_div);
        
        
    });
    paper_div.addEventListener('click', () => {
        game("p");
        rock_div.classList.remove("active");
        scissors_div.classList.remove("active");
        msg(paper_div);
    });
    scissors_div.addEventListener('click', () => {
        game("s");
        paper_div.classList.remove("active");
        rock_div.classList.remove("active");
        msg(scissors_div);
    });
};


main();