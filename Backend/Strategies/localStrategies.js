import passport from "passport";
import { Strategy } from "passport-local";
import Login from "../models/loginModel.js";
import bcrypt from "bcrypt";

passport.serializeUser((user,done)=>{
    console.log("In the serialize user")
    console.log(user)
    done(null, user._id)
})
passport.deserializeUser(async (id,done)=>{
    try{
        console.log("In the deserialize user")
        console.log(id)
        const user=await Login.findById(id)
        done(null,user)
    }
    catch(err){
        done(err,null)
    }
})

export default passport.use(
  new Strategy(async (username, password, done) => {
    try {
      console.log("Inside the verifying function")
      const user = await Login.findOne({ username });
      if (!user) throw new Error("user not found");
      console.log(user.password)
      console.log(password)
      const compare=bcrypt.compareSync(password, user.password)
      console.log(compare)
      if (!compare) {throw Error("Invalid credentials");}
      done(null, user);
    } catch (err) {
        done(err,null)
    }
  })
);


