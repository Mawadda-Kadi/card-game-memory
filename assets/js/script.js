let cards = document.querySelectorAll('.card');
let flippedCards = [];
let selectedCards = [];
let matchedCards = [];
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

// Credit: imported from StackOverFlow
function shuffleCards() {
    let shuffleCards = () => {
        cards.sort(() => Math.random() - 0.5);
    };
}

function startTimer() {

}




function updateTimer() {
    let seconds = parseInt(document.getElementById("timer").innerText);
    document.getElementById("timer").innerText = ++seconds;

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
    let firstCard = flippedCards[0].firstElementChild.src;
    let secondCard = flippedCards[1].firstElementChild.src;
    if (firstCard === secondCard) {
        alert("good");
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedCards.push(firstCard, secondCard);
    } else {
        returnFlippedcards();
    }
}

function returnFlippedcards() {
    firstCard.classList.remove('flipped');
    firstCard.style.transform = "rotateY(0deg)"
    secondCard.classList.remove('flipped');
    secondCard.style.transform = "rotateY(0deg)"
    flippedCards = [];
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
    if (gameWon) {
        alert("Good Job Trainer! You caught'em all"); // display also time and moves
    }

}

function pauseOrResume() {


}

function resetGame() {


}


