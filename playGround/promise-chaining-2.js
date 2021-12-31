require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('61cd7182f22794814c2a285f').then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.error(error);
// });


const deleteTaskAndCount = async (id, status) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments(status);
    return count;
}

deleteTaskAndCount('61cd9c0c4a693bff9f74df60', {completed: false}).then((count) => {
    console.log(count);
}).catch((error) => {
    console.error(error);
})