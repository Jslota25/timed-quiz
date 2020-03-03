var score = 0;
var highScores = document.getElementById("high-scores");
var timeClock = document.getElementById("time-clock");
var quizContainer = document.getElementById("quiz-container");
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz);


var questions = [
    {
        question: 'Do you know what I want, what I really, really want?',
        potential_answers: [
            {
                id: 'a',
                answer: 'Ha'
            },
            {
                id: 'b',
                answer: 'Ha'
            },
            {
                id: 'c',
                answer: 'Ha'
            },
            {
                id: 'd',
                answer: "Zigazig ah"
            }
        ],
        correct_answer: 'd'
    },
    {
        question: 'If all the stars in the observable universe were evenly distributed among all humans alive today, how many stars would each human get?',
        potential_answers: [
            {
                id: 'a',
                answer: '10 billion'
            },
            {
                id: 'b',
                answer: '500 billion'
            },
            {
                id: 'c',
                answer: '1 trillion'
            },
            {
                id: 'd',
                answer: '44 trillion'
            }
        ],
        correct_answer: 'd'
    }
]