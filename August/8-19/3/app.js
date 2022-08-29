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

const jokes = document.querySelector('#joke');
const button = document.querySelector('button');


const addNewJoke = async () => {
    const jokeText = await dadJoke()
    const newLI = document.createElement('LI');

    newLI.append(jokeText);
    jokes.append(newLI);
}

const dadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }
    try {
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke

    } catch (e) {
        console.log(e);
    }
}

button.addEventListener('click', addNewJoke);