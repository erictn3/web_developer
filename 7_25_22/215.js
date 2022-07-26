function makeMysteryfunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("Congrats, I am a good function!")
            console.log("you win a MILLION DOLLARS ")
        }
    } else {
        return function () {
            alert('YOU HAVE BEEN INFECTED')
            alert('STOP TRYING HAHA')
            alert('STOP TRYING HAHA')
            alert('STOP TRYING HAHA')

        }
    }
}

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;

    }
}

// makeBetweenFunc(50, 100)

// function isBetween(num) {
//     return num >= 50 && num <=100;
// }

// function isBetween2(num) {
//     return num >= 1 && num <=10;
// }