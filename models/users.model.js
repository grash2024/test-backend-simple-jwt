import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: [true, "Email already exist"],
		},
		password: {
			type: String,
			required: [true, "Password is required"],
		},
	},
	{ timestamps: true, versionKey: false }
);
export default mongoose.model("user", UserSchema);
