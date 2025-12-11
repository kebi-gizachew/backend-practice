import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const app=express()
app.use(express.json())
app.get('/items',(req,res)=>{
    res.json({message:"I Love Programming",status:"Success"})
})
app.post("/",(req,res)=>{
    const data=req.body
    res.json({id:1,message:"Data received successfully",data:data})
})
app.patch("/:id",(req,res)=>{
    const {id}=req.params
    res.json({id:id,message:`${id} Patch request received`})
})
app.listen(process.env.PORT)

