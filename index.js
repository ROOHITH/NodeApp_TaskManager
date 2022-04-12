const exp = require('constants');
const express = require('express');
const  path  = require('path');
require('dotenv').config()
const app = express();
const con = require('./db/connection')

var bodyParser = require('body-parser');
const task = require('./routes/task')
const Port = 5000;
//public files
app.use(express.static('./public'))

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())

//routes


app.use('/items',task)



app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public/html/index.html"))
})
const start = async ()=>{
        try {
            
            await con(process.env.MONGO_URI)

            app.listen(Port,()=>{
                console.log("app is listening")
            })
        } catch (error) {
            console.log(error);
        }
}
start();

