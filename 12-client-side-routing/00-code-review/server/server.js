'use strict'

// Application Dependencies
const express = require('express')
const cors = require('cors')
const pg = require('pg')

// App Setup
const app = express()
const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
const CLIENT_URL = process.env.CLIENT_URL

// DATABASE Setup
const client = new pg.Client(DATABASE_URL)
client.connect()
client.on('error', console.error)

app.use(cors())

app.get('/api/v1/books', (req, res) => {
  client.query('SELECT book_id, title, author, image_url FROM books;')
  .then(results => res.send(results.rows))
  .catch(console.error)
})

app.all('*', (req, res) => res.redirect(CLIENT_URL))
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
