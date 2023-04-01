require('dotenv').config()
const mongoose = require('mongoose')
//const URI = `mongodb://localhost:27017/salao-na-mao`

mongoose
  .connect('mongodb://localhost:27017/salao-na-mao')
  .then(() => console.log('DB ON '))
  .catch((err) => console.log(err))
