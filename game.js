let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(playerSelction){
    const computerSelection = getComputerChoice();
    console.log('Player choose: ' + playerSelction);
    console.log('Computer choose: ' + computerSelection);
    if(playerSelction === computerSelection){
        displayResult('😑It\'s a tie!😑', playerSelction, computerSelection);
    }
    else if((playerSelction === 'rock' && computerSelection === 'scissors') ||
    (playerSelction === 'paper' && computerSelection === 'rock') ||
    (playerSelction === 'scissors' && computerSelection === 'paper')){
        playerScore++;
        displayResult('🥳Player wins!🥳', playerSelction, computerSelection);
    }
    else{
        computerScore++;
        displayResult('🤖Computer wins!🤖', playerSelction, computerSelection);
    }
    displayScore();

    if(playerScore === 5){
        displayWinner('😁You win the game! ')
        const winner = document.querySelector('#result p:last-child')
        winner.classList.add('winner')
    }
    else if(computerScore === 5){
        displayWinner('🤡You lose the game!')
        const winner = document.querySelector('#result p:last-child')
        winner.classList.add('loser')
    }
}

function displayResult(message, playerChoice, computerChoice){
    const result = document.getElementById('result');
    const resultText = document.createElement('p');
    resultText.innerHTML = 'Result: ' + message + '<br>Player Choose: ' + playerChoice + ' Computer Choose: ' + computerChoice;
    resultText.style.cssText = "font-size: 20px; color: blue;padding-left: 10px;";
    result.appendChild(resultText);
}

function displayScore(){
    const result = document.getElementById('result');
    const score = document.createElement('p');
    score.textContent = 'Score: Player ' + playerScore + ' - ' + computerScore + ' Computer';
    score.style.cssText = "font-size: 25px; color: brown; padding-left: 10px;"
    result.appendChild(score);
}

function displayWinner(message){
    const result = document.getElementById('result');
    const winner = document.createElement('p');
    winner.textContent = message;
    result.appendChild(winner);
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    const result = document.getElementById('result');
    result.innerHTML = '';
    displayScore();
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
document.getElementById('reset').addEventListener('click', resetGame);