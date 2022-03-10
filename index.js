
const express = require('express')
const path = require('path')
const app = express();
const PORT = 5000;
const tasks = require('./route/task')
const connection = require('./db/dbconnnect')
app.use(express.static('./public'))
require('dotenv').config()
app.use('/',tasks)

//for all unspecified routes
app.all('*',(req,res)=>{
    res.status(404).send(`not avaialable `);
})

const start = async ()=>{
try{
    await connection(process.env.MONGO_URI)
    app.listen(PORT,()=>{
        console.log("app listening");
    })

}catch(err){
    console.log(err)

}
}
start()
