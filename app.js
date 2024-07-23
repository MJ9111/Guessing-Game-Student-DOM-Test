document.addEventListener('DOMContentLoaded', function () {
    // Variable Declarations
 
const guessInput = document.getElementById('guess-input');
const resultElement = document.getElementById('result');
const attemptsElement = document.getElementById('attempts');
const gameBoard = document.getElementById('game-board');
const instructionBoard = document.getElementById('instruction-board');
const startButton = document.getElementById('start-button');
const submitGuessButton = document.getElementById(`submit-guess`);
const showExtraHintButton = document.getElementById('extra-hint-button');



    


const hintElements = [
document.getElementById('hint-1'),
document.getElementById('hint-2'),
document.getElementById('hint-3'),
];

const extraHintElement = document.getElementById('extra-hint');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// (data)

 const famousPeople = [

 {
 name: "Michael Jackson",
 hints: ["king of pop","Thriller","Moonwalk"]
  },
 {
 name: "Michael Jordan",
 hints: ["Air jordan","Chicago Bulls","Basketball"]
  },
 {
 name: "Cristiano Ronaldo",
 hints: ["Portugal","Football","Real Madrid"]
  },
 {
 name: "Michael Schumacher",
 hints: ["Ferrari","Formula1","7-Time World Champion"]
  },
 {
 name: "Napoleon Bonaparte",
 hints: ["France","Waterloo","Emperor"]
  },

];

// Variable Declarations

 let currentPerson;
 let score = 0 ;
 let timer;
 let timeLeft = 60;
let attempts =0;
//  Event Listeners

 startButton.addEventListener('click' , startGame);
 submitGuessButton.addEventListener(`click` , submitGuess);
showExtraHintButton.addEventListener(`click` , showExtraHint);

//start game

 function startGame() {
 instructionBoard.style.display = 'none';
 gameBoard.style.display = 'block';
 score = 0;
 timeLeft = 60;
 updateScore();
 startTimer();
 nextPerson();

 }

function startTimer()  {
timer = setInterval(() => {
timeLeft--;
timerElement.innerText = `Time Left: ${timeLeft}`;
if (timeLeft <= 0) {
clearInterval(timer);
endGame();  
  }
},1000);
 }

 function updateScore(){
scoreElement.innerText = `score: ${score}`;
 }

 function nextPerson() {
     currentPerson = famousPeople[Math.floor(Math.random() * famousPeople.length)];
     hintElements.forEach((hintElements, index) => {
        hintElements.innerText = `Hint ${index + 1}: ${currentPerson.hints[index]}`;
     });     

     extraHintElement.style.display  = 'none';
     showExtraHintButton.disabled = false;
     guessInput.value = '';
     resultElement.innerText = '';

 }


//Function to show extra hint
function showExtraHint() {
    extraHintElement.style.display = `block`;
    showExtraHintButton.disabled = true;
}



//Function to submit guess

function submitGuess() {
    attempts++;
    attemptsElement.innerText = `Attempts: ${attempts}/10`;
    const guess = guessInput.value.trim().toLowerCase();
    if (guess === currentPerson.name.toLowerCase()) {
        score++;
        resultElement.innerText = `Correct`;
        updateScore();
        nextPerson();
        attempts = 0; // Reset attempts when correct
        attemptsElement.innerText = `Attempts: 0/10`;
    } else {
        resultElement.innerText = `Incorrect, try again`;
        if (attempts >= 10) {
            endGame();
        }
    }
}




//Function to end the game

function endGame(){
    alert(`Game Over! Your final score is ${score}`);
    gameBoard.style.display = `none`;
    instructionBoard.style.display = `block`;
};




});
  