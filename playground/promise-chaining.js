require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5fcfc7cb413b2b32c4836f4c', { age: 107 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 107 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}
updateAgeAndCount('5fd11674f459f52d8843aee0',15).then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
});