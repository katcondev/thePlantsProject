//variables 

//set of questions array
var questions =[
    {
        title: "Do you consider yourself forgetful? (about how often to water a house plant)",
        choices: ["I already forgot what I ate for dinner last night", "99% of the time I won’t forget", "I’m alright, not too bad"],
        answer: "99% of the time I won’t forget"
    },
    {
        title: "What sized plant are you looking for?",
        choices: ["small", "i want them big", "somewhere in between would be cool"],
        answer: "curly brackets"
    },
    {
        title: "Arrays in Javascript can be used to store _____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "Commonly used data types do not include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "booleans"
    },  
]
var score = 0;
var questionIndex = 0;

//link to DOM
var currentTime = document.querySelector(".timeleft");
var timer = document.querySelector("#timerstart");
var questionWrapper = document.querySelector(".quiz");
var quizQuestions = document.querySelector(".questions");

//quiz timer
var timeLeft = 75;
var interval = 0;
var timePenalty = 10; 
var createUlEl = document.createElement("ul");


//start quiz

var startquiz = function () {
    if (interval === 0) {
        interval = setInterval(function(){
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(interval);
                finishQuiz();
                currentTime.textContent = "You ran out of time!";
            }
        }, 1000)
    }
    render(questionIndex);

    document.querySelector('.quiz h1').style.visibility = 'hidden';
    document.querySelector('.quiz p').style.visibility = 'hidden';
    document.querySelector('.quiz button').style.visibility = 'hidden';

}

timer.addEventListener("click", startquiz)


//show choices 

function render (questionIndex) {
    quizQuestions.innerHTML = ""; 
    createUlEl.innerHTML = "";
    var userQuest = questions[questionIndex].title;
    var userChoic = questions[questionIndex].choices;
    quizQuestions.textContent = userQuest;
    quizQuestions.setAttribute("class", "quiz")
    createUlEl.setAttribute("class", "quiz")
    userChoic.forEach(function(choice){
        var liEl = document.createElement("li");
        liEl.textContent = choice;
        liEl.setAttribute("class", "no-bullets")
        quizQuestions.appendChild(liEl);
        liEl.addEventListener("click", verify);
    })
}


//verify answer

function verify(event) {
    var element = event.target;

    if (element.matches("li")) {
        var createDivEl = document.createElement("div");
        createDivEl.setAttribute("id", "create-div");

        if (element.textContent === questions[questionIndex].answer){
            score++;
            createDivEl.textContent = "Great!"
        }

        else {
            timeLeft = timeLeft -timePenalty;
            createDivEl.textContent = "Great!";
        }

    }

    questionIndex++;
    if (questionIndex >= questions.length) {
        finishQuiz();
        createDivEl.textContent = "Your score is: " + score + "/" + questions.length + "."; 
    }
    else {
        render(questionIndex);
    }

    quizQuestions.appendChild(createDivEl)
}

function finishQuiz() {
    quizQuestions.innerHTML = ""; 
    currentTime.innerHTML = ""; 

    
    var h1El = document.createElement("h1");
    h1El.setAttribute("id", "create-h1");
    h1El.textContent = "The quiz is over!"
    quizQuestions.appendChild(h1El);

    var pEl = document.createElement("p");
    pEl.setAttribute("id", "create-p")
    quizQuestions.appendChild(pEl);

    //adds time remaining to score

    if (timeLeft >= 0) {
        var timeScore = timeLeft;
        clearInterval(interval)
        pEl.textContent = "You scored a total of " + timeScore + ".";
        quizQuestions.appendChild(pEl);
    }
    //create label
    var labelEl = document.createElement("label");
    labelEl.setAttribute("id", "label-element");
    labelEl.textContent = "Please enter your initials: "

    quizQuestions.appendChild(labelEl);

    //create input
    var inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute ("id", "initials")
    inputEl.textContent = "";

    quizQuestions.appendChild(inputEl);


    //create submit

    var submitEl = document.createElement("button");
    submitEl.setAttribute("type", "submit");
    submitEl.setAttribute ("id", "timerstart")
    submitEl.textContent = "Submit";
    
    quizQuestions.appendChild(submitEl);


    //event listener on submit button that caputures data

    submitEl.addEventListener("click", function (){
        var initials = inputEl.value;

        if (initials === null) {
            alert("Enter Your Initials!");
        }
        else {
            var totalScore = {
                initials: initials,
                score: timeLeft
            }
            console.log(totalScore);
            var userScores = localStorage.getItem("userScores");
            if (userScores === null) {
                userScores = [];
            }
            else {
                userScores = JSON.parse(userScores);
            }
            userScores.push(totalScore);
            userScores.sort((a, b) => b.score - a.score);
            var updateScore = JSON.stringify(userScores);
            localStorage.setItem("userScores", updateScore);
            
            window.location.replace("./highscores.html");

            
        }
    });
}



