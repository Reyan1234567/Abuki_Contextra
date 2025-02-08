import express from "express"
import connect from "./config/db.js"
import routes from "./routes/index.js"


const app=express();
app.use(express.json())
connect()
app.use(routes)




app.listen(9000,()=>{console.log("connected")})