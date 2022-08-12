const p1 = {
    count: 0,
    button: document.querySelector('#p1Button'),
    score: document.querySelector('#p1Score')
}
const p2 = {
    count: 0,
    button: document.querySelector('#p2Button'),
    score: document.querySelector('#p2Score'),
}

const resetButton = document.querySelector('#reset');

const winningScoreSelect = document.querySelector('#playTo');

let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {

    if (!isGameOver) {
        player.count += 1;
        if (player.count === winningScore) {
            isGameOver = true;
            player.score.classList.add('winner');
            opponent.score.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.score.textContent = player.count;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.count = 0;
        p.score.textContent = 0;
        p.score.classList.remove('winner', 'loser')
        p.button.disabled = false;
    }
}

