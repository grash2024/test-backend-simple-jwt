import mongoose from "mongoose";

const connectDB = async (uri) => {
	try {
		await mongoose.connect(uri);
		console.log("Connected to mongoDB successfully");
	} catch (err) {
		console.log("Unable to connect mongoDB");
	}
};
export default connectDB;
