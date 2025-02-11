import { Router } from "express";
import Login from "../models/loginModel.js";
import { createLoginSchema } from "../Schemas/loginSchema.js";
import { body, validationResult, checkSchema } from "express-validator";
import session from "express-session";
import bcrypt from "bcrypt";
import passport from "passport"
import "../Strategies/localStrategies.js"

const router = Router();
router.use(
  session({
    secret: "asojghpghpsogjakd",
    saveUnitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000,
    },
  })
);

router.use(passport.initialize())
router.use(passport.session())


router.post("/login",passport.authenticate("local"),(req,res)=>{
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

export const loginMiddleware = (req, res, next) => {
  if (req.session.user.id) {
    next();
  } else {
    res.send("Not found").status(400);
  }
};
export default router;
