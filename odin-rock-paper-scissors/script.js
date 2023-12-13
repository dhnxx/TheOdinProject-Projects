let userPrompt = "Test";

// ROCK = 1;
// PAPER = 2;
// SCISSORS = 3;
const body = document.body;
const userScoretxt = document.querySelector(".user span");
const computerScoretxt = document.querySelector(".computer span");
const choices = document.querySelectorAll(".images img");
const btn = document.querySelector("button");
const title = document.querySelector(".user-choices p");
const userIMG = document.querySelector("#userIMG");
const computerIMG = document.querySelector("#computerIMG");
let tempChoice;
let userScore = 0,
  computerScore = 0;

function reset() {
  choices.forEach((choice) => {
    choice.classList.remove("choice");
    btn.classList.add("none");
  });
}
function addUserScore() {
  userScore += 1;
  userScoretxt.textContent = userScore;
}

function addComputerScore() {
  computerScore += 1;
  computerScoretxt.textContent = computerScore;
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  computerIMG.src = `images/${computerChoice}.png`;
  return computerChoice;
}

function endRound() {
  if (userScore >= 5) {
    prompt("User Wins!");
    userScore = 0;
    computerScore = 0;
    userScoretxt.textContent = userScore;
    computerScoretxt.textContent = computerScore;
    return;
  } else if (computerScore >= 5) {
    prompt("Computer Wins!");
    userScore = 0;
    computerScore = 0;
    userScoretxt.textContent = userScore;
    computerScoretxt.textContent = computerScore;
    return;
  }
}
function playRound(userPrompt, getComputerChoice) {
  title.textContent = "BATO BATO PICK";

  if (userPrompt == getComputerChoice) {
    reset();
    return (title.textContent = "DRAW!");
  }
  if (userPrompt == 1 && getComputerChoice == 2) {
    addComputerScore();
    endRound();
    reset();
    return "Computer Wins!";
  } else if (userPrompt == 1 && getComputerChoice == 3) {
    addUserScore();
    endRound();
    reset();
    return "User Wins!";
  }

  if (userPrompt == 2 && getComputerChoice == 3) {
    addComputerScore();
    endRound();
    reset();
    return "Computer Wins!";
  } else if (userPrompt == 2 && getComputerChoice == 1) {
    addUserScore();
    endRound();
    reset();
    return "User Wins!";
  }

  if (userPrompt == 3 && getComputerChoice == 1) {
    addComputerScore();

    endRound();
    reset();
    return "Computer Wins!";
  } else if (userPrompt == 3 && getComputerChoice == 2) {
    addUserScore();
    endRound();
    reset();
    return "User Wins!";
  }
}

choices.forEach((choice, index) => {
  choice.addEventListener(
    "click",
    (tempChoice = (e) => {
      choices.forEach(
        (userChoice1 = (otherChoice) => {
          if (otherChoice !== choice) {
            otherChoice.classList.remove("choice");
          }
        })
      );
      btn.classList.remove("none");
      choice.classList.add("choice");
      computerIMG.src = `images/4.png`;
      userIMG.src = `images/${(tempChoice = index + 1)}.png`;
      return (tempChoice = index + 1);
    })
  );
});

btn.addEventListener("click", (e) => {
  playRound(tempChoice, getComputerChoice());
});
