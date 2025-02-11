import express from "express";
import connect from "./config/db.js";
import routes from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connect();
app.use(routes);


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`connected to  port: ${port}`);
});
