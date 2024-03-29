let highScores = JSON.parse(localStorage.getItem("user-score")) || [];
var clearBtn = document.querySelector("#clear-scores");

highScores.sort(function (m, n) {
    return n.score - m.score
});

let olEl = document.querySelector("#score-list");

for (let i = 0; i < highScores.length; i++) {
    let listEl = document.createElement("li");
    listEl.textContent = "Name: " + highScores[i].name + " - Points: " + highScores[i].points;

    olEl.appendChild(listEl);
}

clearBtn.addEventListener("click", function () {
    localStorage.removeItem("user-score");
    window.location.reload();
});