const response = require("../utils/responseHandler.js");

const authMe = async (req, res) => {
    try {

    } catch (error) {
        console.error("Internal Server Error at authController authMe");
        return response(res, 500, "Internal Server Error", null);
    }
}

module.exports = {
    authMe
}