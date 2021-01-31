const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello from node server 2!')
})

app.listen(port, () => {
  console.log(`Node app 2 listening at http://localhost:${port}`)
})