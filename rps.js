console.log("Welcome to the Rock, Paper, Scissors Game!");

function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choice.length) = 1;

    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2) {
        return "paper";
    } else {
        return "scissors";
      }
}

console.log(getComputerChoice);