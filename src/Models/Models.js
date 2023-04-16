const mongoose = require("mongoose");
const validator = require("validator");
// Define  schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => {
        return value >= 0;
      },
      message: "Age must be a positive value",
    },
  },
  password: { type: String, required: true, minLength: 8 },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return validator.isEmail(value);
      },
      message: "Invalid email address",
    },
  },
});

// Create a model from the schema
const User = mongoose.model("User", userSchema);
module.exports = User;
