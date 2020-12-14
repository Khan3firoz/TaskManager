require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('5fcfadd69054f814f4fc5c3f').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed:false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteAgeAndCount = async(id)=>{
    const user = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed : false })
    return count
}
deleteAgeAndCount('5fcfc995f45bb45054e688fe').then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
});