const subreddits = ["cringe", "books", "chickens", "funny", "pics"];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for (let item of subreddits) {
    console.log(item);
}

for (let i of subreddits) {
    console.log(i);
}

const seatingChart = [
    ['kristen', 'erik', 'dave'],
    ['chris', 'derick', 'llave'],
    ['main', 'ike', 'mave'],
]

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}
