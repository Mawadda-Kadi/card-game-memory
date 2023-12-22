let cards = [];
let moves = 0;
let matchedCards = 0;
let timer;
let seconds = 0;


// Functions

// to initialize the game
function startGame() {
    difficulityLevel();
    shuffleCards();
    renderCards();
    startTimer();
}

// to get the selected level from the dropdown menu
function difficulityLevel() {
    let difficulitySelect = document.getElementById('difficulity-levels');
    let difficulity = difficulitySelect.value;
}


function shuffleCards() {

}


function renderCards() {


}

function startTimer() {

}


function updateTimer() {


}

function selectCard() {
    

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


