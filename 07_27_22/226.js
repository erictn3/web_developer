console.log('hello')

setTimeout(() => {
    console.log('hello')
}, 3000)

console.log('goodbye')

//  console.log will return first then the timeout. Asynchronous action


const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

