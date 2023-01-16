// Get computers choice - pick random 0 - 3 num = rock,paper, or scissors
// Get players choice - ask for input via prompt
// Check if input is valid - input is case sensitive
// Compare players choice to computers choice
// If 'rock' meets 'paper' - 'paper' wins
// If 'rock' meets'scissors' -'rock' wins
// If 'paper' meets'scissors' -'scissors' wins
// If computers choice matches players choice tie



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
console.log(GetComputersChoice());

function GetPlayersChoice() {
    playerChoice = prompt("Rock, Paper, Scissors?");
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
console.log(GetPlayersChoice());

