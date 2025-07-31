// create getComputerChoice() function to get the computer's choice for a given round

function getComputerChoice() {

        let x = Math.random()
        if (x < 0.333) {
            console.log('Computer chose: ROCK')
            return 'ROCK'
        } else if (0.333 <= x  && x <  0.666) {
            console.log('Computer chose: PAPER')
            return 'PAPER'
        } else {
            console.log('Computer chose: SCISSORS')
            return 'SCISSORS'
        }
    
}


// create getHumanChoice() function

function getHumanChoice() {
    let message = 'Rock, Paper, or Scissors. Pick one!'
    let y = prompt(message).toUpperCase()
    console.log('You chose: ' + y)
    return y
}

let humanScore = 0
let computerScore = 0


// create the playRound() function 

function playRound() {

        // get human choice
        const humanChoice = getHumanChoice();

        // get computer choice
        const computerChoice = getComputerChoice();

        // all win scenarios
        if (
            (humanChoice == 'SCISSORS' && computerChoice == 'PAPER') || 
            (humanChoice == 'PAPER' && computerChoice == 'ROCK') || 
            (humanChoice == 'ROCK' && computerChoice == 'SCISSORS')
        ) {
            console.log('You win!')
            humanScore += 1
            return humanScore
        } 
        // tie scenarios
        else if (
            (humanChoice == 'SCISSORS' && computerChoice == 'SCISSORS') || 
            (humanChoice == 'PAPER' && computerChoice == 'PAPER') || 
            (humanChoice == 'ROCK' && computerChoice == 'ROCK')
        ) {
            console.log('It was a tie!')
            
        } 
        // losing scenarios
        else {
            console.log('You lost!')
            computerScore += 1
            return computerScore 
        }


}

function playGame() {
    for (i = 1; i <= 5; i++) {
        console.log('Round ' + i + '  ---------------------------------')
        console.log(' ')
        playRound()
        console.log(' ')
        console.log('You: ' + humanScore + ' | ' + 'The Algorithm: ' + computerScore)
        console.log(' ')
    }
    if (computerScore < humanScore) {
        console.log('You won the entire game woohooo!!!')
    } else if  (computerScore === humanScore) {
        console.log('womp, womp, it sucks to suck. You lost the game')
    } else {
        console.log('It was a tie buddy. Play again to settle this!')
    }
}

playGame();

