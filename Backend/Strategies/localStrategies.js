import passport from "passport";
import { Strategy } from "passport-local";
import Login from "../models/loginModel.js";

passport.serializeUser((user,done)=>{
    done(null, user._id)
})
passport.deserializeUser((id,done)=>{
    try{
        const user=Login.findById(id)
        done(null,user)
    }
    catch(err){
        done(err,null)
    }
})

export default passport.use(
  new Strategy((username, password, done) => {
    try {
      const user = Login.findOne({ username: username });
      if (!response) throw new Error("user not found");
      if (response.password !== password) throw Error("Invalid credentials");
      done(null, user);
    } catch (err) {
        done(err,null)
    }
  })
);
