const {ObjectId} = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5c6f329832ea9fb222fc4821';

if(!ObjectId.isValid(id)){
    console.log('Id not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//   _id:id 
// }).then((todo) => {
//   console.log('Todos', todo); 
// });

// Todo.findById(id)
// .then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//   console.log('Todo by Id', todo); 
// }).catch((e) => console.log(e));

//ObjectId("5c6d8eca94840b1aeff027e4")
User.findById("5c6d8eca94840b1aeff027e4").then((user)=>{
    if(!user){
        return console.log('Unable to find user');
    }
    
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});