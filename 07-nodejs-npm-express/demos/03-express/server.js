'use strict'

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('./public'))

// app.get(endpoint, callback)
// app.get('/', (request, response) => {
//   response.sendFile('./public/index.html')
// })

app.get('/hello', (req, res) => {
  res.status(200).send('You made an ajax request!')
})

app.get('/bye', (req, res) => {
  res.json('I am a blob of json')
})
// app.post()
// app.put()
// app.delete()

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))