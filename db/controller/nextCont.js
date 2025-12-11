import Note from '../models/Note.js';
export const getNotes=async(req,res)=>{
    try{
        const notes=await Note.find().sort({createdAt:-1});
        res.status(200).json({success:true, count:notes.length, data:notes});
    }catch(err){
        res.status(500).json({success:false, message:"Server Error"});
    }
}
export const createNotes=async(req,res)=>{
    try{
        const note=await Note.create(req.body)
        res.status(201).json({success:true, data:note});
    }catch(err){
        res.status(500).json({success:false, message:"Server Error"});
    }
}