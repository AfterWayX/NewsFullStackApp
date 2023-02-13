const express = require('express')
const app = express()
const port = 3000
const parserRoutes = require('./src/routes/parser');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/parser', parserRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})