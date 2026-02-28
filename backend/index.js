const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const connectDB = require("./config/db.js");
const authRouter = require("./routers/authRouter.js");
const response = require("./utils/responseHandler.js");

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());

app.get("/health", (req, res) => {
    return response(res, 200, "Server is healthy", null)
})

app.use("/api/auth", authRouter);
const PORT = process.env.PORT || 3000;

connectDB().then();
app.listen(PORT, () => {
    console.log("Express Backend Running at PORT:", PORT);
})

module.exports = app;
