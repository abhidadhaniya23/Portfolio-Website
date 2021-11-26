const express = require('express')
const cors = require('cors')

// const serverless = require('serverless-http')
const app = express()
const axios = require('axios')
const blogs = require('./routes/blog')

// set port number or 
const port = process.env.PORT || 3000

// set view engine
app.set('view engine', 'ejs')

// middleware
app.use(express.static('public'))
app.use(express.static('public/projects'))
app.use(cors())
app.use('/', blogs)


app.get('/', (req, res) => {
	axios.get('https://dev.to/api/articles?username=abhidadhaniya23')
		.then(response => {
			// console.log(response.data);
			res.render('index.ejs', {
				articles: response.data
			})
		}).catch(err => {
			console.log(err);
			// res.render('error page');
		})
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

// module.exports = app;
// module.exports.handler = serverless(app);