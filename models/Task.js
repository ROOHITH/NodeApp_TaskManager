const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"must provde a name "]
    },completed:{
        type:Boolean,
        default:true
    }
})
module.exports = mongoose.model('table1',taskSchema)