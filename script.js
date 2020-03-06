var highScores = document.getElementById("high-scores");
var score = 0;

var timeClock = document.getElementById("time-clock");
var quizTime = 60;

var quizContainer = document.getElementById("quiz-container");
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz);

var questionNum = 0;
var answerNum = 0;

var questions = [
    {
        question: "Do you know what I want? What I really, really want?",
        answers: ["Ha", "Ha", "Ha", "Zigazig ah"],
        correctAnswer: "Zigazig ah"
    },
  
    {
        question: "Is this the Krusty Krab?",
        answers: ["Yes", "No", "Maybe", "No, this is Patrick"],
        correctAnswer: "No, this is Patrick"
        },

    {
        question: "What is Leonardo DiCaprio's best movie?",
        answers: ["Titanic", "The Great Gatsby", "The Wolf of Wall Street", "The Revenant"],
        correctAnswer: "The Wolf of Wall Street"
    },

    {
        question: "What planet does Yoda live on?",
        answers: ["Tatooine", "Dagobah", "Hoth", "Endor"],
        correctAnswer: "Dagobah"
    },

    {
        question: "Which band did Jerry Garcia play in?",
        answers: ["Phish", "Wiespread Panic", "The Grateful Dead", "Blues Traveler"],
        correctAnswer: "The Grateful Dead"
    }
];


function startQuiz() {
    startTimer();
    renderQuestion();
};

function renderQuestion() {
    quizContainer.innerHTML = questions[questionNum].question;

    for(var i = 0; i < questions[questionNum].answers.length; i++) {
        var display = document.createElement("h1");
        var button = document.createElement("button");
        button.innerHTML = questions[questionNum].answers[i];
        button.setAttribute("class", "btn");
        quizContainer.appendChild(display);
        display.appendChild(button);
        button.addEventListener("click", checkAnswers);
    }
}

function checkAnswers(event) {
    var userAnswer = event.target.textContent;
    var correctAnswer = questions[questionNum].correctAnswer;

    if(userAnswer === correctAnswer) {
        score ++;
    } else {
        quizTime -= 10;
    }

    questionNum ++;
    quizContainer.innerHTML = "";

    if (questionNum < 5) {
        renderQuestion();
    } else {
          endQuiz();
    }
}

function startTimer() {
    var timerInterval = setInterval(function () {
        quizTime--;
        timeClock.textContent = quizTime;

        if(quizTime === 0) {
            clearInterval(timerInterval);
            quizContainer.innerHTML = "You lost";
        }
    }, 1000);       
}

function endQuiz() {
    quizContainer.innerHTML = "You scored " + score + " points!";
    clearInterval(timerInterval);
    localStorage.setItem("high-score", score);
}
