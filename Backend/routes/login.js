import { Router } from "express";
import Login from "../models/loginModel";
import { createLoginSchema } from "../Schemas/loginSchema";
const router = Router();

router.post("/login", checkSchema(createLoginSchema), async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).send({ errors: result.array() });
      }
  try {
    const response = new Login(req.body);
    const newLogin = response.save();
  } catch (err) {
    res.send(err.message);
    console.log(err);
  }
});
