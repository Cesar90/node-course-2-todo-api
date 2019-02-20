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
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c6d8d622db1311acf7ac666')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });
    
    // db.collection('Todos').find().count().then((count) => {
    //     _id: new ObjectID('5c6d8d622db1311acf7ac666')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });
    
    // db.close();
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
});

