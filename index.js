const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const { users } = require('./endpoints')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', users.get)

app.post('/', async (req, res) => {
  const {body} = req
  const {data} = await axios.post('https://jsonplaceholder.typicode.com/users', body)
  res.status(201).send(data)
})

app.put('/:id', async (req, res) => {
  const {id} = req.params
  const {body} = req
  await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body)
  res.sendStatus(204)
})

app.delete('/:id', async (req, res) => {
  const {id} = req.params
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  res.sendStatus(204)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})