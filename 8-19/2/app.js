fetch('https://swapi.dev/api/people/1')
    .then(res => {
        console.log('resolved', res)
        return res.json()
    })
    .then((data) => {
        console.log('json done', data)
        return fetch('https://swapi.dev/api/people/2')
    })
    .then(res => {
        console.log('second response', res);
        return res.json()
    })
    .then((data) => {
        console.log('json 2 done', data)
    })
    .catch((e) => {
        console.log('error', e)
    })
