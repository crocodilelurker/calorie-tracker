const mongoose = require("mongoose");

const macroSchema = new mongoose.Schema({
  protein: { type: Number, default: 0 },
  carbs: { type: Number, default: 0 },
  fats: { type: Number, default: 0 }
}, { _id: false });

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  calories: {
    type: Number,
    default: 0
  },
  macros: {
    type: macroSchema,
    default: () => ({})
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

mealSchema.pre("validate", function (next) {
  if (!this.name && !this.image) {
    return next(new Error("Either meal name or image must be provided"));
  }
  next();
});

module.exports = mongoose.model("Meal", mealSchema);