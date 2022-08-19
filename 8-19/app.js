// https://swapi.dev/api/people/5

const req = new XMLHttpRequest();

req.onload = function () {
    console.log('it loaded')
    const data = JSON.parse(this.responseText);
    console.log(data.name, data.gender, data.mass)
}

req.onerror = function () {
    console.log('error!')
    console.log(this)
}

req.open('GET', 'https://swapi.dev/api/people/5');
req.send();