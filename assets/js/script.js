let cards = [];
let timer;



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

    // to set up the number of cards based on the difficulity level
    switch (difficulity) {
        case 'rookie-trainer':
            renderCards(8);
            break;
        case 'pro-trainer':
            renderCards(16);
            break;
        case 'master-trainer':
            renderCards(32);
            break;
        default;
        }
}


function shuffleCards() {

}


function renderCards() {


}

function startTimer() {

}


function updateTimer() {
    let seconds = parseInt(document.getElementById("timer").innerText);
    document.getElementById("timer").innerText = ++seconds;

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


