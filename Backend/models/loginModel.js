import mongoose from "mongoose"

const LoginSchema=new mongoose.Schema({
    username:{type:mongoose.Schema.Types.String, required:true, unique: true,},
    password:{type:mongoose.Schema.Types.String, required:true}
})

const Login=mongoose.model("Login",LoginSchema,"Auth")

export default Login