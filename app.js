const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")

let userChoice
let computerChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id
    userSvg = `/assets/${e.target.id}.svg`
    userChoiceDisplay.src = userSvg
    userChoiceDisplay.style.display = 'block'
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "paper"
    }
    if (randomNumber === 3) {
        computerChoice = "scissor"
    }
    computerChoiceDisplay.src = `/assets/${computerChoice}.svg`
    computerChoiceDisplay.style.display = 'block'
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a DRAW!"
    }

    if (computerChoice === "rock" && userChoice === "paper") {
        result = "You Won!"
    }
    if (computerChoice === "scissor" && userChoice === "rock") {
        result = "You Won!"
    }
    if (computerChoice === "rock" && userChoice === "scissor") {
        result = "Bot Won!"
    }
    if (computerChoice === "scissor" && userChoice === "paper") {
        result = "Bot Won!"
    }
    if (computerChoice === "paper" && userChoice === "scissor") {
        result = "You Won!"
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "You Won!"
    }
    resultDisplay.innerHTML = result


}
