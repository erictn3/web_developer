// function rollDie(numSides) {
//     return Math.floor(Math.random() * numSides) + 1
// }

// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

// num sides is set as a default

function greet(msg = 'Hello There', person = 'Random Person', punc = '!') {
    console.log(`${msg}, ${person} ${punc}`);
}