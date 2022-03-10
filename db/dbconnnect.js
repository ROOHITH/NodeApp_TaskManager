
const mongoose = require('mongoose')



const con ="mongodb+srv://rohith:rohith@cluster0.b5r5w.mongodb.net/base?retryWrites=true&w=majority"

const connection =(url)=>{

    return mongoose.connect(con)
}
module.exports = connection
