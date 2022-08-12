const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

let p1Count = 0;
let p2Count = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Count += 1;
        if (p1Count === winningScore) {
            isGameOver = true;
        }
        p1Score.textContent = p1Count;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Count += 1;
        if (p2Count === winningScore) {
            isGameOver = true;
        }
        p2Score.textContent = p2Count;
    }
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score.textContent = 0;
    p2Score.textContent = 0;

    p1Count = 0
    p2Count = 0
}

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})