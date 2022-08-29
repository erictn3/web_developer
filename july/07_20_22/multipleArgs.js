const die1 = Math.floor(Math.random() * 6 + 1);
const die2 = Math.floor(Math.random() * 6 + 1);

function isSnakeEyes(die1, die2) {

    if (die1 === 1 && die2 === 1) {
        console.log('Snake Eyes!');
    } else {
        console.log('Not Snake Eyes!')
    }

}



isSnakeEyes(die1, die2);