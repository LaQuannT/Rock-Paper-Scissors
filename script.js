// Get computers choice - pick random 0 - 3 num = rock,paper, or scissors

function getComputersChoice() {
   switch(Math.floor(Math.random() * 3)) {
    case 0:
      return "Rock";
    case 1:
        return "Paper";
    case 2:
        return "Scissors";
   }
    
}

/* Compare players choice to computers choice
If 'rock' meets 'paper' - 'paper' wins
If 'rock' meets'scissors' -'rock' wins
If 'paper' meets'scissors' -'scissors' wins
If computers choice matches players choice tie */

function playRound(playerSelection, computerSelection){
    let c = 'computer', p = 'player';

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        result.textContent = "You Lose! Paper beats Rock";
        results.append(result);
        displayScore(c);
        return;

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result.textContent = "You Win! Rock beats Scissors";
        results.append(result);
        displayScore(p);
        return;

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result.textContent = "You Win! Paper beats Rock";
        results.append(result);
        displayScore(p);
        return;

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result.textContent = "You Lose! Scissors beats Paper";
        results.append(result);
        displayScore(c);
        return;

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result.textContent = "You win! Scissors beats Paper";
        results.append(result);
        displayScore(p);
        return;

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result.textContent = "You Lose! Rock beats Scissors";
        results.append(result);
        displayScore(c);
        return;

    } else {
        result.textContent = "It's a Tie!";
        results.append(result);
        return;
    }
}

// create a game function that calls the check function in a 5* loop

function game() {
    for (let i = 0; i < 5; i++) {
            let playerSelection = getPlayersChoice();
            let computerSelection = getComputersChoice();
            playRound(playerSelection, computerSelection);
    }
    return console.log("Game Over!");
}

//console.log(game());

// Use selectors to get nodes from index 
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const result = document.createElement('p');
const scores = document.getElementById('scores');


// Add event listeners to rock, paper, and scissors buttons
rock.addEventListener('click', function() {
    playRound("Rock",getComputersChoice());

});

paper.addEventListener('click', function() {
    playRound("Paper",getComputersChoice());
});

scissors.addEventListener('click', function() {
    playRound("Scissors",getComputersChoice());
});


// variable to hold scores
let playerScore = 0, computerScore = 0;

// Display running scores - increments by one for each round won

function displayScore(winner) {
    if (winner === 'player') {
        playerScore++;
        scores.textContent =`Player: ${playerScore} | Computer: ${computerScore}`;
        displayWinner(playerScore, computerScore);
        return playerScore;
        
    } else if (winner === "computer") {
        computerScore++;
        scores.textContent =`Player: ${playerScore} | Computer: ${computerScore}`;
        displayWinner(playerScore, computerScore);
        return computerScore;

    }
}

// Announce a winner when player or computer has 5 wins

function displayWinner(...args) {
    let playerWins = args[0];
    let computerWins = args[1];

    if (playerWins === 5) {
        result.textContent = "Game Over! Player Wins!";
        results.append(result);
    
         } else if (computerWins === 5) {
            result.textContent = "Game over! Computer Wins!";
            results.append(result);
        }
}
