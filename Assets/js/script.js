var startButton = document.querySelector(".start-button"); //start button
var timerCount = document.querySelector(".timer-count"); //timer number
var scoreBoard = document.querySelector(".scoreboard"); //scoreboard as a whole
var finalScore = document.querySelector(".score"); // user score
var quizDisplay = document.querySelector(".quiz"); //quiz (empty div tag)
var secondsLeft = 120;
var timerInterval;
var quizQuestions = [
    {
        id: 0,
        question: "What color is the sky?",
        wrong: "red",
        wrong: "green",
        wrong: "yellow",
        correct: "blue"
    },
    {
        id: 1,
        question: "What is my dog's name?",
        wrong: "Martin",
        wrong: "Biscuit",
        wrong: "Brenda",
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

    timerInterval = setInterval(function () {
        secondsLeft--;
        timerCount.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);

        }
    }, 1000)
}

function scoreBoard() {
    scoreBoard.style.visibility = 'visible'
}







// function changeDisplay() { 
// }



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
5. a scoreboard and textbox where the user can save their initials 

notes:

use hidden/visible elements to control what is on the page

create div and class/ids as needed on html, will need textbox for the end. can do by using createElement.

if correct, quizScore + 1 */