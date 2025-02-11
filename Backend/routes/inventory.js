import { Router } from "express";
import Inventory from "../models/inventoryModel.js";
import { body, validationResult, checkSchema } from "express-validator";
import { createinventorySchema } from "../Schemas/inventorySchema.js";
import {loginMiddleware} from "./login.js"
import session from "express-session";
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

router.get("/api/inventory", loginMiddleware, async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.status(200).json(inventory);
  } catch (err) {
    res.status(400).send("Error finding inventories: ", err.message);
  }
});

router.get("/api/inventory/:id",async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const inventory = await Inventory.findById(id);
    if (!inventory) {
      res.send("couldn't find item with this id").status(404);
    } else {
      res.send(inventory).status(200);
    }
  } catch (err) {
    console.log(err.messgae);
    res.send(err).status(500);
  }
});

router.post(
  "/api/inventory",
  checkSchema(createinventorySchema),
  async (req, res) => {
    const { body } = req;
    const result = validationResult(req);
    console.log(result);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }
    try {
      const inventory = new Inventory(body);
      const newInventory = await inventory.save();
      res.send(newInventory).status(201);
    } catch (err) {
      console.log(err);
      res.send(err.message).status(500);
    }
  }
);

router.patch("/api/inventory/:id", async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  try {
    const inventory = await Inventory.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!inventory) {
      res.send("Not found").status(404);
    }
    else res.send(inventory).status(200);
  } catch (err) {
    console.log(err);
    res.send(err).status(400);
  }
});

router.put("/api/inventory/:id", async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  try {
    const inventory = await Inventory.findByIdAndUpdate(id, body, {
      new: true,
    });
    
    if (!inventory) {
      res.send("Not found").status(404);
    }
    else res.send(inventory).status(200);
  } catch (err) {
    console.log(err);
    res.send(err).status(400);
  }
});

router.delete("/api/inventory/:id", async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const deleted = await Inventory.findByIdAndDelete(id);
    if (!deleted) {
      res.send("Not found").status(404);
    }
    else{
        res.send(`deleted inventory with id ${id}`).status(200)
    }
  } catch (err) {
    console.log(err);
    res.send(err).status(400);
  }
});

export default router;
