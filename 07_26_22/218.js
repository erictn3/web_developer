

// try {
//     hello.toUpperCase();
// } catch {
//     console.log('ERROR!!!')
// }

// hello.toUpperCase();

// console.log('AFTER')

function yell(msg) {
    try {
        console.log(msg.toUppercase().repeat(3))
    } catch (e) {
        console.log(e);
        console.log('Please pass a string');
    }

}