//This contains the model according to which our data will be accepted.

const mongoose = require("mongoose");

const mySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  coder: {
    type: String,
    default: "Yes",
  },
});

module.exports = mongoose.model("userSchema", mySchema);
