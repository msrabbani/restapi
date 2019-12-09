const mongoose = require("mongoose");
const Schema = mongoose.Schema, 
      ObjectId = Schema.ObjectId
// setup schema
const contactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  gender: String,
  phone: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

// export  contact model
const contactModel = mongoose.model('Contact', contactSchema);

module.exports = contactModel;
