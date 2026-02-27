const express = require("express");

const { authMe, logout, updateProfile } = require("../controllers/authController.js");
const { multerMiddleware } = require("../config/cloudinaryConfig.js");
const { authMiddleware } = require("../middlewares/authMiddleware.js");
const router = express.Router();

//health route
router.get("/health", (req, res) => {
    res.send("OK");
})

//auth routes
router.post("/", authMe);
router.get("/logout", logout);
router.post("/update", authMiddleware, multerMiddleware, updateProfile);

module.exports = router;