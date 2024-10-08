import { PostLoginValidation } from "../middlewares/LoginValidation.js";
import {findUser} from "../services/LoginService.js"


export const Login = async (req, res) => {
    try {
        const userDetails = req.body;
        console.log("axioscalls ",userDetails);

        const { error } = PostLoginValidation(userDetails);
        if (error) {
            return res.status(400).json({ message: "Invalid Login Details", error: error.details });
        }
        console.log("the error");
        const userValid = await findUser(userDetails);
        console.log("the error");
        if (!userValid) {
            return res.status(401).json({ message: "Unauthorized Login" });
        }

        return res.status(200).json({ message: "Login Successful" });
    } catch (err) {
        console.error("Error during login:", err);
        return res.status(500).json({ message: "Server error during login" });
    }
}
