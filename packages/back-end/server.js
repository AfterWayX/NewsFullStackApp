var cors = require('cors')
const express = require('express')

const parserRoutes = require('./src/routes/parser');
const jobsRoutes = require('./src/routes/jobs');

const port = 3001
const app = express()

app.use(cors());

app.use('/parser', parserRoutes)
app.use('/jobs', jobsRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})