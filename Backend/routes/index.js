import {Router} from "express"
import soldRouter from "./sold.js"
import boughtRouter from "./bought.js"
import inventoryRouter from "./inventory.js"
const router=Router()

router.use(soldRouter)
router.use(boughtRouter)
router.use(inventoryRouter)


export default router