import express from 'express'
import {getNotes,createNotes} from '../controller/nextCont.js'
const router=express.Router()
router.route('/notes').get(getNotes).post(createNotes)
export default router