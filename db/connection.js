const mongoose = require('mongoose')
const con =(url)=>{
    mongoose.connect(url)
}
module.exports = con;