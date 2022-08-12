const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

let p1Count = 0;

p1Button.addEventListener('click', function () {
    p1Count += 1;
    p1Score.innerHTML = p1Count;
})