let cards = document.querySelectorAll(".card");

let timer;


window.onload = function() {
    startGame();
}
// Functions

// to initialize the game
function startGame() {
    shuffleCards();
    renderCards();
    startTimer();
}


function shuffleCards() {

}


function renderCards() {
    cards.forEach(card => {
        card.addEventListener('click', selectCard);
    })
}

function startTimer() {

}


function updateTimer() {
    let seconds = parseInt(document.getElementById("timer").innerText);
    document.getElementById("timer").innerText = ++seconds;

}

function selectCard() {
    this.classList.add('flip');
}

function filpCard() {

}

function checkForMatch() {

}

// Credit: this function code from Love Maths tutorial
function updateNumberOfMatchedCards() {
    let oldNumberOFCheckedCards = parseInt(document.getElementById("matched").innerText);
    document.getElementById("matched").innerText = ++oldCheckedCards;
}

// Credit: this function code from Love Maths tutorial
function updateMoves() {
    let oldNumberOfMoves = parseInt(document.getElementById("move").innerText);
    document.getElementById("move").innerText = ++oldNumberOFCheckedCards;

}

function gameWon() {

}

function displayGameOverModal() {


}

function pauseOrResume() {


}

function restGame() {


}


