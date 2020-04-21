const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  registerTime: { type: Number, default: Date.now }
})

exports.User = mongoose.model('User', UserSchema);