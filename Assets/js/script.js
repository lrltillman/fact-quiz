var startButton = document.querySelector(".start-button"); //start button
var timerCount = document.querySelector(".timer-count"); //timer number
var scoreBoard = document.querySelector("#scoreboard"); //scoreboard as a whole
var finalScore = document.querySelector(".score"); // user score
var quizDisplay = document.querySelector("#quiz"); //quiz (empty div tag)
var questionDisplay = document.querySelector("#question");
var optionsDisplay = document.querySelector("#options");
var secondsLeft = 120;
var timerInterval;
var qIndex = 0;
var quizQuestions = [
    {
        // id: 0,
        question: "What color is the sky?",
        options: ["red", "green", "yellow", "blue"],
        correct: "blue"
    },
    {
        id: 1,
        question: "What is my dog's name?",
        options: ["Martin", "Biscuit", "Brenda", "Nigel"],
        correct: "Nigel"
    },
    {
        id: 2,
        question: "What state is Minneapolis in?",
        wrong: "Ohio",
        wrong: "New York",
        wrong: "Texas",
        correct: "Minnesota"
    }
]



startButton.addEventListener("click", startQuiz)
//need to populate function that brings a question 

function startQuiz() {
    if (startButton.style.visibility = 'visible') {
        startButton.style.visibility = 'hidden';
    }

    quizDisplay.removeAttribute("class");

    timerInterval = setInterval(function () {
        secondsLeft--;
        timerCount.textContent = secondsLeft;

        //for loop

        if (secondsLeft === 0) {
            clearInterval(timerInterval);

            //scoreBoard
        }
    }, 1000)

    populateQuestion();

};

function populateQuestion() {
    var curQuestion = quizQuestions[qIndex]
    questionDisplay.textContent = curQuestion.question;

    optionsDisplay.innerHTML = "";

    for (let i = 0; i < curQuestion.options.length; i++) {
        const option = curQuestion.options[i];

        var btnEl = document.createElement("button");
        btnEl.setAttribute("class", "option");
        btnEl.setAttribute("value", option);
        btnEl.textContent = i + 1 + ". " + option;
        optionsDisplay.appendChild(btnEl);



    }

}

// event listener for option buttons 



function userGuess(event) {
    var buttonEl = event.target;

    if (!buttonEl.matches(".option")) {
        return
    }

    if (buttonEl.value !== quizQuestions[qIndex].correct) {
        //deduct time secondsLeft -5
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        // update time display
    };
    qIndex++;


    //if statement to compare  quizquestions length = qindex || timer is at 0
    // scoreboard function

    // else
    //popukate question
}


function scoreBoard() {
    scoreBoard.removeAttribute("class");
}







// function changeDisplay() { 
// }

// for loop to process an array


// if (userAnswer === incorrect)
//    secondsLeft - 5


/* 

1. Create an event listener for the start button that
    a) begins the timer
    b) populates the first multiple choice question 
2. Create a timer that counts down at one second intervals, still need to create html
3. Make an array of objects that contain quiz questions and answers
    a) start with just 2 or three questions
    b) need to create a function for populating a question
    c) use event bubbling for a click on an answer 
        -if correct, store data
        -if incorrect, store data and subtract 5 seconds from timer
    d) will need to access array of questions
4. create a data save value to auto save each answer
5. a scoreboard and textbox where the user can save their initials and score

use hidden/visible elements to control what is on the page

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score   */
























