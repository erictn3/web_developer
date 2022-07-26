function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}
// callTenTimes(rollDie)

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie);

// call Twice has a function inside
// we call call Twice first with roll die inside
// once inside, we then call the first func which has func AKA roll die
// so we call roll die and execute that
// we have another func so that means we call roll die again 