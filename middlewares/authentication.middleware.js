import jsonWebToken from "jsonwebtoken";
import User from "../models/users.model.js";
const authentication = async (req, res, next) => {
	try {
		const { user } = req.cookies;
		if (req.body) {
			return next();
		}
		if (!user) {
			return next();
		} else {
			const { email } = jsonWebToken.verify(user, process.env.JWT_SECRET_KEY);
			console.log(email);
			let data = await User.findOne({ email });
			return res.status(200).json(data);
		}
	} catch (err) {
		return next();
	}
};

export default authentication;
