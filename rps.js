const choiceGroups = [ ["Scissors", "Rock", "Paper"], ["Rock", "Paper", "Scissors"], ["Paper", "Scissors", "Rock"] ];
var choices = [];

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function setPlayerChoice(choice) {
    choices = choiceGroups[Number(choice) - 1];
    return 1;
}

function playRound(playerSelection) {
    let playerIndex = setPlayerChoice(playerSelection);
    let computerIndex = getComputerChoice();

    if (playerIndex < computerIndex) {
        console.log(`You Lose! ${choices[computerIndex]} beats ${choices[playerIndex]}`);
    } else if (playerIndex > computerIndex) {
        console.log(`You Win! ${choices[playerIndex]} beats ${choices[computerIndex]}`);
    } else {
        console.log(`Draw! You both picked ${choices[playerIndex]}. `+
            `Please try again.`);
    }
}