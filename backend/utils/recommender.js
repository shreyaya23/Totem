const AITool = require("../models/AiTool.js");

async function recommendAITools(userNeeds) {
  console.log("Searching tools for:", userNeeds); 
  const tools = await AITool.find({
    $or: [
      { category: { $regex: userNeeds, $options: "i" } },
      { features: { $regex: userNeeds, $options: "i" } },
      { useCases: { $regex: userNeeds, $options: "i" } },
    ],
  });
  console.log("Found tools:", tools); 
  return tools;
}


module.exports = { recommendAITools };
