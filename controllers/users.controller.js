import User from "../models/users.model.js";
import bcrypt from "bcryptjs";
import createToken from "../helpers/createToken.js";
const handleRegister = async (req, res, next) => {
	try {
		const { name, password, email } = req.body;
		if (!(email && password && name)) {
			throw new Error("Email or Password or Name is required ");
		}
		const pass = await bcrypt.hash(password, 10);
		const user = await User.create({ name, password: pass, email });
		user.password = undefined;
		createToken(res, email);
		return res.status(200).json(user);
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
};
const handleLogin = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		if (!(email && password)) {
			throw new Error("Email or Password is required");
		}
		const user = await User.findOne({ email });
		const isPasswordMatch = await bcrypt.compare(password, user.password);
		if (!isPasswordMatch) {
			throw new Error("Password is not matching");
		}
		user.password = undefined;
		createToken(res, email);
		return res.status(200).json(user);
	} catch (err) {
		res.status(400).json({ err: err.message });
	}
};
export { handleLogin, handleRegister };
