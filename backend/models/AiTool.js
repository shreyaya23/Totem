const mongoose = require("mongoose");


const AIToolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  features: [String],
  useCases: [String],
});


const AITool = mongoose.model("AITool", AIToolSchema);
module.exports = AITool;