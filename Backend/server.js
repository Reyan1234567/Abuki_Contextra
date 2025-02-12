import express from "express";
import connect from "./config/db.js";
import routes from "./routes/index.js";
import session from "express-session";
import MongoStore from "connect-mongo"
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport"

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connect();
app.use(
  session({
    secret: "asojghpghpsogjakd",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000,
    },
    store:MongoStore.create({
        mongoUrl:process.env.MONGO_URI,
    })
    
  })
);

app.use(passport.initialize())
app.use(passport.session())

app.use(routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`connected to  port: ${port}`);
});
