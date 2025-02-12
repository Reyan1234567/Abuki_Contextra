import {Router} from "express"
import bcrypt from "bcrypt";
import Login from "../models/loginModel.js"
import {createLoginSchema} from "../Schemas/loginSchema.js"
import {checkSchema, validationResult} from "express-validator"

const saltRounds = 10;
const router=Router()


router.post("/register",checkSchema(createLoginSchema),async (req,res)=>{
    const {body}=req
    const{username,password}=body
    const salt=bcrypt.genSaltSync(saltRounds)
    const hashedpassword=bcrypt.hashSync(password,salt)
    const result=validationResult(req)
    const checkUser=await Login.findOne({username})
    if(!result.isEmpty()){
        return res.send(result.array()).status(400)
    }
    if(checkUser){
        console.log(username)
        return res.status(401).send("User exists")
    }
    try{
        const response=new Login({username:username,password:hashedpassword})
        const newUser=await response.save()
        res.send({username:username, password:hashedpassword}).status(201)
}
    catch(err){
        res.send(err).status(500)
        console.log(err)
    }
    
})


export default router 