// hanldes api
const express = require('express');

// handles database
const mongoose = require('mongoose')

// handles cors 
const cors = require('cors')

const app = express();

// allow us to use content type of application json inside our API
app.use(express.json());
// stop any cross-origin errors we get  
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    userUnifiedTopology: true
})
    .then(() => console.log("Connected to DB"))
    .catch(console.error);