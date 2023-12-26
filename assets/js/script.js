 // to display the start modal when the page loads
document.addEventListener('DOMContentLoaded', function () {
    displayStartModal();
    document.getElementById('start-game-btn').addEventListener('click', startGame);
});

// Variables
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

// Event Listeners for click:
document.getElementById('reset-btn').addEventListener("click", resetGame);
document.getElementById('pause-btn').addEventListener('click', pauseOrResume);
document.getElementById('hint-btn').addEventListener('click', hint);
document.getElementById('instructions-btn').addEventListener('click', displayInstructions);
document.getElementById('close-instruction-btn').addEventListener('click', closeInstructions);

// Functions

function displayStartModal() {
    const startModal = document.getElementById('start-modal');
    startModal.style.display = 'block';

    // to close the modal and start the game when the start button is clicked
    document.getElementById('start-game-btn').addEventListener('click', function () {
        startModal.style.display = 'none';
        startGame();
    });
}

function closeModal() {
    const startModal = document.getElementById('start-modal');
    startModal.style.display = 'none';
}

// to initialize the game
function startGame() {
    document.getElementById('start-game-btn');
    shuffleCards();
    startTimer();
    cards.forEach(card => {
        card.addEventListener('click', flipCard);
    });
}

// Credit: imported from StackOverFlow (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
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


// Credit: fixed by  my mentor "Antonio Rodriguez"
function startTimer() {
    // to avoid acceleration when reseting game
    clearInterval(timer);
    timer = null;

    document.getElementById('timer').innerText = `Time: ${seconds}s`;

    timer = setInterval(() => {
        seconds += 1;
        document.getElementById('timer').innerText = `Time: ${seconds}s`;
    }, 1000);

    //to set a time limit for the startTimer function
    setTimeout(gameLost, 120000);
    

}

//Credit: imported from a tutorial video
function flipCard() {
    // to prevent double click on the card or select three cards in one turn
    if (this.classList.contains('flipped')) return;

    if (flippedCards.length < 2 && !flippedCards.includes(this)) {
        this.style.transform = "rotateY(180deg)";
        this.classList.add('flipped');
        flippedCards.push(cards[this]);
        updateMoves();

        // to allow enough time to have a look to filpped cards before flipping back
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
        gameWon();
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

// Credit: from Love Maths Tutorial
function updateNumberOfMatchedCards() {
    let oldNumberOfMatchedCards = parseInt(document.getElementById("matched").innerText);
    document.getElementById("matched").innerText = ++oldNumberOfMatchedCards;
}

// Credit: from Love Maths Tutorial
function updateMoves() {
    let oldNumberOfMoves = parseInt(document.getElementById("move").innerText);
    document.getElementById("move").innerText = ++oldNumberOfMoves;
}

function gameWon() {
    if (matchedCards.length === cards.length) {
        displayGameOverModal("Great Job Trainer! You caught 'em all");
        clearInterval(timer);
        timer = null;
        // resetGame();
    }
}

function gameLost() {
    if (!gameWon() && seconds >= 120) {
        displayGameOverModal("Sorry, you couldn't catch 'em all in time!");
        clearInterval(timer);
        timer = null;
    }
}

function displayGameOverModal(message) {
    let modal = document.querySelector('.gameover-modal'); 
    let oldNumberOfMoves = parseInt(document.getElementById("move").innerText);
    let oldNumberOfMatchedCards = parseInt(document.getElementById("matched").innerText);
    modal.innerText = `${message} .. You spent ${seconds}s,
    moved ${oldNumberOfMoves} times, and matched ${oldNumberOfMatchedCards} cards`;
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

function resetGame() {
    // to reset all variables
    document.getElementById('timer').innerText = `Time: ${seconds}s`;
    document.getElementById("move").innerText = "0";
    document.getElementById("matched").innerText = "0";
    flippedCards = [];
    selectedCards = [];
    matchedCards = [];
    firstCard = null;
    secondCard = null;
    seconds = 0;
    moves = 0;
    hintUsed = false;

    // to reset matched cards
    cards.forEach(card => {
        card.classList.remove('matched');
        card.style.transform = "rotateY(0deg)";
    });

    // to clear gameover modal content
    document.querySelector('.gameover-modal').innerText = "";
    
    startGame();
}

function displayInstructions() {
    document.getElementById('instructionBox').style.display = 'block';

}

function closeInstructions() {
    document.getElementById('instructionBox').style.display = 'none';
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
    let unflippedCards = document.querySelectorAll('.card:not(.matched)');

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
