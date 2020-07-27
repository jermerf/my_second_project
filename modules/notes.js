const { Router } = require('express')
const Note = require('./Note.js')

const routes = Router()

routes.use('/conflict', (req, res, next) => {
  console.log("Handled by notes.js")
  next()
})

routes.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find()
    res.send(notes)
  } catch (err) {
    res.send(err)
  }
})

routes.post('/notes', async (req, res) => {
  const newNote = await new Note({
    content: "Hello world",
    createdOn: new Date()
  }).save()
  res.send(newNote)
})

module.exports = routes