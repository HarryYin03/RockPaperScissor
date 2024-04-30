function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    const cpuChoice = Math.floor(Math.random() * options.length);
    return options[cpuChoice];
}


function getHumanChoice(){
    let playerChoice = prompt('Enter your choice: rock, paper, or scissors');
    return playerChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    console.log('Player choose: ' + humanChoice);
    console.log('Computer choose: ' + computerChoice);
    if(humanChoice === computerChoice){
        console.log('It\'s a tie!');
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
        console.log ('You win! Rock beats scissors');
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        console.log('You win! Paper beats rock');
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
        console.log('You win! Scissors beats paper');
    }
    else{
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(){
    for(let i = 0; i < 6; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Final Score: ");
    console.log ("Player Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    if(humanScore > computerScore){
        console.log("Player wins!");
    }
    else if(humanScore < computerScore){
        console.log("You lose!");
    }
    else{
        console.log("It's a tie!");
    }
}

playGame();