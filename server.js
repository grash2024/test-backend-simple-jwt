import express from "express";
import connectDB from "./helpers/connectDB.js";
import router from "./routers/users.routers.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT_NO;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/auth", router);
app.listen(port, () => {
	connectDB(uri);
	console.log("connected to port", port);
});
