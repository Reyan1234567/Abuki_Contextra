import {Router} from "express"
import soldRouter from "./sold.js"
import boughtRouter from "./bought.js"
import inventoryRouter from "./inventory.js"
import loginRouter from "./login.js"
import registerRouter from "./register.js"
const router=Router()

router.use(soldRouter)
router.use(boughtRouter)
router.use(inventoryRouter)
router.use(loginRouter)
router.use(registerRouter)

export default router