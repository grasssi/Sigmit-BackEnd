const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const flash = require('connect-flash');//?
const session = require('express-session');//?

//Require to use .env
require('dotenv').config()

const app = express()
const port = 3000

app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: 'woot',
                  resave: false, 
                  saveUninitialized: false}));



//Morgan Config
app.use(morgan('dev'))

// database connection 
require('./database/connect')

//BearerStrategy with passport
require('./passport/bearerStrategy')

// config body parser
app.use(express.json())

// cors
app.use(cors()) 

app.get('/', (req, res) => {
  res.send({mesage : 'Hello World!'})
})
//flash
app.use(flash());


// require routes 
const userApi = require('./routes/userAPi');
const authApi = require('./routes/authAPI');
const minfoApi = require('./routes/minfoAPI');
const baseApi = require('./routes/baseAPI');
const forgotApi = require('./routes/forgotAPI');
const ownerApi = require('./routes/ownerAPI');
const serviceApi = require('./routes/serviceAPI');
const typeApi = require('./routes/typeAPI');
const marqueApi = require('./routes/marqueAPI');


app.use('/api/v1', userApi);
app.use('/api/v1', authApi);
app.use('/api/v1', minfoApi);
app.use('/api/v1', baseApi);
app.use('/api/v1', forgotApi);
app.use('/api/v1', ownerApi);
app.use('/api/v1', serviceApi);
app.use('/api/v1', typeApi);
app.use('/api/v1', marqueApi);


app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`)
})
