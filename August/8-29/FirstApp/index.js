const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})

// cannot get / means there IS a server but NO RESPONSE