// Test if JavaScript is linked correctly
// console.log("Hello World");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3); // Random number between 0 and 2
  return choices[randomIndex];
}

// Test the function
console.log(getComputerChoice()); // Should log "rock", "paper", or "scissors"
function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return choice;
}

// Test the function
console.log(getHumanChoice()); // Waits for user input

let humanScore = 0;
let computerScore = 0;

// Test
console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  const winningCombinations = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
    return;
  }

  if (winningCombinations[humanChoice] === computerChoice) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

// Test the function
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);

console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);

function playGame() {
  // Scores start at 0
  let humanScore = 0;
  let computerScore = 0;

  // Function to play a single round
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    const winningCombinations = {
      rock: "scissors",
      scissors: "paper",
      paper: "rock",
    };

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}`);
      return "tie";
    }

    if (winningCombinations[humanChoice] === computerChoice) {
      console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
      return "human";
    } else {
      console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
      return "computer";
    }
  }

  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    // Update scores based on result
    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }

    // Display current scores
    console.log(`Current Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
  }

  // Declare the overall winner
  if (humanScore > computerScore) {
    console.log(`You win the game! Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose the game! Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);
  } else {
    console.log(`It's a tie game! Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);
  }
}

// Start the game
playGame();

