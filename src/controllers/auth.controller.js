const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model.js");
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existing = await userModel.findOne({ email });

        if (existing) {
            return res.status(400).json({ message: "User already exists" })
        }
        const hashed = await bcrypt.hash(password, 10);

        await userModel.create({
            username, email, password: hashed
        })
        res.json( 
            {
                success: true,
                message: "User registered successfully"

            }

        )
    } catch (err) {
        console.error(err.message);
    }

}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({message: "Invalid credentials" })
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({message: "Invalid credentials" })
        }
        res.json(
            {
                success: true,
                message: "User logged in successfully"

            }

        )
    } catch (err) {
        console.error(err.message);
    }

}