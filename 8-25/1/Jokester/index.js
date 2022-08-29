const jokes = require('give-me-a-joke');

const colors = require('colors');

const cowsay = require('cowsay');



jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
})

// npm install for use in one directory and cannot require from outside
// locally to one directory

// package.json in every node app
// meta data about the project
// reliant on the dependencies
