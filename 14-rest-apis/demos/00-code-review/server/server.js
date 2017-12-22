'use strict'

// Application dependencies
const express = require('express');
const cors = require('cors');
const pg = require('pg');

// Application Setup
const app = express();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

// Application Middleware
app.use(cors());


// API Endpoints
app.get('/api/v1/books', (req, res) => {
  client.query(`SELECT book_id, title, author, image_url, isbn FROM books;`)
  .then(results => res.send(results.rows))
  .catch(console.error);
});

app.get('/api/v1/books/:id', (req, res) => {
  client.query(`SELECT * FROM books WHERE book_id=$1;`, [req.params.id])
  .then(result => res.send(result.rows))
  .catch(console.error)
})

app.delete('/api/v1/books/:id', (req, res) => {
  client.query(`DELETE FROM books WHERE book_id=$1`, [req.params.id])
  .then(() => res.sendStatus(204))
  .catch(err => {
    console.error(err)
    res.status(400).send('Bad Request; Book ID does not exist')
  })
})

// Middleware express example
// app.get(
//   '/api/v1/mw',
//   (req, res, next) => {
//     /* unpackage the headers and validate that you are who you say your are */
//     // if(you are the person) call next()
//     // else res.status(401).send('Not Authorized')
//   },
//   (req, res, next) => {
//     // Go get some data from the database
//     // if(it's present; query is valid) attach record to request object, and call next()
//     // else res.status(400).send('Bad Request')
//   },
//   (req, res) => {
//     // Form a valid response with the data requested
//     // res.status(200).send(the data requested)
//   })

// app.get('/api/v1/mw', authorize, query, respond)

app.get('*', (req, res) => res.redirect(CLIENT_URL));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));