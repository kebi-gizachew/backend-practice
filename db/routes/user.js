import express from 'express'
import {getNotes} from '../controller/nextCont.js'
const router=express.Router()
router.get('/notes',getNotes)
export default router