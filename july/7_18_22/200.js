const testScores = {
    keenan: 90,
    damon: 53,
    kim: 23,
    shawn: 99,
    nadia: 57,
    elvira: 83,
    david: 33
}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`)
}

Object.keys(testScores)
Object.values(testScores);
Object.entries(testScores);

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;

}

console.log(total / scores.length)