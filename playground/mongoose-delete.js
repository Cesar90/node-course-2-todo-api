const {ObjectId} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5c6f329832ea9fb222fc4821';

Todo.remove({}).then((result) => {
    console.log(result);
});

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findOneAndRemove({
    _id: '5c7061a14f3e8b0e24940509'
}).then((todo) => {
    
});

Todo.findByIdAndRemove('5c7061a14f3e8b0e24940509')
    .then((todo) => {
        console.log(todo);
    });