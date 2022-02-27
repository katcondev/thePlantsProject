var highScore = document.querySelector("#high-score");
var clearBtn = document.querySelector("#clear-button");
var backBtn = document.querySelector("#back-button");

//add event listener to clear btn

clearBtn.addEventListener("click", function (){
    localStorage.clear();
    location.reload();
});

//retrieve the local storage

var userScores = localStorage.getItem("userScores");

userScores = JSON.parse(userScores);

if (userScores !== null) {
    for (var i = 0; i < userScores.length; i++) {
        var highScoreEl = document.createElement("li");
        highScoreEl.textContent = userScores[i].initials + " " + userScores[i].score;
        highScoreEl.setAttribute("class", "li")
        highScore.appendChild(highScoreEl);
    }
}

//return to quiz home

backBtn.addEventListener("click", function (){
    window.location.replace("./index.html");
});