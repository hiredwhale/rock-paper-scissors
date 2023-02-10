const choiceGroups = [ ["Rock", "Paper", "Scissors"], ["Paper", "Scissors", "Rock"], ["Scissors", "Rock", "Paper"] ];
var choices = [];

function getComputerChoice() {
    choices = choiceGroups[Math.floor(Math.random() * 3)];
    return choices[1];
}

function getPlayerChoice() {
    return prompt("Rock, Paper, or Scissors?");
}

function playRound(playerSelection, computerSelection) {
    let computerIndex = 1;
    let playerIndex = choices.indexOf(
        playerSelection.charAt(0).toUpperCase()+
        playerSelection.substring(1).toLowerCase()
    );

    if (playerIndex < 0) {
        console.log(`${playerSelection} is not a valid option! `+
            `Please try again.`);

        return playRound(getPlayerChoice(), getComputerChoice());
    } else if (playerIndex < computerIndex) {
        console.log(`You Lose! ${computerSelection} beats ${choices[playerIndex]}`);
        return - 1;
    } else if (playerIndex > computerIndex) {
        console.log(`You Win! ${choices[playerIndex]} beats ${computerSelection}`);
        return 1;
    } else {
        console.log(`Draw! You both picked ${computerSelection} `+
            `Please try again.`);

        return playRound(getPlayerChoice(), getComputerChoice());
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());

        if (result === -1) {
            computerWins++;
        } else {
            playerWins++;
        }
    }

    console.log(`Your record was ${playerWins}-${computerWins}`)
}

game();