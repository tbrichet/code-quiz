// Get Elements
    //Timer
    var timerEl = document.getElementById("countdown");

    //Start 
    var intro = document.getElementById("intro");
    var startBtn = document.getElementById("start");

    //Quiz and Questions
    var quiz = document.getElementById("quiz");
    var question = document.getElementById("question");

    //Answer Choices

    var choiceA = document.getElementById("A");
    var choiceB = document.getElementById("B");
    var choiceC = document.getElementById("C");
    var choiceD = document.getElementById("D");

    //Scoring
    var initials = document.getElementById("initials");
    var scoreContainer = document.getElementById("scoreContainer");

// Timer Countdown Function
function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        }
        else if (timeLeft === 0) {
            timerEl.textContent = "Time: " + timeLeft;
            clearInterval(timeInterval);
            alert ("Time is up! Let's see how you did.")
            // add end quiz function
        }
    }, 1000);
};


// Questions Array

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        correct: "C"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parentheses",
        choiceD: "square brackets",
        correct: "C"
    },
    {
        question: "Arrays in JavaScript can be used to store ______",
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        correct: "D"
    },
    {
        question: "String values must be enclosed with _____ when being assigned to variables.",
        choiceA: "commas",
        choiceB: "curly brackets",
        choiceC: "quotes",
        choiceD: "parentheses",
        correct: "C"
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is:",
        choiceA: "JavaScript",
        choiceB: "terminal/bash",
        choiceC: "for loops",
        choiceD: "console.log",
        correct: "D"
    }
]

//Variables
var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var score = 0;

// Function to display quiz questions
function renderQuestion() {
    var q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
};

// Function to check answers and move onto next question
function checkAnswer (answer) {
    if(answer == questions[runningQuestion].correct) {
        score++;
        alert("correct");

    }
    else {
        alert("incorrect");

    }
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }
    else {
        //Stop Timer
        scoreRender();
    }
}

// Start Timer and Quiz

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    countdown();
    intro.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
}

// 