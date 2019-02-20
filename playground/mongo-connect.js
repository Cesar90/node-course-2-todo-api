//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// var user = {name:'andrew',age:25};
// var {name} = user;
// console.log(name);

// console.log(MongoClient);
MongoClient.connect('mongodb://mongo-todo-2019:mongo-todo-2019@ds223685.mlab.com:23685/mongo-todo-2019',
    (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    } else {
        console.log('Connect to Mongo server');   
    }
    
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    //Insert new doc into
    db.collection('Users').insertOne({
       _id:123,
       name:'Andrew',
       age:25,
       location:'Philadelphia'
    },(err, result) => {
        if(err){
            console.log('Unable to insert user', err);
        }
        
        console.log(result.ops[0]._id.getTimestamp());
    });
    
    db.close();
});

