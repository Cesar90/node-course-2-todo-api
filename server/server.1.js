var { mongoose } = require("./db/mongoose")

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

// var newTodo = new Todo({
//     text:'Cook dinner'
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo');
// }, (e) => {
//     console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//     text:'Food the cat',
//     completed:true,
//     completedAt: 123
// });

// var otherTodo = new Todo({
//   text:'Something to do'
// });

// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc, undefined, 2)); 
// }, (e) => {
//     console.log('Unable to save', e);
// });

var User = mongoose.model('User',{
   email:{
       type:String,
       required: true,
       trim: true,
       minlength: 1
   }
});

var user = new User({
    email:'test@test.test' 
});

user.save().then((doc) => {
    console.log('User saved', doc);
},(e) =>{
    console.log('Unable to save user', e);
});