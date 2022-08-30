const express = require('express');

const app = express();

// app.use - every time a new request hits our server we receive it and now we display that response
// app.use((req, res) => {
//     console.log("We got a new request")
//     // res.send('hello, we got your request, this is a response');
//     res.send({ color: 'red' })
// })

// http request get only one response

app.get('/', (req, res) => {
    res.send('this is the home page');
});

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!! THIS IS DIFFERENT THAN A GET REQUEST')
})

app.get('/cats', (req, res) => {

    res.send('meow')
})

app.get('/dogs', (req, res) => {
    res.send('woof');
})

app.get('*', (req, res) => {
    res.send('I dont know')
})

// request is an object created by express based upon the incoming HTTP request

// /cats => 'meow'
// /dogs => 'woof'
// '/' 

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})

// cannot get / means there IS a server but NO RESPONSE

// http request is not a js object, it's text information 