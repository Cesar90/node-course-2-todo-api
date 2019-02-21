var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Todo = mongoose.model('Todos',new Schema({
    text:{
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    completed:{
      type: Boolean,
      default: false
    },
    completedAt:{
      type:Number,
      default: null
    }
}, { collection: 'Todos' } ));

module.exports = {Todo};