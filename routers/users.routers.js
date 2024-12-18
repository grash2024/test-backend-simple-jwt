import express from "express";
import {
	handleLogin,
	handleRegister,
} from "../controllers/users.controller.js";
import authentication from "../middlewares/authentication.middleware.js";
const router = express();
router.get("/login", authentication, handleLogin);
router.route("/register").get(handleRegister);
export default router;
