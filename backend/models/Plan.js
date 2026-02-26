const planSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ["Weight Loss", "Weight Gain", "Maintenance", "Aggressive Weight Loss"],
        required: true
    },
    calorieAdjustment: {
        type: Number,
        required: true
    },
    macroDistribution: {
        proteinPercent: { type: Number, required: true },
        carbPercent: { type: Number, required: true },
        fatPercent: { type: Number, required: true }
    },
    description: String
}, { timestamps: true });

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;