import express from "express";
import { handleLogin, handleRegister } from "../controllers/users.controller";
const router = express();
router.get("/login", handleLogin);
router.route("/register", handleRegister);
export default router;
