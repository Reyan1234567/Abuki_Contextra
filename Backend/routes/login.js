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
// router.post("/login", checkSchema(createLoginSchema), async (req, res) => {
//   const { body } = req;
//   const { password, username } = body;
//   console.log(body);
//   const result = validationResult(req);
//   if (!result.isEmpty()) {
//     return res.status(400).send({ errors: result.array() });
//   }
//   const verify=await Login.findOne({"username":username})
//   if(!(verify)){return res.send("User not found").status(404)}
//   const compare=await bcrypt.compare(password, verify?.password)
//   if(compare){
//     try {
//       req.session.user = username;
//       req.session.visited = true;
//       res.status(200).send(body);
//     } catch (err) {
//       res.status(500).send(err.message);
//       console.log(err);
//     }
//   }
// else{
//     console.log(compare, verify.password, password,)
//     res.send("Invalid credentials").status(404)
// }
  
// });


export default router