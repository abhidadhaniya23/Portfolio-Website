require('dotenv').config()
const blogs = require('express').Router()
const axios = require('axios')
var md = require('markdown-it')();
const fs = require('fs')
const path = require('path')

const URL = 'https://dev.to/api/articles/me/published'

let userData

axios.get('https://dev.to/api/articles?username=abhidadhaniya23')
    .then(response => {
        userData = response.data
    });

const options = {
    headers: { 'api-key': process.env.API_KEY },
    params: { 'per_page': 10 }
}

function timeSince(date) {
    let seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

blogs.get('/:title', async (req, res) => {

    try {
        let post = await userData.find(post => post.title.replace(/\s/g, '-') == req.params.title.replace(/\s/g, '-'))
        // console.log(post.title);
        axios.get(URL, options)
            .then(response => {
                response.data.forEach(article => {
                    if (article.title == post.title) {
                        const articleContent = md.render(article.body_markdown.replace(/\\n/g, '\n'))
                        fs.writeFile('partials/postContent.ejs', articleContent, err => {
                            if (err) {
                                console.log(err);
                            }
                            var myDate = new Date(article.published_at);
                            var result = myDate.getTime(myDate);
                            res.render('article.ejs', {
                                title: article.title,
                                // content: articleContent,
                                createdTime: timeSince(result),
                                readingTime: article.reading_time_minutes,
                                coverImg: article.cover_image
                            })
                            // console.log('Successfully Done!');
                        })
                    }
                })
            })
            .catch(error => {
                console.log('ERROR: ', error)
            })
    } catch (error) {
        console.log(error);
    }

    // const post = article.body_markdown
    // .replace(/\s+/g, '-')
    // .replace(/[^a-zA-Z0-9-]/g, '')
    // .toLowerCase()
    // console.log(post);
});

module.exports = blogs