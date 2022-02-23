//variables

//set of questions array
var questions = [
  {
    title: "Do you consider yourself forgetful?",
    choices: [
      "I already forgot what I ate for dinner last night",
      "99% of the time I won’t forget",
      "I’m alright, not too bad",
    ],
    answer: "99% of the time I won’t forget",
  },
  {
    title: "What sized plant are you looking for?",
    choices: ["small", "i want them big", "somewhere in between would be cool"],
    answer: "curly brackets",
  },
  {
    title: "Colorful plant?",
    choices: ["nah, not for me", "yes, please"],
    answer: "all of the above",
  },
  {
    title: "Favorite bird",
    choices: ["Pelican", "Crane", "Peacock"],
    answer: "Crane",
  },
  {
    title: "Where would you like to put your plant?",
    choices: [
      "on my shelf",
      "hanging from my ceiling",
      "next to my couch or table",
    ],
    answer: "on my shelf",
  },
  {
    title: "Choose a beverage",
    choices: ["sparkling cider", "boba", "water", "coffee"],
    answer: "coffee",
  },
];
var score = 0;
var questionIndex = 0;

//link to DOM
var currentTime = document.querySelector(".timeleft");
var timer = document.querySelector("#timerstart");
// var questionWrapper = document.querySelector(".quiz");
var quizQuestions = document.querySelector(".questions");

//quiz timer
var timeLeft = 100;
var interval = 0;
var timePenalty = 10;
var createUlEl = document.createElement("ul");

//start quiz

var startquiz = function () {
  if (interval === 0) {
    interval = setInterval(function () {
      timeLeft--;
      currentTime.textContent = "Time: " + timeLeft;

      if (timeLeft <= 0) {
        clearInterval(interval);
        finishQuiz();
        currentTime.textContent = "Just go a little faster!";
      }
    }, 1000);
  }
  render(questionIndex);

  document.querySelector(".quiz h1").style.visibility = "hidden";
  document.querySelector(".quiz p").style.visibility = "hidden";
  document.querySelector(".quiz button").style.visibility = "hidden";
};

timer.addEventListener("click", startquiz);

//show choices

function render(questionIndex) {
  quizQuestions.innerHTML = "";
  createUlEl.innerHTML = "";
  var userQuest = questions[questionIndex].title;
  var userChoic = questions[questionIndex].choices;
  quizQuestions.textContent = userQuest;
  quizQuestions.setAttribute("class", "quiz");
  createUlEl.setAttribute("class", "quiz");
  userChoic.forEach(function (choice) {
    var liEl = document.createElement("li");
    liEl.textContent = choice;
    liEl.setAttribute("class", "no-bullets");
    quizQuestions.appendChild(liEl);
    liEl.addEventListener("click", verify);
  });
}

//verify answer

function verify(event) {
  var element = event.target;

  if (element.matches("li")) {
    var createDivEl = document.createElement("div");
    createDivEl.setAttribute("id", "create-div");

    if (element.textContent === questions[questionIndex].answer) {
      score++;
      createDivEl.textContent = "Great!";
    } else {
      timeLeft = timeLeft - timePenalty;
      createDivEl.textContent = "Great!";
    }
  }

  questionIndex++;
  if (questionIndex >= questions.length) {
    finishQuiz();
    createDivEl.textContent = "Your plant score is: " + score;
  } else {
    render(questionIndex);
  }

  quizQuestions.appendChild(createDivEl);
}

function finishQuiz() {
  quizQuestions.innerHTML = "";
  currentTime.innerHTML = "";

  var h1El = document.createElement("h1");
  h1El.setAttribute("class", "tex-3xl font-roboto");
  h1El.textContent = "We're excited to show you your match!";
  quizQuestions.appendChild(h1El);

  var pEl = document.createElement("p");
  pEl.setAttribute("class", "text-lg mt-5");
  quizQuestions.appendChild(pEl);

  //create label
  var labelEl = document.createElement("label");
  labelEl.setAttribute("id", "label-element");
  labelEl.textContent =
    " Enter your name below and we will show you which plant you matched with! ";

  quizQuestions.appendChild(labelEl);

  //create input
  var inputEl = document.createElement("input");
  inputEl.setAttribute("type", "text");
  inputEl.setAttribute("class", "text-xl mt-5");
  inputEl.textContent = "";

  quizQuestions.appendChild(inputEl);

  //create submit

  var submitEl = document.createElement("button");
  submitEl.setAttribute("type", "submit");
  submitEl.setAttribute(
    "class",
    "uppercase bg-green p-2 mt-10 text-gray hover:text-green-light rounded shadow text-2xl font-roboto"
  );
  submitEl.textContent = "Submit";

  quizQuestions.appendChild(submitEl);

  //event listener on submit button that caputures data

  submitEl.addEventListener("click", function () {
    var initials = inputEl.value;

    if (initials === null) {
      alert("Enter Your Initials!");
    } else {
      var totalScore = {
        initials: initials,
        score: timeLeft,
      };
      console.log(totalScore);
      var userScores = localStorage.getItem("userScores");
      if (userScores === null) {
        userScores = [];
      } else {
        userScores = JSON.parse(userScores);
      }
      userScores.push(totalScore);
      userScores.sort((a, b) => b.score - a.score);
      var updateScore = JSON.stringify(userScores);
      localStorage.setItem("userScores", updateScore);

      window.location.replace("./yourplant.html");
    }
  });
}
