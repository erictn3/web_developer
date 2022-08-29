const express = require('express');

const app = express();

// app.use - every time a new request hits our server we receive it and now we display that response
app.use(() => {
    console.log("We got a new request")
})


app.listen(3000, () => {
    console.log('Listening on port 3000!')
})

// cannot get / means there IS a server but NO RESPONSE