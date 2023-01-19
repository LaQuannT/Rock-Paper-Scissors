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

// Get players choice - ask for input via prompt

function getPlayersChoice() {
    let playerChoice = prompt("Rock, Paper, Scissors?");
    switch(playerChoice) {
        case "Rock":
            return "Rock";
        case "Paper":
            return "Paper";
        case "Scissors":
            return "Scissors";

        // Check if input is valid - input is case sensitive

        default:
            alert("Please enter a valid choice, choice must Match prompt!");
            return getPlayersChoice();
        }
}

/* Compare players choice to computers choice
If 'rock' meets 'paper' - 'paper' wins
If 'rock' meets'scissors' -'rock' wins
If 'paper' meets'scissors' -'scissors' wins
If computers choice matches players choice tie */

function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        result.textContent = "You Lose! Paper beats Rock";
        results.append(result);
        return;

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result.textContent = "You Win! Rock beats Scissors";
        results.append(result);
        return;

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result.textContent = "You Win! Paper beats Rock";
        results.append(result);
        return;

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result.textContent = "You Lose! Scissors beats Paper";
        results.append(result);
        return;

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result.textContent = "You win! Scissors beats Paper";
        results.append(result);
        return;

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result.textContent = "You Lose! Rock beats Scissors";
        results.append(result);
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

