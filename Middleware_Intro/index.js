const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'))

// this function works on every single request
app.use((req, res, next) => {
    console.log("THIS IS MY FIRST MIDDLEWARE")
    next();
})
app.use((req, res, next) => {
    console.log("THIS IS MY SECOND MIDDLEWARE")
    next();
})

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!')
})

app.listen(3000, () => {
    console.log('App is running on localhost: 3000')
})