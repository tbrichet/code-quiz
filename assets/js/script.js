// Get Elements
    //Timer
    var timerEl = document.getElementById("countdown");

    //Start Button
    var startBtn = document.getElementById("start");

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


// Question and Answer Arrays

// Display initial screen

// Function to start quiz

startBtn.onclick = countdown;

// Right & Wrong Answer Function with Conditional Statements

// High Score Tracking

// High Score Display

// Function to End Quiz

// Return to Quiz

// Clear High Scores

// Event Listeners for Buttons

