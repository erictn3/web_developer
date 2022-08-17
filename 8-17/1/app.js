// async function hello() {

// }

const sing = async () => {
    throw 'oh no problem'
    return 'LA LA LA LA'
}

sing()
    .then((data) => {
        console.log('promised resolved with', data)
    })
    .catch(err => {
        console.log('Oh no, promise rejected')
        console.log(err)
    })