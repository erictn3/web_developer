const SECRET = 'BabyHippo';

let guess = prompt('enter the secret code...');

while (guess !== SECRET) {
    guess = prompt('nope try again.');
}

console.log('got it')