const response = require("../utils/responseHandler.js");
const User = require("../models/User.js")
const { generateToken } = require("../utils/generateToken.js");
const bcrypt = require("bcrypt")

const authMe = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return response(res, 400, "Email and Password are required", null);
        const user = await User.findOne({ email });
        if (!user) {
            //User is new , we make him log in 
            const hashedPassword = await bcrypt.hash(password, 10);
            let newUser = new User({
                email: email,
                password: hashedPassword
            })
            await newUser.save();
            const token = generateToken(newUser._id);
            //set token to cookie 
            res.cookie("x-auth-token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
                maxAge: 30 * 24 * 60 * 60 * 1000
            });
            return response(res, 201, " Login By User Created Success", {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                token: token
            })
        }
        else {
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return response(res, 401, "You Gave the Wrong Password", null);
            }
            const token = generateToken(user._id);
            //set token to cookie 
            res.cookie("x-auth-token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
                maxAge: 30 * 24 * 60 * 60 * 1000
            });
            return response(res, 200, "Login Success", {
                _id: user._id,
                name: user.name,
                email: user.email,
                token: token
            })
        }
    } catch (error) {
        console.error("Internal Server Error at authController authMe", error);
        return response(res, 500, "Internal Server Error authMe", null);
    }
}
const updateProfile = async (req, res) => {

}
const logout = async (req, res) => {
    //set x-auth-token to null and expire immediately 
    res.cookie("x-auth-token", null, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
        maxAge: 0
    });
    return response(res, 200, "Logout Success", null);
}
module.exports = {
    authMe,
    updateProfile,
    logout
}