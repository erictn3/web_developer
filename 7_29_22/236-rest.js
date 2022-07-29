// function sum() {
//     return arguments.reduce((total, el)=> total + el)
// }

// sum(3,4,5)

// function sum(...nums){
//     console.log(nums);
// }

function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold Medal Goes to: ${gold}`)
    console.log(`Silver Medal Goes to: ${silver}`)
    console.log(`Thanks everyone else: ${everyoneElse}`)
}

raceResults('Tammy', 'Todd', 'Tina', 'Trevor', 'Travis')