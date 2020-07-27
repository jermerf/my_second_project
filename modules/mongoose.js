const mongoose = require('mongoose')

module.exports = async () => {
  const db = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  return db
}