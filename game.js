// create getComputerChoice() function to get the computer's choice for a given round

const parent = document.querySelector('#three')

function getComputerChoice() {
    const mainContent = document.createElement('p')

        let x = Math.random()
        if (x < 0.333) {
            mainContent.textContent = 'Round ' + i + '  --------------------------------- Computer chose: ROCK'
            parent.appendChild(mainContent)
            return 'ROCK'
        } else if (0.333 <= x  && x <  0.666) {
            mainContent.textContent = 'Round ' + i + '  --------------------------------- Computer chose: PAPER'
            parent.appendChild(mainContent)
            return 'PAPER'
        } else {
            mainContent.textContent = 'Round ' + i + '  --------------------------------- Computer chose: SCISSORS'
            parent.appendChild(mainContent)
            return 'SCISSORS'
        }
    
}

let humanScore = 0
let computerScore = 0
i = 1

// create the playRound() function 

function playRound(humanChoice) {
    const startButton = document.querySelector('#begin')
    startButton.textContent = 'Restart Game ↻'
    startButton.style.border = 'solid red 2px'
    startButton.style.color = 'red'
    const mainContent = document.createElement('p')
    const playerScore = document.querySelector('#tracking p')
    const algorithmScore = document.querySelector('#alg')


    // get computer choice
        const computerChoice = getComputerChoice();

        // all win scenarios
        if (
            (humanChoice == 'SCISSORS' && computerChoice == 'PAPER') || 
            (humanChoice == 'PAPER' && computerChoice == 'ROCK') || 
            (humanChoice == 'ROCK' && computerChoice == 'SCISSORS')
        ) {
            humanScore += 1
            mainContent.textContent = 'You win!   You: ' + humanScore + ' | ' + 'Bot: ' + computerScore
            playerScore.textContent = 'Me: ' + humanScore
            parent.appendChild(mainContent)
            i++
            if (computerScore == 3 || humanScore == 3) {
            if (computerScore < humanScore) {
                mainContent.textContent = 'You won the entire game woohooo!!!'
                parent.appendChild(mainContent)
                isGameActive = false
            } else if  (computerScore === humanScore) {
                mainContent.textContent = 'It was a tie buddy. Play again to settle this!'
                parent.appendChild(mainContent)
                isGameActive = false
                while (document.querySelector('#three').firstElementChild) {
                    document.querySelector('#three').removeChild(document.querySelector('#three').firstElementChild)
                }
            } else {
                mainContent.textContent = 'womp, womp, it sucks to suck. You lost the game.'
                parent.appendChild(mainContent)
                isGameActive = false
                while (document.querySelector('#three').firstElementChild) {
                    document.querySelector('#three').removeChild(document.querySelector('#three').firstElementChild)
                }
            }
            startButton.textContent = 'Start Game'
            startButton.style.border = 'solid black 2px'
            startButton.style.cssText = 'color: black;'
            humanScore = 0
            computerScore = 0
            i = 1
            isGameActive = false
            while (document.querySelector('#three').firstElementChild) {
                document.querySelector('#three').removeChild(document.querySelector('#three').firstElementChild)
            }
        }
            return humanScore
        } 
        // tie scenarios
        else if (
            (humanChoice == 'SCISSORS' && computerChoice == 'SCISSORS') || 
            (humanChoice == 'PAPER' && computerChoice == 'PAPER') || 
            (humanChoice == 'ROCK' && computerChoice == 'ROCK')
        ) {
            i++
            mainContent.textContent = 'It was a tie!   You: ' + humanScore + ' | ' + 'Bot: ' + computerScore
            parent.appendChild(mainContent)
            if (computerScore == 3 || humanScore == 3) {
            if (computerScore < humanScore) {
                mainContent.textContent = 'You won the entire game woohooo!!!'
                parent.appendChild(mainContent)
                isGameActive = false
                while (document.querySelector('#three').firstElementChild) {
                    document.querySelector('#three').removeChild(document.querySelector('#three').firstElementChild)
                }
            } else if  (computerScore === humanScore) {
                mainContent.textContent = 'It was a tie buddy. Play again to settle this!'
                parent.appendChild(mainContent)
                isGameActive = false
                while (document.querySelector('#three').firstElementChild) {
                    document.querySelector('#three').removeChild(document.querySelector('#three').firstElementChild)
                }
            } else {
                mainContent.textContent = 'womp, womp, it sucks to suck. You lost the game.'
                parent.appendChild(mainContent)
                isGameActive = false
                while (document.querySelector('#three').firstElementChild) {
                    document.querySelector('#three').removeChild(document.querySelector('#three').firstElementChild)
                }
            }
            startButton.textContent = 'Start Game'
            startButton.style.border = 'solid black 2px'
            humanScore = 0
            computerScore = 0
            i = 1
            isGameActive = false
            while (document.querySelector('#three').firstElementChild) {
                document.querySelector('#three').removeChild(document.querySelector('#three').firstElementChild)
            }
        }
            
        } 
        else {
            computerScore += 1
            mainContent.textContent = 'You lost!   You: ' + humanScore + ' | ' + 'Bot: ' + computerScore
            algorithmScore.textContent = 'Bot: ' + computerScore
            parent.appendChild(mainContent)
            i++
            if (computerScore == 3 || humanScore == 3) {
            if (computerScore < humanScore) {
                mainContent.textContent = 'You won the entire game woohooo!!!'
                isGameActive = false
                while (document.querySelector('#three').firstElementChild) {
                    document.querySelector('#three').removeChild(document.querySelector('#three').firstElementChild)
                }
                parent.appendChild(mainContent)
            } else if  (computerScore === humanScore) {
                mainContent.textContent = 'It was a tie buddy. Play again to settle this!'
                parent.appendChild(mainContent)
                isGameActive = false
                while (document.querySelector('#three').firstElementChild) {
                    document.querySelector('#three').removeChild(document.querySelector('#three').firstElementChild)
                }
            } else {
                mainContent.textContent = 'womp, womp, it sucks to suck. You lost the game.'
                parent.appendChild(mainContent)
                isGameActive = false
                while (document.querySelector('#three').firstElementChild) {
                    document.querySelector('#three').removeChild(document.querySelector('#three').firstElementChild)
                }
            }
            startButton.textContent = 'Start Game'
            startButton.style.cssText = 'color: black;'
            startButton.style.border = 'solid black 2px'
            humanScore = 0
            computerScore = 0
            i = 1
            isGameActive = false
            while (document.querySelector('#three').firstElementChild) {
                document.querySelector('#three').removeChild(document.querySelector('#three').firstElementChild)
            }
        }
            return computerScore 
        }
}

const rock = document.querySelector('#rock-btn')
const paper = document.querySelector('#paper-btn')
const scissors = document.querySelector('#scissors-btn')
const beginGame = document.querySelector('#begin')

let isGameActive = false

beginGame.addEventListener('click', () => {
    const parentt = document.querySelector('#tracking')
    if (document.querySelector('#tracking p')) {
        parentt.removeChild(parentt.lastElementChild)
    }
    if (document.querySelector('#tracking p')) {
        parentt.removeChild(parentt.firstElementChild)
    }
    isGameActive = true
    beginGame.style.color = 'black'
    beginGame.style.borderColor = 'black'
    const prompt = document.querySelector('.short-description-2')
    prompt.textContent = 'Let the ultimate Rock, Paper, Scissors showdown begin!'
    if (beginGame.textContent === 'Restart Game ↻') {
        beginGame.textContent = 'Choose'
        beginGame.style.border = '0px'
    } else if (beginGame.textContent === 'Start Game') {
        beginGame.textContent = 'Choose'
        beginGame.style.border = '0px'
    }
    i = 1
    humanScore = 0
    computerScore = 0
    const algorithmScore = document.createElement('p')
    algorithmScore.setAttribute('id', 'alg')
    algorithmScore.textContent = 'Bot: ' + computerScore
    parentt.appendChild(algorithmScore)
    const playerScore = document.createElement('p')
    playerScore.textContent = 'Me: ' + humanScore
    parentt.prepend(playerScore)
    while (parent.firstElementChild) {
        parent.removeChild(parent.firstElementChild);
    }
})


if (beginGame.textContent === 'Start Game') {
        beginGame.style.border = 'solid black 2px'
        
    }

rock.addEventListener('click', () => {
    if (isGameActive === false) return
    playRound('ROCK')})
paper.addEventListener('click', () => {
    if (isGameActive === false) return 
    playRound('PAPER')})
scissors.addEventListener('click', () => {
    if (isGameActive === false) return 
    playRound('SCISSORS')})








