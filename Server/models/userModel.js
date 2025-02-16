const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  interest: {
    type: [String],
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
