import User from "../models/user.models"
import { registeruser } from "../controllers/user.controller"
import express from "express"
const router = express.Router()     

router.post("/register", registeruser)

export default router