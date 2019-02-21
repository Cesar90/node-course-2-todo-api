//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// console.log(MongoClient);
MongoClient.connect('mongodb://mongo-todo-2019:mongo-todo-2019@ds223685.mlab.com:23685/mongo-todo-2019',
    (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    
    //deleteMany
    // db.collection('Todos').deleteMany({
    //   text:'Eat luch' 
    // }).then((result) => {
    //   console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({
    //   text:'Edit lunch' 
    // }).then((result) => {
    //     console.log(result);
    // });
    //findOneDelete
    db.collection('Todos').findOneDelete({
        completed: false
    }).then((result)=>{
        console.log(result);
    });
    
    db.close()
});

