const computerChoiceDisplay=document.getElementById("computer-choice")
const userChoiceDisplay=document.getElementById("user-choice")
const resultDisplay=document.getElementById("result")
const possibleChoices=document.querySelectorAll("button")

let userChoice
let computerChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click",(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3)+1
    console.log(randomNumber)

    if(randomNumber===1){
        computerChoice="rock"
    }
    if(randomNumber===2){
        computerChoice="paper"
    }
    if(randomNumber===3){
        computerChoice="scissor"
    }
    computerChoiceDisplay.innerHTML=computerChoice

}

function getResult(){
    if(computerChoice===userChoice){
        result= "it is a draw"
    }

    if(computerChoice=== "rock" && userChoice==="paper"){
        result="you won!!!!"
    }
    if(computerChoice=== "scissor" && userChoice==="rock"){
        result="you won!!!!"
    }
    if(computerChoice=== "rock" && userChoice==="scissor"){
        result="you lost!!!!"
    }
    if(computerChoice=== "scissor" && userChoice==="paper"){
        result="you lost!!!!"
    }
    if(computerChoice=== "paper" && userChoice==="scissor"){
        result="you won!!!!"
    }
    if(computerChoice=== "paper" && userChoice==="rock"){
        result="you won!!!!"
    }
    resultDisplay.innerHTML=result

    
}
