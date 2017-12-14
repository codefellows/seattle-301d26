'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
const express = require('express')
const app = express()
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))
app.use(express.static(`${__dirname}/public`))

app.get('/new', (req, res) => res.sendFile(`${__dirname}/public/new.html`))

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).send('Record posted to server!!');
})

app.use((req, res) => res.status(404).send('Not Found, Bozo'))

app.listen(PORT, () => console.log(`Listening on ${PORT}`))