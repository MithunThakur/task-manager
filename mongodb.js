// CRUD operation using MongoDB

// const { MongoClient, ObjectId } = require('mongodb');

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const oBjectId = mongodb.ObjectId;

// const connectionURL = 'mongodb://127.0.0.1:27017';
// const databaseName = 'task-manager';

// const id = new mongodb.ObjectId();
// console.log(id);
// console.log(id.getTimestamp());
// MongoClient.connect(connectionURL, {
//     useNewUrlParser: true
// }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to data base');
//     }

//     console.log('MongoDB Connected');

//     const db = client.db(databaseName);

    //*************************** */ Users Collection ****************************
    // ## Insert One Document
    // db.collection('users').insertOne({
    //     // _id: id,
    //     name: 'Vikram',
    //     age: 32
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users');
    //     }

    //     console.log(result);
    // });
    // ## Insert Many Document
    // db.collection('users').insertMany([{
    //     name: 'Jen',
    //     age: 27
    // },
    // {
    //     name: 'Mike',
    //     age: 28
    // }], (error, result) => {
    //     if (error) {
    //         console.log('Unabele to insert documents')
    //     }
    //     console.log(result);
    // })

    //***************************Task Collection*******************************
    // ## Create Task Collection
    // db.createCollection('tasks', (error, result) => {
    //     if (error) {
    //         return console.log('Unable to create tasks collection');
    //     }
    //     console.log(result);
    // });

    // ## Insert many documents in task collection
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'To repair laptop',
    //         completed: true
    //     },
    //     {
    //         description: 'To buy new laptop',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to create task document');
    //     }

    //     console.log(result);
    // });


    //**********************Queryind Mongo Data ***************************

    // db.collection('users').findOne({_id: new ObjectId('61cc7877c9217eb597b56ce0')}, (erro, user) => {
    //     if (error) {
    //         return console.log('Could not find the data');
    //     }
    //     console.log(user);
    // });

    // No Callback for find just cursor
    // db.collection('users').find({age: 32 }).toArray((error, users) => {
    //     console.log(users);
    // });
    // db.collection('users').find({age: 32 }).count((error, count) => {
    //     console.log(count);
    // });

    // db.collection('tasks').findOne({_id: new ObjectId('61cc72a2eb4f68ebe907de14')}, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to find task');
    //     }

    //     console.log(task);
    // });
    // db.collection('tasks').findOne({completed: false}, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to find task');
    //     }

    //     console.log(task);
    // });

    // db.collection('tasks').find({completed: true}).toArray((error, task) => {
    //     if(error) {
    //         return console.log('Unable to find task');
    //     }
    //     console.log(task);
    // });

    //********************************************Updating Documents **************************
    //## Update One
    // db.collection('users').updateOne(
    //     {
    //         name: 'Mithun Thakur'
    //     },
    //     {
    //         $set: {
    //             name: 'Mithun'
    //         }
    //     }).then((result) => {
    //         console.log('Record Updated Successfully', result);
    //     }).catch((error) => {
    //         console.log(error);
    //     });

    // db.collection('users').updateOne(
    //     {
    //         _id: new ObjectId('61cc7877c9217eb597b56ce0')
    //     },
    //     {
    //         $inc: {
    //             age: 1
    //         }
    //     }
    // ).then((result) => {
    //     console.log('Successfullt Updated age', result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    //## Update Many
    // db.collection('tasks').updateMany(
    //     {
    //         completed: false
    //     },
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     }
    // ).then((result)=> {
    //     console.log('Document Updated', result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    //**************************************Deleting Document***********************
    // ##Delete Many
//     db.collection('users').deleteMany(
//         {
//             age: 28
//         }
//     ).then((result) => {
//         console.log(result);
//     }).catch(error => {
//         console.log(error);
//     })
// });