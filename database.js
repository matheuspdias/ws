const mongoose = require('mongoose')
const URI = ''

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useInifiedTopology', true)

mongoose
  .connect(URI)
  .then(() => console.log('DB is UP!'))
  .catch((err) => console.log(err))
