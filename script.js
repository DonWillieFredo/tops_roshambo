// Test if JavaScript is linked correctly
// console.log("Hello World");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3); // Random number between 0 and 2
  return choices[randomIndex];
}

// Test the function
console.log(getComputerChoice()); // Should log "rock", "paper", or "scissors"

