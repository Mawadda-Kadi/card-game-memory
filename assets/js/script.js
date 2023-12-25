let cards = document.querySelectorAll('.card');
let flippedCards = [];
let selectedCards = [];
let matchedCards = document.querySelectorAll('.card.matched')[0];

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
function shuffleCards() {
    let shuffleCards = cards.sort(() => Math.random() - 0.5);
    };



function startTimer() {
    let timer = document.getElementById('timer');
    
    // Credit: imported from ... 
    let seconds = Math.floor((Date.now() - startTimer) / 1000);//
    
    timer.textContent = `Time: ${seconds}s`;
    ++seconds;
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
    const firstCard = document.querySelectorAll('.card.flip')[0].firstElementChild.src;
    const secondCard = document.querySelectorAll('.card.flip')[1].firstElementChild.src;
    if (firstCard === secondCard) {
        alert("good");
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedCards.push(firstCard, secondCard);
        updateNumberOfMatchedCards();
    } else {
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
    document.getElementById("matched").innerText = ++oldCheckedCards;
}


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


