# Card Game Memory

## Introduction

Welcome to the "Card Memory Game," an exciting challenge set in the vibrant and enchanting world of Pokémon! Immerse yourself in a captivating experience where the iconic Pokémon characters become the stars of a classic memory game.

This README provides an overview of the game, its features, and guidance on deployment.

The Live-Site can be viewed here: [Card Memory Game](https://mawadda-kadi.github.io/card-game-memory/)

## User Experience

The user-centric design and functionality provide an engaging and intuitive experience for players, encouraging them to exercise memory skills and enjoy the challenge of the memory card game.

### Target Audience

Designed for Pokémon enthusiasts of all ages, the "Card Memory Game" combines the joy of Pokémon with the engaging gameplay of a memory card challenge. Whether you're a devoted Pokémon fan relishing in the nostalgia or a parent introducing your child to the magical world of Pokémon, this game caters to a diverse audience. The delightful Pokémon theme adds an extra layer of charm, making it an ideal choice for those seeking an enjoyable and Pokémon-filled memory exercise. Embark on this adventure to match your favorite Pokémon pairs and test your memory skills in a Pokémon-themed journey!

## User Perspectives

### Start Game

**Functionality:** Clicking the "Start Game" button initiates the memory card game.

**User Perspective:** Users can begin playing the game by clicking this button. The timer starts, and the cards are shuffled for a new game.

### Flip Card

**Functionality:** Clicking on a card flips it to reveal the image on the other side.

**User Perspective:** Users can interact with the cards, trying to remember the positions and match pairs by clicking on them.

### Pause or Resume

**Functionality:** Clicking the "Pause" button pauses the game, and clicking it again resumes the game.

**User Perspective:** Users can temporarily halt the game if needed, allowing them to take a break and resume playing later without losing progress.

### Hint

**Functionality:** Clicking the "Hint" button briefly reveals all cards, helping users memorize their positions.

**User Perspective:** Users can use the hint feature strategically to get a quick glimpse of card positions, aiding their memory during the game.

### Reset Game

**Functionality:** Clicking the "Reset" button restarts the game, shuffling the cards and resetting scores.

**User Perspective:** Users can reset the game at any point, starting fresh with a new set of cards and resetting their move and match counters.

### Game Instructions

**Functionality:** Clicking the "Instructions" button displays a modal with game instructions.

**User Perspective:** Users can access clear instructions on how to play the game, including details on card flipping, matching, and using additional features.

### Game Over Modal

**Functionality:** When the game is won or lost, a modal appears, providing feedback and statistics.

**User Perspective:** Users receive a personalized message based on their performance, including the time taken, moves made, and the number of matched cards.

### Responsive Design

**Functionality:** The game adapts to different screen sizes for a seamless experience.

**User Perspective:** Users can enjoy the game on various devices, and the layout adjusts to provide an optimal playing experience.

### Timer and Scores

**Functionality:** The game keeps track of time, moves, and matched cards.

**User Perspective:** Users can challenge themselves by monitoring their time, aiming to minimize moves and maximize matches for a better score.

### Visual Feedback

**Functionality:** Cards visually flip, and matched cards remain face-up.

**User Perspective:** Users receive immediate visual feedback as they interact with the cards, aiding in concentration and engagement.

### Mobile-Friendly Design

**Functionality:** The game is designed to be playable on mobile devices.

**User Perspective:** Users can enjoy the game on their smartphones, ensuring accessibility and entertainment on the go.

## Imagery Used

The imagery in the "Card Memory Game" revolves around the captivating world of Pokémon, bringing beloved characters to life through vibrant and engaging visuals.

Each card features charming images of Pokémon characters, including Bulbasaur, Charmander, Dratini, Lickitung, Oshawott, Pikachu, Scorbunny, and Togepi. The front of the cards showcases these delightful Pokémon, adding a playful and nostalgic touch to the game.

## Typography

We use the 'Rubik Doodle Shadow' with the game title and 'PT Sans' Fonts with paragraphs for a modern and readable look.

## Design

## WireFrames

![wireframes for CMG](https://github.com/Mawadda-Kadi/card-game-memory/assets/151715427/af83fbc4-f802-4daf-a85e-145101877012)

## Game Structure

**Game Box (`<div class="game-box">`):** Represents the overall container for the entire game interface, including the header, game board, scores, controls, and a game-over modal.

**Game Header (`<div class="game-header">`):** Displays the title of the game, "Card Memory Game."

**Game Board (`<div class="game-board">`):** Contains a grid of cards representing the playing area for the memory game.

**Game Scores (`<div class="game-scores">`):** Displays the current number of moves, matched cards, and the elapsed time during gameplay.

**Game Control (`<div class="game-control">`):** Provides buttons for starting the game, pausing or resuming, using hints, resetting the game, and accessing instructions.

**Game Over Modal (`<div class="gameover-modal">`):** Represents a modal that appears when the game is completed or lost, providing feedback on the player's performance.

**Instruction Box (`<div class="instruction-box">`):** Serves as a modal for displaying instructions when the corresponding button is clicked.

## Features

- Start Game
- Flip Card
- Pause or Resume
- Hint
- Reset Game
- Game Instructions
- Game Over Modal
- Responsive Design
- Timer and Scores
- Visual Feedback
- Mobile-Friendly Design

## Future Features

## Difficulty Levels:

**Description: Introduce multiple difficulty levels to cater to players of varying skill levels. Each difficulty level will feature a different number of cards, providing an increasingly challenging experience.
Implementation: The game will dynamically adjust the grid size based on the selected difficulty level. For larger screens, higher difficulty levels with more cards and a larger grid will be available. This enhancement aims to provide a more engaging and challenging experience for players using larger screens.
Levels:
**Roockie Trainer (8 Pairs)**: Suitable for all screen sizes with a standard grid size.
**Pro Trainer (16 Pairs)**: A moderately challenging level with an increased number of cards, ideal for larger screens.
**Master Trainer (32 Pairs)**: A high level of difficulty with an even larger grid, specifically designed for larger screens.

## Testing

### HTML & CSS Validator

HTML and CSS code were validated using W3C validators to ensure standards compliance. The Results were no errors found.

![HTML Validator for CMG](https://github.com/Mawadda-Kadi/card-game-memory/assets/151715427/e7a8f6dc-3826-42bb-b699-95239e94a1f9)
![CSS Validator for CMG](https://github.com/Mawadda-Kadi/card-game-memory/assets/151715427/bb8ea50a-c826-4a59-b27b-299bb24af0d4)

### Responsiveness

The game website is designed to be responsive across various devices, ensuring a seamless user experience.

![Mock-up for CMG](https://github.com/Mawadda-Kadi/card-game-memory/assets/151715427/d7699abd-d482-46fd-937b-f4e2f76c6f4b)


### The Lighthouse

The Card Memory Game Website was also tested through Chrome Dev Tools - Lighthouse. It was tested on four main areas - Performance, Accessibility, Best Practices, and SEO.

![CMG Accessibility](https://github.com/Mawadda-Kadi/card-game-memory/assets/151715427/5fec2403-30a5-437b-86c3-36133dddec28)


## Fixed Bugs

### Card Flipping Issue

**Bug:** Double-click required to flip a card.

**Fix:** Removed the unnecessary selectedCards array, preventing the need for double-clicking.

### Shuffle Function Issue

**Bug:** shuffleCards function not working.

**Fix:** Changed the shuffle logic to correctly shuffle and update the cards array.

### Timer Acceleration Issue

**Bug:** Timer accelerates on game reset.

**Fix:** Cleared the interval and set timer to null in the resetGame function to avoid timer acceleration.

### Matched Cards Reset Issue

**Bug:** Matched class not resetting on game reset.

**Fix:** Added logic in the resetGame function to remove the 'matched' class and reset the transformation for each card.

### GameWon Function Issue

**Bug:** Game ends before matching all cards.

**Fix:** Updated the condition in the gameWon function to check for all cards matched (matchedCards.length === cards.length).

### Game Over Modal Issue

**Bug:** displayGameOverModal not displaying.

**Fix:** Removed the unnecessary call

 to resetGame in the gameWon function, preventing premature game reset.

### Timer Limit Issue

**Bug:** Timer limit not properly set.

**Fix:** Set a 120-second timer limit using setTimeout in the startTimer function.

## Known Bugs

The Website Game is not functioning well in iOs Systems.

In Addition The following limitation should be put into consideration:

Mobile screens have limited space, and fitting 16 cards on one page without scrolling may result in small card sizes and cramped layouts, making it challenging for users to interact.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Chrome DevTools
- Compress and resize images using iloveimg
- HTML Validator: W3C HTML Validator
- CSS Validator: W3C CSS Validator
- Wireframes: Balsamiq
- Multi-Device Website Mockup Generator: Techsini
- JavaScript Code Quality Tool: JSHint [JSHint](https://jshint.com/)

## Credits

### Educational links

**Main Reference:** Memory Card Game JavaScript Tutorial : [YouTube](https://www.youtube.com/watch?v=T-UbMN25s5I)

Memory Card Game in JavaScript [YouTube](https://www.youtube.com/watch?v=wz9jeI9M9hI)

Learn the JavaScript DOM with This Project - Memory Game [YouTube](https://www.youtube.com/watch?v=bznJPt4t_4s)

JavaScript DOM Event Listener [W3Schools](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

setInterval() global function [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

How to pause and resume event propagation in JavaScript? [SiteLint](https://www.sitelint.com/blog/how-to-pause-and-resume-event-propagation-in-javascript/)

JavaScript setTimeout() – How to Set a Timer in JavaScript or Sleep for N Seconds [freeCodeCamp](https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/)

How to randomize (shuffle) a JavaScript array? [Stack Overflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

Arrow function expressions [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

JavaScript Array forEach() [W3Schools](https://www.w3schools.com/jsref/jsref_foreach.asp)

Document: querySelector() method [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

### Media

- Pickachu Card Image [Image](https://pin.it/5sYNuIT)
- Bulbasaur Card Image [Image](https://pin.it/lb3J2o4)
- Charmander Card Image [Image](https://pin.it/46dba0H)
- Dratini Card Image [Image](https://pin.it/6vAIcvv)
- Lickitung Card Image [Image](https://pin.it/4kEaiIv)
- Oshawott Card Image [Image](https://pin.it/V5Wvf37)
- Scorbunny Card Image [Image](https://pin.it/4ynBh8h)
- Togepi Card Image [Image](https://pin.it/7mIQjfi)
- Flipped-back Card Image [Image](https://pin.it/4KRh80q)

### Content

- Favicon [Favicon](https://www.favicon.cc/?action=icon&file_id=350272)
- Imported shuffleCards function from [Stack Overflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

  ```javascript
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  ```

## Steps on Deploying, Cloning, and Forking

### Deploying

To deploy this project, follow these steps:

1. Navigate to the "Settings" tab of your repository.
2. Scroll down to the "GitHub Pages" section.
3. Choose the branch you want to deploy (e.g., main).
4. Your site will be available at `https://<your-username>.github.io/<repository-name>`.

### Cloning

To clone this repository, follow these steps:

1. Copy the repository URL by clicking on the "Code" button and selecting either the HTTPS or SSH option.
2. Open your Terminal or Command Prompt.
3. Navigate to the directory where you want to clone the repository.
4. Run the following command: `git clone <repository_url>`.
5. Move into the cloned directory using: `cd <repository_directory>`.

### Forking

To fork this repository, follow these steps:

1. Click on the "Fork" button on the top-right of the repository page.
2. Choose whether to fork to your personal account or an organization.
3. Wait for GitHub to create a copy of the repository in your account.
4. Clone your forked repository using the steps mentioned above.


## cknowledgments

I would like to express my sincere gratitude to Antonio Rodriguez, my mentor, for his invaluable guidance and support throughout the development of the "Card Memory Game." Antonio's expertise and insights played a pivotal role in shaping the project and enhancing both its functionality and user experience.