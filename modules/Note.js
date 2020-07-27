const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  content: String,
  createdOn: Date
})

const Note = mongoose.model("Note", NoteSchema)

module.exports = Note