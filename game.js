const userScoreElement =
document.getElementById("userScore");
const computerScoreElement =
document.getElementById("computerScore");
const startButton =
document.getElementById("start");
const resetButton =
document.getElementById("reset");
const headChoice =
document.getElementById("head");
const tailChoice =
document.getElementById("tail");


console.log(userScoreElement,computerScoreElement,startButton,resetButton,headChoice,tailChoice);

//initializing score
let userScore =0;
let computerScore =0;
let userChoice =null;

function chooseHead() {
    userChoice ="head";
    headChoice.style.backgroundColor= "lightblue";
    tailChoice.style.backgroundColor ="";
    console.log("user selected:head");
}
function chooseTail() {
    userChoice ="tail";
    tailChoice.style.backgroundColor = "lightblue";
    headChoice.style.backgroundColor ="";
    console.log("user selected:tail");
}

function startGame(){
    if (!userChoice) {
        alert("please select head or tail first");
        return;
        
    }

    const tossResult = Math.random() < 0.5 ? "head" : "tail";
    console.log("Toss Result:",tossResult);

    if (tossResult ==="head") {
        headChoice.style.backgroundColor ="lightgreen";
        tailChoice.style.backgroundColor ="";
    }
    else{
        tailChoice.style.backgroundColor =" lightgreen";
        headChoice.style.backgroundColor ="";
    }
    if (userChoice === tossResult){ 
        userScore++;
        userScoreElement.textContent =userScore; 
        console.log("user win!");
    }
    else{
         computerScore++;
         computerScoreElement.textContent =computerScore;
         console.log ("computer win!");
    }
     userChoice =null;}

    /*const winner = Math.random()<0.5 ? "user" : "computer";
    if (winner ==="user") {
        userScore++;                                     //
        userScoreElement.textContent= userScore;
    }
    else{
        computerScore++;
        computerScoreElement.textContent= computerScore;
    }*/

//function for reset
function resetGame(){
    userScore =0;
    computerScore =0;
    userChoice =null;

    userScoreElement.textContent= userScore;
    computerScoreElement.textContent=computerScore;
    headChoice.style.backgroundColor="";
    tailChoice.style.backgroundColor ="";
    console.log ("game has been reset.");
}
headChoice.addEventListener("click",chooseHead);
tailChoice.addEventListener("click",chooseTail);
 startButton.addEventListener("click",startGame);
 resetButton.addEventListener("click",resetGame);