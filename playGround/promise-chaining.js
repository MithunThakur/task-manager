require('../src/db/mongoose');
const User = require('../src/models/user');


// User.findByIdAndUpdate('61cd9431766a9dc6fc2deccb', {
//     age: 1
// }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.error(error);
// });

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});
    return count;
}

updateAgeAndCount('61cd9431766a9dc6fc2deccb', 2).then((count) => {
    console.log(count);
}).catch((error) => {
    console.error(error);
})
