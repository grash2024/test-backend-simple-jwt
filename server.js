import express from "express";
import connectDB from "./helpers/connectDB.js";
import router from "./routers/users.routers.js";
const app = express();
app.use(express.json());
app.use("/auth", router);
app.listen(port, () => {
	connectDB();
	console.log("connected to port", port);
});
