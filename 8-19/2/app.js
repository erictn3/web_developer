// fetch('https://swapi.dev/api/people/1')
//     .then(res => {
//         console.log('resolved', res)
//         return res.json()
//     })
//     .then((data) => {
//         console.log('json done', data)
//         return fetch('https://swapi.dev/api/people/2')
//     })
//     .then(res => {
//         console.log('second response', res);
//         return res.json()
//     })
//     .then((data) => {
//         console.log('json 2 done', data)
//     })
//     .catch((e) => {
//         console.log('error', e)
//     })


const loadStarWarsPeople = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/peereople/1')
        const data = await res.json();
        console.log(data);
        const res2 = await fetch('https://swapi.dev/api/people/2')
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log('error', e)
    }
}

loadStarWarsPeople();