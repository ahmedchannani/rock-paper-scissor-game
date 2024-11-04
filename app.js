let randomArr = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let index = Math.round(Math.random() * (2 - 0) + 0);
  return randomArr[index];
}
// getComputerChoice();

let rockPaperSissiors = document.getElementsByClassName("icon");
// console.log(rockPaperSissiors)
let innerMain = document.getElementById("icons-section");
// console.log(innerMain);
let newSection = document.getElementById("new-section");
newSection.classList.add("visible");
let housePickPlace = document.getElementById("house-pick-place");
let urPickPlace = document.getElementById("ur-pick-place");
let resultSection = document.querySelector("#result-section");
let resultElement = document.createElement("h1");
let playAgainBtn = document.createElement("button");
playAgainBtn.innerText = "PLAY AGAIN";
let score = document.querySelector("#score");
let scoredPoints = 0;
let outCome = "";
score.innerText = scoredPoints;

for (let i = 0; i < rockPaperSissiors.length; i++) {
  let element = rockPaperSissiors[i];
  element.addEventListener("click", () => {
    let humanChoice = element.classList[1];
    let computerChoice = getComputerChoice();
    let getHousePick = document.querySelector(".icon--" + computerChoice);
    // console.log(getHousePick);

    let housePick = getHousePick.outerHTML;
    // console.log(getHousePick);

    let strElement = element.outerHTML;
    // console.log(strElement);

    urPickPlace.innerHTML = strElement;
    urPickPlace.classList.remove("pick");
    housePickPlace.innerHTML = housePick;
    housePickPlace.classList.remove("pick");
    newSection.classList.remove("visible");
    innerMain.classList.add("visible");
    resultElement.innerText = outCome;
    resultSection.append(resultElement);
    resultSection.append(playAgainBtn);
    rulesBtn.style.marginTop = "50px";
    compare(computerChoice, humanChoice)
  });
}
playAgainBtn.addEventListener("click", () => {
  newSection.classList.add("visible");
  innerMain.classList.remove("visible");
  resultSection.removeChild(resultElement);
  resultSection.removeChild(playAgainBtn);
  rulesBtn.style.marginTop = "10px";
});

function compare(computerGuess, humanChoice) {
  console.log(computerGuess);
  console.log(humanChoice);
  if (humanChoice.includes(computerGuess)) {
    outCome = "DRAW";
    scoredPoints = scoredPoints;
  }
  if (humanChoice.includes("paper") && computerGuess == "scissors") {
    outCome = "YOU LOSE";
    scoredPoints--;
  }
  if (humanChoice.includes("paper") && computerGuess == "rock") {
    outCome = "YOU WIN";
    scoredPoints++;
  }

  if (humanChoice.includes("scissors") && computerGuess == "paper") {
    outCome = "YOU WIN";
    scoredPoints++;
  }

  if (humanChoice.includes("scissors") && computerGuess == "rock") {
    outCome = "YOU LOSE";
    scoredPoints--;
  }

  if (humanChoice.includes("rock") && computerGuess == "paper") {
    outCome = "YOU LOSE";
    scoredPoints--;
  }

  if (humanChoice.includes("rock") && computerGuess == "scissors") {
    outCome = "YOU WIN";
    scoredPoints++;
  }
  score.innerText = scoredPoints;
  resultElement.innerText = outCome;
}
let rulesBtn = document.getElementById("rules-btn");
let rulesCont = document.querySelector(".rules");
let xBtn = rulesCont.querySelector("button");

rulesBtn.addEventListener("click", () => {
  rulesCont.classList.add("rules-toggle");
});
xBtn.addEventListener("click", () => {
  rulesCont.classList.remove("rules-toggle");
});
