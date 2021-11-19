const express = require('express')
const app = express()
const blogs = require('./routes/blog')

// set port number or 
const port = 3000

// set view engine
app.set('view engine', 'ejs')

// prefix for blogs route
const prefix = 'blogs'

// middleware
app.use(express.static('public'))
app.use(express.static('public/projects'))
app.use(`/${prefix}`, blogs)


app.get('/', (req, res) => {
	res.render('index.ejs')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})