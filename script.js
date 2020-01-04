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
var resultContainer = document.getElementById("result");
// create questions inside the array
var questions = [
{ question:"Which is the correct syntax to use javascript file ?",
    choiceA:"Wrong",
    choiceB:"Correct",
    choiceC:"Worng",
    choiceD:"Worng",
    correct:"B"
},
{
    question:"How we can declare a (function) in Javascript ?",
    choiceA:"Correct",
    choiceB:"Wrong",
    choiceC:"Wrong",
    choiceD:"Wrong",
    correct:"A"
},
{
    question:"Which is correct way to use (If) in javascript ?",
    choiceA:"Wrong",
    choiceB:"Correct",
    choiceC:"Wrong",
    choiceD:"Wrong",
    correct:"B"
},
{
    question:"How to find out the max of x and y ?",
    choiceA:"Wrong",
    choiceB:"Wrong",
    choiceC:"Correct",
    choiceD:"Wrong",
    correct:"C"
},
{
    question:"How can we declare an object with Javascript ?",
    choiceA:"Worng",
    choiceB:"Worng",
    choiceC:"Correct",
    choiceD:"Worng",
    correct:"C"
},
{
    question:"How can we open new window with Javascript ?",
    choiceA:"Correct",
    choiceB:"Worng",
    choiceC:"Worng",
    choiceD:"Worng",
    correct:"A"
},
   

];


// create some variable
var lastQuestion = questions.length -1; //becuse last index is [6] and .length gave us number 7 ,so .length-1 =6
var runningQuestion = 0;
var count = 0;
var questionTime = 70; //70 seconds for all questions, each 10 s
var TIMER;
var score = 0;
var incorrect = 0;


// create a function to render a question
function renderQuestion(){
    var q = questions[runningQuestion];
    question.innerHTML ="<P>"+q.question+"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

};

//Start Bottn
start.addEventListener("click",startQuiz);

// start Quiz
function startQuiz(){

    // Hiding the START Btn
start.style.display = "none";

// calling our function
renderQuestion();
quiz.style.display ="block";
renderCounter();
TIMER = setInterval(renderCounter,1000); //100 ms == 1sec
};


// create a  function to render a Time

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = "Timer: "+count;
        count++;
        localStorage.setItem("counter",count);

    }
    else{
        count = 0;
        clearInterval(TIMER);
        scoreRender();
    }

};

// creatae a function to check the answer 
function checkAnswer(answer){
    if (answer == questions[runningQuestion].correct){
        score++;
        userScore.innerHTML ="Your Score: "+score;
        localStorage.setItem("score",score);

    }
    else{ incorrect++ }

    if(runningQuestion<lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
    else{
        clearInterval(TIMER);
        scoreRender();
    }
     
};

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.querySelectorAll(runningQuestion).style.backgroundColor = "#f00";
}

//create a function to show the score at the end
function scoreRender(){
    resultContainer.style.display="block";
    

}





