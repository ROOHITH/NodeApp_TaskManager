const getAllitem=(req,res)=>{

    res.send(`get all item `)
    
}
const createitem=()=>{
    res.send(`create`)
}
const delteitem=()=>{
    res.send(`delete`)
}
const updateitem=()=>{
    res.send(`update`)
}
module.exports ={getAllitem,createitem,delteitem,updateitem}