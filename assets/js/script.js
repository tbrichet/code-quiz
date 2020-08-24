// Get Elements by ID

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

    //Scoring Pages
    var initials = document.getElementById("initials");
    var scoreboard = document.getElementById("scoreboard");
    var back = document.getElementById("back");
    var view = document.getElementById("view");

// Timer Countdown Function

var timeLeft = 60;

function countdown() {

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        }
        else if (timeLeft === 0) {
            timerEl.textContent = "Time: " + timeLeft;
            clearInterval(timeInterval);
            alert ("Time is up! Let's see how you did.")
            scoreRender();
        }
    }, 1000);
};

// Questions and Answers Array
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "1. strings",
        choiceB: "2. booleans",
        choiceC: "3. alerts",
        choiceD: "4. numbers",
        correct: "C"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        choiceA: "1. quotes",
        choiceB: "2. curly brackets",
        choiceC: "3. parentheses",
        choiceD: "4. square brackets",
        correct: "C"
    },
    {
        question: "Arrays in JavaScript can be used to store ______",
        choiceA: "1. numbers and strings",
        choiceB: "2. other arrays",
        choiceC: "3. booleans",
        choiceD: "4. all of the above",
        correct: "D"
    },
    {
        question: "String values must be enclosed with _____ when being assigned to variables.",
        choiceA: "1. commas",
        choiceB: "2. curly brackets",
        choiceC: "3. quotes",
        choiceD: "4. parentheses",
        correct: "C"
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is:",
        choiceA: "1. JavaScript",
        choiceB: "2. terminal/bash",
        choiceC: "3. for loops",
        choiceD: "4. console.log",
        correct: "D"
    }
]

//Key Variables
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

// Function to Check Answers and Move onto Next Question
function checkAnswer (answer) {
    if(answer == questions[runningQuestion].correct) {
        score++;
        alert("Correct! Way to Go!");

    }
    else {
        alert("Incorrect! Uh oh!");
        timeLeft = timeLeft - 10;

    }
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }
    else {
        scoreRender();
        timeLeft = 99999999;
        timerEl.style.display = "none";
    }
};

// Event Listener and Function to Start Timer and Quiz

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    countdown();
    intro.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
};

// Function to Display Score/ End of Quiz
function scoreRender() {
    quiz.style.display = "none";
    initials.style.display = "block";
    var scorePercent = Math.round(100 * score/questions.length);
    document.getElementById("yourscore").innerHTML = "Your final score is " + scorePercent + "%.";
    localStorage.setItem("scorestring", JSON.stringify(scorePercent));
};

// Local Storage for Initials Input
var initialsInput = document.getElementById("inpName");
var initialsLi = document.querySelector("#display-score");
var submit = document.getElementById("submit");

// Submitting and Storing High Scores

submit.addEventListener("click", function (event) {
    localStorage.setItem("initialsInput", initialsInput.value);
    highScores();
});

//View high scores header button

view.addEventListener("click", highScores);


// Display Scoreboard Page

function highScores() {
    intro.style.display = "none";
    quiz.style.display = "none";
    initials.style.display = "none";
    scoreboard.style.display = "block";

    //LocalStorage Initials
    for (let i = 0; i < localStorage.length; i++) {
    var userNameDisplay = localStorage.getItem("initialsInput");
    var scorePercent = localStorage.getItem("scorestring");
    scorePercent = JSON.parse(scorePercent);
    initialsLi.textContent = userNameDisplay + " - " + scorePercent;
    console.log(userNameDisplay);
    }
};


    // Retrieve Local Storage
    //var savedScores = localStorage.getItem("scorestring");

    //if (!savedScores) {
        //return false;
    //}

    //savedScores = JSON.parse(scorestring);

    //for (var i = 0; i < savedScores.length; i++) {
        //var li = document.createElement('li');
        //li.textContent = savedScores;
       // document.getElementById("display-score").appendChild(li);
        //return li;
    //}
//};


//Return Button on Scoreboard Screen

back.addEventListener("click", goBack);

function goBack() {
    location.reload();
    return false;
}

// Clear High Scores Button
//var clear = document.getElementById("clear");

//clear.addEventListener("click", function (event) {
    //localStorage.clear();
//});
