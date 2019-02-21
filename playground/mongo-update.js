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
    
    db.collection('Todos').findOneUpdate({
       _id: new ObjectID('222222') 
    },{
        $set:{
            completed:true
        }
    }, {
        returnOriginal: false
    }).then(function(){
        
    });
    
    db.close();
});

