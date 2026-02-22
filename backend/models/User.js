const { default: mongoose } = require("mongoose");


const macroSchema = new mongoose.Schema({
    protein: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
    fats: { type: Number, default: 0 }
}, { _id: false });

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    isNewUser: {
        type: Boolean,
        default: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        default: ""
    },
    profilePhoto: {
        type: String,
        default: ""
    },
    weight: {
        type: Number,
        default: 0
    },
    height: {
        type: Number,
        default: 0
    },
    age: {
        type: Number,
        default: 0
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    activityLevel: {
        type: String,
        enum: ["Low", "Medium", "High"],
        required: true
    },
    BMR: {
        type: Number,
        default: 0
    },
    TDEE: {
        type: Number,
        default: 0
    },
    goal: {
        type: String,
        enum: ["Weight Loss", "Weight Gain", "Maintenance", "Aggressive Weight Loss"],
        required: true
    },
    targetCalories: {
        type: Number,
        default: 0
    },
    targetMacros: macroSchema,
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plan"
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

module.exports = User;