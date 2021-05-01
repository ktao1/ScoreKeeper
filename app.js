const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const reset = document.querySelector("#reset");
const input = document.querySelector("input[type=number]");
let winScore = 1;
let isGameOver = false;

input.addEventListener("input", () => {
    if (parseInt(input.value) > 0) {
        winScore = parseInt(input.value);
    }
    else{
        winScore = 1;
        input.value = "1";
    }
});


p1Btn.addEventListener("click", () => {
    if (!isGameOver) {
        let score = parseInt(p1Score.innerText);
        ++score;
        p1Score.innerText = score;
        if (score === winScore) {
            isGameOver = true;
            p1Score.classList.add("winner");
            p2Score.classList.add("loser");
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
    }
});

p2Btn.addEventListener("click", () => {
    if (!isGameOver) {
        let score = parseInt(p2Score.innerText);
        ++score;
        p2Score.innerText = score;
        if (score === winScore) {
            isGameOver = true;
            p2Score.classList.add("winner");
            p1Score.classList.add("loser");
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
    }
});

reset.addEventListener("click", () => {
    p1Score.innerText = "0";
    p2Score.innerText = "0";
    
    p1Score.classList.remove("winner", "loser");
    p2Score.classList.remove("winner", "loser");
    isGameOver = false;
    p1Btn.disabled = false;
    p2Btn.disabled = false;
});
