// async function hello() {

// }

// const sing = async () => {
//     throw 'oh no problem'
//     return 'LA LA LA LA'
// }

// sing()
//     .then((data) => {
//         console.log('promised resolved with', data)
//     })
//     .catch(err => {
//         console.log('Oh no, promise rejected')
//         console.log(err)
//     })

const login = async (username, password) => {
    if (!username || !password) throw 'missing credentials'
    if (password === 'corgifeet') return 'Welcome'
    throw 'invalid password'
}

login('asdfdf')
    .then(msg => {
        console.log('logged in')
        console.log(msg)
    })