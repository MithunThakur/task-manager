const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    // useNewUrlParser: true,
    // useCreateIndex: true
}
);



// const me = new User({
//    name: '    Mithun      ',
//    email: 'me@gmail.com',
//    age: 32,
//    password: 'ABC123456' 
// });

// me.save().then(() => {
//     console.log(me);
// }
// ).catch((error) => {
//     console.log(error);
// });

// *******************************Task Model********************************



// const newTask = new Task({
//     description: '      Get Onsite Job      ',
   
// });

// newTask.save().then(() => {
//     console.log(newTask);
// }).catch((error) => {
//     console.log(error);
// });