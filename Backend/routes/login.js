import { Router } from "express";
import Login from "../models/loginModel.js";
import { createLoginSchema } from "../Schemas/loginSchema.js";
import { body, validationResult, checkSchema } from "express-validator";
// import session from "express-session";
import passport from "passport"
// import MongoStore from "connect-mongo"
import mongoose from "mongoose"
import "../Strategies/localStrategies.js"
import dotenv from "dotenv"

dotenv.config()
const router = Router();


// router.use(passport.initialize())
// router.use(passport.session())


router.post("/login",checkSchema(createLoginSchema),passport.authenticate("local"),(req,res)=>{
const result=validationResult(req)
if(!result.isEmpty()) return res.status(500).send("Error: ", result.array())

res.sendStatus(200)
})


export default router