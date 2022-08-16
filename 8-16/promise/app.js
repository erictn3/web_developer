// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('worked page 1')
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('worked page 2')
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('worked page 3')
//                     })
//             })
//             .catch(() => {
//                 console.log('oh no, error page 2')
//             })
//     })
//     .catch(() => {
//         console.log('promise rejected')
//         console.log('oh no, error page 1')
//     })

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log('it worked! page 1')
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then(() => {
        console.log('it worked! page 2')
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then(() => {
        console.log('it worked! page 3')
    })
    .catch(() => {
        console.log('oh no, request failed')
    })