var startButton = document.querySelector(".start-button"); //start button
var saveButton = document.querySelector("#save-button");
var startAgain = document.querySelector("#start-again");
var timerCount = document.querySelector(".timer-count"); //timer number
var scoreBoard = document.querySelector("#scoreboard"); //scoreboard as a whole
var finalScore = document.querySelector("#score"); // user score
var pointsTally = 0; //keeps track of correct answers
var quizDisplay = document.querySelector("#quiz"); //quiz (empty div tag)
var questionDisplay = document.querySelector("#question");
var optionsDisplay = document.querySelector("#options");
var secondsLeft = 120;
var timerInterval;
var initialBox;
var qIndex = 0;
var quizQuestions = [
    {
        question: "What 90s boy band member bought Myspace in 2011?",
        options: ["Nick Lachey", "Shawn Stockman", "AJ McLean", "Justin Timberlake"],
        correct: "Justin Timberlake"
    },
    {
        question: "What's the heaviest organ in the human body?",
        options: ["Skin", "Liver", "Skeleton", "Brain"],
        correct: "Liver"
    },
    {
        question: "Which ocean is the Bermuda Triangle in?",
        options: ["Caribbean Ocean", "Pacific Ocean", "Indian Ocean", "Atlantic Ocean"],
        correct: "Atlantic Ocean"
    },
    {
        question: "On average, how many seeds are on the outside of a strawberry?",
        options: ["50", "100", "200", "500"],
        correct: "200"
    },
    {
        question: "What is the highest-grossing video game franchise to date?",
        options: ["Mario", "Call of Duty", "Pokemon", "Grand Theft Auto"],
        correct: "Pokemon"
    },
    {
        question: "Mycology is the scientific study of what?",
        options: ["Fungi", "Cancer Cells", "Trees", "Flowers"],
        correct: "Fungi"
    },
    {
        question: "The first vaccine was for which disease?",
        options: ["Polio", "Measles", "Chickenpox", "Smallpox"],
        correct: "Smallpox"
    },
    {
        question: "Which sea creature has three hearts?",
        options: ["Jellyfish", "Octopus", "Shark", "Stingray"],
        correct: "Octopus"
    },
    {
        question: "Where did the croissant originate?",
        options: ["Austria", "France", "Turkey", "Egypt"],
        correct: "Austria"
    },
    {
        question: "Which animal kills the most humans annually?",
        options: ["Mosquitos", "Sharks", "Alligators", "Bears"],
        correct: "Mosquitos"
    },
    {
        question: "Arachibutyrophobia is the fear of what sticking to the roof of your mouth?",
        options: ["Saltwater Taffy", "Bread", "Honey", "Peanut Butter"],
        correct: "Peanut Butter"
    },
    {
        question: "Agar-agar is a jelly obtained by boiling which of these?",
        options: ["Horse Hooves", "Seaweed", "Tapioca", "Collagen"],
        correct: "Seaweed"
    },
    {
        question: "In what country was The Lord of the Rings trilogy shot?",
        options: ["Greenland", "Ireland", "New Zealand", "Croatia"],
        correct: "New Zealand"
    },
    {
        question: "What is France's national dog breed?",
        options: ["Wheaten Terrier", "French Bulldog", "Bichon Frise", "Poodle"],
        correct: "Poodle"
    },
    {
        question: "What is the highest-grossing holiday movie of all time?",
        options: ["Home Alone", "Elf", "Die Hard", "It's a Wonderful Life"],
        correct: "Home Alone"
    },
]

//TO DO STILL:
// finish structuring the scoreboard in css and dynamically 
// need to create way to save data
//  a) need to create button dynamically to "save score"
//  b) need to display initals and score once button pressed
//  c) try again button
//  d) review local storage units and notes

startButton.addEventListener("click", startQuiz)

function startQuiz() {

    if (startButton.style.visibility = 'visible') {
        startButton.style.visibility = 'hidden';
    }

    quizDisplay.removeAttribute("class");

    timerInterval = setInterval(function () {
        secondsLeft--;
        timerCount.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            quizDisplay.setAttribute("class", "hide")
            endQuiz();
        }
    }, 1000);

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

optionsDisplay.addEventListener("click", userChoice)

function userChoice(event) {
    var userGuess = event.target;
    var curQuestion = quizQuestions[qIndex];
    var rightAnswer = curQuestion.correct;
    var lastAnswer = quizQuestions[14].correct;

    if (qIndex === 14 || secondsLeft === 0) {
        quizDisplay.setAttribute("class", "hide");

        if (userGuess = lastAnswer) {
            pointsTally++;
            clearInterval(timerInterval);
        }

        endQuiz();

    } else {

        if (userGuess.value !== rightAnswer) {
            console.log("Wrong!")
            secondsLeft -= 10;

            if (secondsLeft < 0) {
                secondsLeft = 0;
            }
        }

        if (userGuess.value === rightAnswer) {

            console.log("Correct!")
            pointsTally++;
            qIndex++;
            populateQuestion();

        }
    }
};

function endQuiz() {

    var scoreText = `End of quiz! Your score is ${pointsTally}/15, with ${secondsLeft} seconds remaining!`;
    var initialDiv = document.querySelector("#initials");
    initialBox = document.createElement("input");
    var timerBox = document.querySelector("#timer-container");

    timerBox.setAttribute("class", "hide");
    scoreBoard.removeAttribute("class");
    finalScore.textContent = scoreText.toString();
    initialDiv.appendChild(initialBox);

    initialBox.setAttribute("placeholder", "YOUR INITALS HERE!");
    initialBox.setAttribute("class", "save-initials");

    console.log("the end quiz function works!");
    console.log(pointsTally);

};

saveButton.addEventListener("click", function () {
    let initials = initialBox.value.trim();
    console.log("initials = ", initials);

    let highScores = JSON.parse(localStorage.getItem("user-score")) || [];
    console.log("high score = ", highScores);
    let newScore = {
        score: secondsLeft,
        tally: pointsTally,
        initials: initials
    }
    highScores.push(newScore);
    localStorage.setItem("user-score", JSON.stringify(highScores));
    window.location.href = "hs.html";
});



/* 

1. Create an event listener for the start button that
    a) begins the timer
    b) populates the first multiple choice question 
2. Create a timer that counts down at one second intervals, still need to create html
3. Make an array of objects that contain quiz questions and answers
    a) start with just 2 or three questions
    b) need to create a function for populating a question
    c) use event bubbling for a click on an answer 
        -if correct, next question
        -if incorrect, subtract 10 seconds from timer
    d) will need to access array of questions
4. create a data save value to auto save each answer
5. a scoreboard and textbox where the user can save their initials and score

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

