const express = require('express')
const morgan = require('morgan')

//Require to use .env
require('dotenv').config()

const app = express()
const port = 3000

//Morgan Config
app.use(morgan('dev'))

// database connection 
require('./database/connect')

//BearerStrategy with passport
require('./passport/bearerStrategy')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// config body parser
app.use(express.json())

// require routes 
const userApi = require('./routes/userAPi');
const authApi = require('./routes/authAPI');
const minfoApi = require('./routes/minfoAPI');

app.use('/api/v1', userApi);
app.use('/api/v1', authApi);
app.use('/api/v1', minfoApi);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
