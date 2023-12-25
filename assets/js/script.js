let cards = document.querySelectorAll('.card');
let flippedCards = [];
let selectedCards = [];
let matchedCards = [];
let firstCard = null;
let secondCard = null;
let seconds = 0;
let timer = null;

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});

startGame();
// Functions

// to initialize the game
function startGame() {
    shuffleCards();
    startTimer();
}

// Credit: imported from StackOverFlow
// fix
function shuffleCards() {
    cards = Array.from(cards);
    cards.sort(() => Math.random() - 0.5);
};



function startTimer() {
    timer = setInterval(() => {
        document.getElementById('timer').innerText = `Time: ${seconds} seconds`;
        seconds += 1;
    }, 1000);

}

function flipCard() {
    // to prevent double click on the card
    if (this.classList.contains('flipped')) return;

    if (flippedCards.length < 2 && !flippedCards.includes(this)) {
        this.style.transform = "rotateY(180deg)";
        this.classList.add('flipped');
        flippedCards.push(cards[this]);
        selectedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 1000);
        }
    }
}


function checkForMatch() {
    firstCard = document.querySelectorAll('.card.flipped')[0];
    secondCard = document.querySelectorAll('.card.flipped')[1];
    if (firstCard.firstElementChild.src === secondCard.firstElementChild.src) {
        alert("good");
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        matchedCards.push(firstCard, secondCard);
        updateNumberOfMatchedCards();
        flippedCards = [];
    }
    else {
        returnFlippedcards();
    }
}

function returnFlippedcards() {
    firstCard.classList.remove('flipped');
    firstCard.style.transform = "rotateY(0deg)";
    secondCard.classList.remove('flipped');
    secondCard.style.transform = "rotateY(0deg)";
    flippedCards = [];
}


function updateNumberOfMatchedCards() {
    let oldNumberOFCheckedCards = parseInt(document.getElementById("matched").innerText);
    document.getElementById("matched").innerText = ++oldNumberOFCheckedCards;
}


function updateMoves() {
    let oldNumberOfMoves = parseInt(document.getElementById("move").innerText);
    document.getElementById("move").innerText = ++oldNumberOFCheckedCards;

}

function gameWon() {
    if (matchedCards === 8) {
        displayGameOverModal();
        resetGame();
    }

}

function displayGameOverModal() {
    if (gameWon) {
        alert("Good Job Trainer! You caught'em all"); // display also time and moves
    }

}

function pauseOrResume() {


}

function resetGame() {



}


