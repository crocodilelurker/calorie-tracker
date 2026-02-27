const mongoose = require("mongoose");
const reportSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    reportLink: {
        type: String,
        required: true
    },
    reportType: {
        type: String,
        enum: ["weekly", "monthly"],
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    reportName: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;