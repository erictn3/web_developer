let maximum = parseInt(prompt('Enter maximum number!'));

while (!maximum) {
    maximum = parseInt(prompt('Enter valid number!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Enter your first guess'));

let attempts = 1;

while (guess !== targetNum) {
    attempts++
    if (guess > targetNum) {
        guess = parseInt(prompt('Too high, enter again'))
    } else {
        guess = parseInt(prompt('Too low, enter again'))
    }
}

console.log(`You got it, it took you ${attempts} attempt(s)!`)
