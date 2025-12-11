import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'
import useRouter from './routes/user.js'
import { errorHandler } from './middleware/err.js'
dotenv.config()
const app=express()
app.use(express.json())
app.use('/api/us',useRouter)
app.use(errorHandler)
const PORT=process.env.PORT
connectDB()
app.use(express.json())
app.use(cors())
app.listen(PORT,()=>{
    console.log("I am Listening")
})
