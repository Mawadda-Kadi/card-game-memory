let cards = document.querySelectorAll('.card');
let flippedCards = [];
let selectedCards = [];
let matchedCards = [];
let firstCard = null;
let secondCard = null;
let seconds = 0;
let timer = null;
let moves = 0;
let hintUsed = false;

// Event Listeners:
document.getElementById('start-btn').addEventListener("click", startGame);
document.getElementById('reset-btn').addEventListener("click", resetGame);
document.getElementById('pause-btn').addEventListener('click', pauseOrResume);
document.getElementById('hint-btn').addEventListener('click', hint);
document.getElementById('instructions-btn').addEventListener('click', displayInstructions);



// Functions

// to initialize the game
function startGame() {
    document.getElementById('start');
    shuffleCards();
    startTimer();
    cards.forEach(card => {
        card.addEventListener('click', flipCard);
    });
}

// Credit: imported from StackOverFlow
// fix
function shuffleCards() {
    const cardArray = Array.from(cards);
    const shuffledCards = [];

    while (cardArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * cardArray.length);
        const randomCard = cardArray.splice(randomIndex, 1)[0];
        shuffledCards.push(randomCard);
    }

    // Clear the game-board and append the shuffled cards
    const gameBoard = document.querySelector('.game-board');
    gameBoard.innerHTML = '';
    shuffledCards.forEach(card => gameBoard.appendChild(card));

    // Update the 'cards' variable with the shuffled cards
    cards = Array.from(document.querySelectorAll('.card'));
}


// Credit: fixed by  my mentor
function startTimer() {
    document.getElementById('timer').innerText = `Time: ${seconds}s`;

    timer = setInterval(() => {
        seconds += 1;
        document.getElementById('timer').innerText = `Time: ${seconds}s`;
    }, 1000);

    //to set a time limit for the startTimer function
    setTimeout(gameLost, 120000);
    

}

function flipCard() {
    // to prevent double click on the card
    if (this.classList.contains('flipped')) return;

    if (flippedCards.length < 2 && !flippedCards.includes(this)) {
        this.style.transform = "rotateY(180deg)";
        this.classList.add('flipped');
        flippedCards.push(cards[this]);
        selectedCards.push(this);
        updateMoves();

        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 1000);
            
        }
    }
}


function checkForMatch() {
    firstCard = document.querySelectorAll('.card.flipped')[0];
    secondCard = document.querySelectorAll('.card.flipped')[1];
    if (firstCard.firstElementChild.src === secondCard.firstElementChild.src) {
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
    document.getElementById("move").innerText = ++oldNumberOfMoves;
}

function gameWon() {
    if (matchedCards.length === 8) {
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
    if (timer) {
        clearInterval(timer);
        timer = null;
        document.getElementById('pause-btn').innerText = 'Resume';
        // to prevent user from clicking cards while pausing
        cards.forEach(card => {
            card.removeEventListener('click', flipCard);
        });
    } else {
        startTimer();
        document.getElementById('pause-btn').innerText = 'Pause';
        // to allow user to continue playing
        cards.forEach(card => {
            card.addEventListener('click', flipCard);
        });
    }

}

function gameLost() {

}

function resetGame() {
    document.getElementById(reset-btn);
    startGame();
}

function displayInstructions() {

}

function hint() {
    // Check if hint has been used
    if (hintUsed) {
        alert("You've already used the hint!");
        return;
    }

    // to prevent multiple uses, so the hint will be marked as used
    hintUsed = true;

    // to get all unflipped cards
    const unflippedCards = document.querySelectorAll('.card:not(.flipped)');

    // to reveal all unflipped cards
    unflippedCards.forEach(card => {
        card.style.transform = "rotateY(180deg)";
    });

    // to set a time limit for the hint function
    setTimeout(() => {
        unflippedCards.forEach(card => {
            card.style.transform = "rotateY(0deg)";
        });
    }, 1500); 
}


