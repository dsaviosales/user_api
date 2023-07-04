

const express = require('express')
const app = express()
const port = 8080

const users = require('./src/data/users.json')

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/users', (req, res) => {
  res.send(users).json
})

app.get('/user/:id', (req, res) => {
  let idParam = req.params.id

  let userfiltered = users.filter((user) => {
    return user.id === parseInt(idParam);
     })
     res.status(200).json(userfiltered)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})  