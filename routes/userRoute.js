import express from "express";
import { loginController, registerController } from "../controllers/userController.js";

const router = express.Router();

router
    .post("/login", loginController)
    .post("/register", registerController);

export default router;
    