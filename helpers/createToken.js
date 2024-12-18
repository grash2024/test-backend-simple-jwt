import jsonWebToken from "jsonwebtoken";
const createToken = (res, email) => {
	const token = jsonWebToken.sign({ email }, process.env.JWT_SECRET_KEY);
	res.cookie("user", token);
};
export default createToken;
