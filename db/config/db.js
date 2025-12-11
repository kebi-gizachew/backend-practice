import mongoose from 'mongoose'
export const connectDB=async()=>{
    try{
        console.log("Connecting to MongoDB...")
    const con=await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB connected: ${con.connection.host}`)
}
    catch(err){
        console.log(err)
        process.exit(1)
    }
}