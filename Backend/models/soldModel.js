import mongoose from "mongoose";

const soldSchema = new mongoose.Schema({
  paint: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  name: { type: mongoose.Schema.Types.String, required: true },
  brand: { type: mongoose.Schema.Types.String, required: true },
  color: { type: mongoose.Schema.Types.String, required: true },
  unit_price: { type: mongoose.Schema.Types.Number, required: true },
  customer: { type: mongoose.Schema.Types.String, required: true },
  sale_date: { type: mongoose.Schema.Types.Date, required: true },
  notes: { type: mongoose.Schema.Types.String},
});

const sold=mongoose.model("sold",soldSchema,"solds")
export default sold