// Get computers choice - pick random 0 - 3 num = rock,paper, or scissors
// Get players choice - ask for input via prompt
// Check if input is valid - input is case sensitive
// Compare players choice to computers choice
// If 'rock' meets 'paper' - 'paper' wins
// If 'rock' meets'scissors' -'rock' wins
// If 'paper' meets'scissors' -'scissors' wins
// If computers choice matches players choice tie



let num = Math.random() * 3

function computersChoice(num) {
    switch (num) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return'scissors'
    }
}

let choice = prompt('Rock, Paper, or Scissors?')
 if (choice !== 'Rock' || choice !== 'Paper' || choice !== 'Scissors') {
    console.error('Usage: Rock, Paper, Scissors')
 }
