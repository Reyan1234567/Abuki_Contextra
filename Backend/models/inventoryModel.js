import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  paint_id: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },

  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  
  brand: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  color: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  notes: {
    type: mongoose.Schema.Types.String,
    required: false,
  },
});

const Inventory = mongoose.model("inventories", inventorySchema);
export default Inventory;
