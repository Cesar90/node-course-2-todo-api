var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo-todo-2019:mongo-todo-2019@ds223685.mlab.com:23685/mongo-todo-2019');

module.exports = { mongoose };