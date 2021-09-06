const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
//Morgan Config
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//get all users
//get one user
//get user by id
//update user by id
//delete user by id 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
