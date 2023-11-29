const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

//Export the model
module.exports = mongoose.model("Todo", todoSchema);
