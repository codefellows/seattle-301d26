'use strict'

const express = require('express')
const { Client } = require('pg')
// const pg = require('pg')
// const Client  = pg.Client

const app = express()
const PORT = process.env.PORT || 3000
// const DATABASE_URL = 'postgres://USERNAME:PASSWORD@localhost:5432/kilovolt'
const DATABASE_URL = 'postgres://localhost:5432/users'

const client = new Client(DATABASE_URL)
client.connect()
// client.on('error', console.error)

app.get('/api/user', (req, res) => {
  client.query('SELECT * FROM users;')
    .then(results => res.send(results.rows))
    .catch(err => {
      console.error(err)
      res.status(400).send('something went wrong, Bozo')
    })
})

app.get('/api/user/:id', (req, res) => {
  client.query('SELECT * FROM users WHERE id=$1;', [req.params.id])
    .then(results => res.send(results.rows))
    .catch(err => {
      console.error(err)
      res.status(400).send('something went wrong, Bozo')
    })
})

app.post('/api/user', bodyParser, (req, res) => {
  client.query(
    'INSERT INTO users("first_name", "last_name") VALUES($1, $2)',
    [req.body.firstName, req.body.lastName]
  )
  .then(result => res.status(201).send(result.rows))
  .catch(console.error)
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))