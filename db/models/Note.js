import mongoose from 'mongoose';
const noteSch=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"],
        trim:true,
        maxLength:[100,"Title cannot exceed 100 characters"]

    },
    body:{
        type:String,
        required:[true,"Body is required"],
        trim:true,
    }},{
        timestamps:true
    })  
export default mongoose.model("Note",noteSch);
