import { Router } from "express";
import Inventory from "../models/inventoryModel.js";
const router = Router();

router.get("/api/inventory", async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.status(200).json(inventory);
  } catch (err) {
    res.status(400).send("Error finding inventories: ", err.message);
  }
});

export default router;
