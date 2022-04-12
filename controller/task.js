
const Task = require('../models/task')

const getAllItem = async (req,res)=>{
    try {
        const task = await Task.find({})
        
        res.status(201).json({task})

    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const mainPage = (req,res)=>{
    res.send("home")
}

const createAnItem = async (req,res)=>{
        try {
            //console.log(req.body.inputValue)
            const task = await Task.create(req.body.inputValue)
            console.log(task)
            if(!task){
                return res.status(404).json({msg:"none"})
            }
            res.status(201).json({task})
        } catch (error) {
            res.status(500).json({msg:error})
        }    
    
}
const getAnItem = async (req,res)=>{
try {
    //console.log(req.body.name)
    
    const {id:itemid} = req.params;
    const task = await Task.findOne({_id:itemid})
    if(!task){
        return res.status(404).json({msg:"no item retrieved"})
    }
    
    res.status(201).json({task})
    
} catch (error) {
    res.status(500).json({msg:error})
    
}
    
}
const updateAnItem = async(req,res)=>{
    try {
        const {id:itemid} = req.params;
        const task = await Task.findOneAndUpdate({_id:itemid},req.body)
        
        res.status(201).json({task})

    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const deleteAnItem = async(req,res)=>{

    try {
        const {id:itemid} = req.params;
        const task = await Task.findOneAndDelete({_id:itemid})
        
        res.status(201).json({task})

    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports ={mainPage,getAllItem,createAnItem,getAnItem,updateAnItem,deleteAnItem}