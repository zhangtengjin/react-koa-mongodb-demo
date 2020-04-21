const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false },
  time: { type: Number, default: Date.now }
})

exports.Todo = mongoose.model('Todo', TodoSchema);