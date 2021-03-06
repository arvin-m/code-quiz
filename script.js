// select all HTML elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var userScore = document.getElementById("score");
var resultContainer = document.getElementById("resultBox");
var result = document.getElementById("result");
var resultIncorect = document.getElementById("resultIncorect");
var resultAnswer = document.getElementById("corectAnswer");
var userName = document.getElementById("userName");
var submitBtn = document.getElementById("submit");
var check = document.getElementById("check");
// create questions inside the array
var questions = [
    {
        question: "Which is the correct syntax to use javascript file ?",
        choiceA: "<script src=xxx.js>",
        choiceB: "<script href=xxx.js>",
        choiceC: "<script path=xxx.js>",
        choiceD: "<script link=xxx.js>",
        correct: "A"
    },
    {
        question: "How we can declare a (function) in Javascript ?",
        choiceA: "function myFunction(...)",
        choiceB: "myFunction function(...)",
        choiceC: "declare function myFunction(...)",
        choiceD: "var function myFunction(...)",
        correct: "A"
    },
    {
        question: "Which is correct way to use (If) in javascript ?",
        choiceA: "(if ...){...}",
        choiceB: "if(...){...}",
        choiceC: "call if (...) {...}",
        choiceD: "Wif{...}(...)",
        correct: "B"
    },
    {
        question: "How to find out the max of x and y ?",
        choiceA: "ceil(x, y)",
        choiceB: "max(x, y)",
        choiceC: "Math.max(x, y)",
        choiceD: "top(x, y)",
        correct: "C"
    },
    {
        question: "How can we declare an object with Javascript ?",
        choiceA: "var variable = new Object()",
        choiceB: "var variable = Object()",
        choiceC: "var variable = {}",
        choiceD: "var variable = new myFunction()",
        correct: "C"
    },
    {
        question: "How can we open new window with Javascript ?",
        choiceA: "window.open(...)",
        choiceB: "window.new(...)",
        choiceC: "open(new window())",
        choiceD: "window.open_new(...)",
        correct: "A"
    },


];
// create some variable
var lastQuestion = questions.length - 1; //becuse last index is [6] and .length gave us number 7 ,so .length-1 =6
var runningQuestion = 0;
var count = 60; //60 seconds for all questions, each 10 s
var questionTime = 0;
var TIMER;
var score = 0;
var incorrect = 0;
// create a function to render a question
function renderQuestion() {
    var q = questions[runningQuestion];
    question.textContent = q.question;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;

};
//Start Bottn
start.addEventListener("click", startQuiz);
// start Quiz
function startQuiz() {

    // Hiding the START Btn
    start.style.display = "none";

    // calling our function
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); //100 ms == 1sec
};

// create a  function to render a Time

function renderCounter() {
    if (count >= questionTime) {
        counter.textContent = "Timer: " + count;
        count--;
        // localStorage.setItem("counter",count);

        userScore.textContent = "Your Score: " + score;
        // localStorage.setItem("score",score);

    }
    else {
        count = 0;
        clearInterval(TIMER);
        scoreRender();

    }
    // if we want to have time for each question

    // if(runningQuestion<lastQuestion){
    //     runningQuestion++;
    //     renderQuestion();
    // }
    // else{
    //     clearInterval(TIMER);
    //     scoreRender();
    // }

};

function rightOrWrong(bool) {
    var text = bool ? "Correct!" : "Wrong!";
    check.textContent = text;
    setTimeout(function () {
        check.textContent = "";
    }, 2000)
};

// creatae a function to check the answer 
function checkAnswer(answer) {

    if (answer == questions[runningQuestion].correct) {
        score++;
        rightOrWrong(true);
        userScore.innerHTML = "Your Score: " + score;
        // localStorage.setItem("score",score);
    }
    else {
        incorrect++;
        rightOrWrong(false);
    }
    // if we want to reset the time after each question we can add here count = 0 ; 

    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }
    else {
        // end the quiz
        clearInterval(TIMER);
        scoreRender();
    }

};

//create a function to show the score at the end
function scoreRender() {
    quiz.style.display = "none";
    resultContainer.style.display = "block";
    // calculate the user answer percent
    var scorePercent = Math.round(100 * score / questions.length);
    result.innerHTML = "<P>" + "Your score percent : " + scorePercent + "% " + "</p>";
    resultIncorect.innerHTML = "<P>" + "Your Incorect Answer : " + incorrect + "</p>";
    resultAnswer.innerHTML = "<P>" + "Your Corect Answer : " + score + "</p>";
    // save the score percent in local storage
    localStorage.setItem("scoreP", scorePercent);

};

submitBtn.addEventListener("click", submit);
function submit() {
    console.log('inside submit function')
    var name = userName.value;
    console.log("usename :" + name);
    localStorage.setItem("userName", name);

};