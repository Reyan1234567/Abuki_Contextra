import mongoose from "mongoose"

const LoginSchema=new mongoose.Schema({
    username:{type:mongoose.Schema.Types.String, required:true, isUnique:true},
    password:{type:mongoose.Schema.Types.String, required:true, isUnique:true}
})

const Login=mongoose.model("Login",LoginSchema,)

export default Login