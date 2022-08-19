// axios.get('https://swapi.dev/api/people/1')
//     .then((res) => {
//         console.log('response', res)
//     })
//     .catch((e) => {
//         console.log('error', e)
//     })

// const getStarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//         console.log(res.data);
//     } catch (e) {
//         console.log(e)
//     }
// }
// getStarWarsPerson(4);

const jokes = document.querySelector('#joke')

const dadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }
    try {
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        console.log(res.data.joke);
        const newLI = document.createElement('LI');

        newLI.append(res.data.joke);
        jokes.append(newLI);
    } catch (e) {
        console.log(e);
    }
}