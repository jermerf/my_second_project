require("dotenv").config()
const express = require('express')
const notes = require('./modules/notes.js')
const users = require('./modules/users.js')
const dbConnect = require('./modules/mongoose.js')

const app = express()

console.log("Run mode: ", process.env.NODE_ENV)

app.use(notes)
app.use(users)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist')) // Where compiled files go for a vue project
  // app.use(express.static('public')) // Where static web files go in a generic (non-vue) project
  console.log("Serving dist folder")
} else {
  console.log("Dev mode, only serving API")
}

dbConnect()
  .then(db => {
    app.listen(process.env.HOST_PORT, () => {
      console.log(`Server listening on port ${process.env.HOST_PORT}`)
    })
  })