const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

//Morgan Config
app.use(morgan('dev'))

// database connection 
require('./database/connect')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Resolve Static Files
app.use('/uploads',express.static('upload'))

// config body parser
app.use(express.json())

// require routes 
const userApi = require('./routes/userAPi');

app.use('/api/v1', userApi);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
