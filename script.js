// Get computers choice - pick random 0 - 3 num = rock,paper, or scissors
// Get players choice - ask for input via prompt
// Check if input is valid - input is case sensitive
// Compare players choice to computers choice
// If 'rock' meets 'paper' - 'paper' wins
// If 'rock' meets'scissors' -'rock' wins
// If 'paper' meets'scissors' -'scissors' wins
// If computers choice matches players choice tie
// create a game function that calls the check function in a 5* loop


function GetComputersChoice() {
   switch(Math.floor(Math.random() * 3)) {
    case 0:
      return "Rock";
    case 1:
        return "Paper";
    case 2:
        return "Scissors";
   }
    
}


function GetPlayersChoice() {
    let playerChoice = prompt("Rock, Paper, Scissors?");
    switch(playerChoice) {
        case "Rock":
            return "Rock";
        case "Paper":
            return "Paper";
        case "Scissors":
            return "Scissors";
        default:
            alert("Please enter a valid choice, choice must Match prompt!");
            return GetPlayersChoice();
        }
}


function playRound(playerSelection, computersSelection){
    if (playerSelection === "Rock" && computersSelection === "Paper") {
        console.log("You Lose! Paper beats Rock");
    } else if (playerSelection === "Rock" && computersSelection === "Scissors") {
        console.log("You Win! Rock beats Scissors");
    } else if (playerSelection === "Paper" && computersSelection === "Rock") {
        console.log("You Win! Paper beats Rock");
    } else if (playerSelection === "Paper" && computersSelection === "Scissors") {
        console.log("You Lose! Scissors beats Paper");
    } else if (playerSelection === "Scissors" && computersSelection === "Paper") {
        console.log("You Win! Scissors beats Paper");
    } else if (playerSelection === "Scissors" && computersSelection === "Rock") {
        console.log("You Lose! Rock beats Scissors");
    } else {
        console.log("It's a Tie!");
    }
}

console.log(game());

function game() {
    for (let i = 0; i < 5; i++) {
            let playerSelection = GetPlayersChoice();
            let computersSelection = GetComputersChoice();
            playRound(playerSelection, computersSelection);
    }
    return console.log("Game Over!");
}