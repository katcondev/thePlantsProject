var plantScore = document.querySelector("#plant-score");


//retrieve the local storage

var userScores = localStorage.getItem("userScores");

userScores = JSON.parse(userScores);

if (userScores !== null) {
    for (var i = 0; i < userScores.length; i++) {
        var plantScoreEl = document.createElement("li");
        plantScoreEl.textContent = userScores[i].initials + " " + userScores[i].score;
        plantScoreEl.setAttribute("class", "li")
        plantScore.appendChild(plantScoreEl);
    }
}
