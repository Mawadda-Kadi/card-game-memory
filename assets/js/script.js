let cards = document.querySelectorAll('.card');
let flippedCards = [];
let selectedCards = [];
let timer;

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});

// Functions

// to initialize the game
function startGame() {
    shuffleCards();
    startTimer();
}


function shuffleCards() {

}


function startTimer() {

}


function updateTimer() {
    let seconds = parseInt(document.getElementById("timer").innerText);
    document.getElementById("timer").innerText = ++seconds;

}

function flipCard() {
     if (flippedCards.length < 2 && !flippedCards.includes(this)) {
        this.style.transform = "rotateY(180deg)";
        //this.classList.add('flipped');
        flippedCards.push(cards[this]);
        selectedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
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
    if (oldNumberOFCheckedCards === 8) {
        displayGameOverModal();
        resetGame();
    }

}

function displayGameOverModal() {
    if(gameWon) {
        alert("Good Job Trainer! You caught'em all"); // display also time and moves
    }

}

function pauseOrResume() {


}

function resetGame() {


}


