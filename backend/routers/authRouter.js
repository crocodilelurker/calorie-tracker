const express = require("express");

const { authMe, logout, updateProfile } = require("../controllers/authController.js");

const router = express.Router();

//health route
router.get("/health", (req, res) => {
    res.send("OK");
})

//auth routes
router.post("/", authMe);
router.get("/logout", logout);
router.post("/updateProfile", updateProfile);

module.exports = router;