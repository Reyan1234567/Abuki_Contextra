import {Router} from "express"
import sold from "../models/soldModel.js"
const router=Router();

router.get("/api/sold",async(req,res)=>{
    try{
        const Sold=await sold.find()
        res.json(Sold).status(200)
    }
    catch(err){
        console.log("Error finding solds ",err.message)
        res.send(err).status(500)
    }
})

export default router