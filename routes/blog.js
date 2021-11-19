const blogs = require('express').Router()
const axios = require('axios')

// https://dev.to/api/articles/me/published

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
    });

blogs.get('/:post', (req, res) => {
    res.send('Hello world')
});

module.exports = blogs