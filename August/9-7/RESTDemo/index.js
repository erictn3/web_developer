const { text } = require('express');
const express = require('express');
const app = express();
const path = require('path');


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        id: 1,
        username: 'Todd',
        comment: 'lol that is so fetch'
    },
    {
        id: 2,
        username: 'Rodd',
        comment: 'lol that is so wretch'
    },
    {
        id: 3,
        username: 'Bodd',
        comment: 'lol that is so letch'
    },
    {
        id: 4,
        username: 'Sodd',
        comment: 'lol that is so stetch'
    },
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment })
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id))
    res.render('comments/show', { comment })
})

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty}`)
})

app.listen(3000, () => {
    console.log('ON PORT 3000!')
})


// username
// text

// bob - hello!

// GET / allcomments
// GET / showmeallcommentsnow

// POST / newcomment
// POST / makecomment

// GET / comments - list all comments
// POST / comments - create a new comment
// GET / comments /: id - Get one comment(using ID)

// PATCH / comments /: id - update one comment
// DELETE / comments /: id - destroy one comment