let player1 = "Player1";
let player2 = "Player2";

function changeDice() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll(".player-text")[0].innerHTML = player1;
    document.querySelectorAll(".player-text")[1].innerHTML = player2;
    document
        .querySelector(".img1")
        .setAttribute("src", "images/dice" + dice1 + ".png");
    document
        .querySelector(".img2")
        .setAttribute("src", "images/dice" + dice2 + ".png");
    if (dice1 > dice2) {
        document.querySelector(".big-header").innerHTML = player1 + " beat " + player2;
    } else if (dice2 > dice1) {
        document.querySelector(".big-header").innerHTML = player2 + " beat " + player1;
    } else {
        document.querySelector(".big-header").innerHTML = "Boring YOu Drew";
    }
    setTimeout(function () {
        document.querySelector(".big-header").innerHTML = "click To Play Again ";
    }, 2000)
}

document.querySelector(".big-header").addEventListener("click", changeDice);
