const express = require("express");
const router = express.Router();
const { recommendAITools } = require("../utils/recommender.js");


router.post("/get-tools", async (req, res) => {
  console.log("Request received:", req.body); 
  const { need } = req.body;

  try {
    const tools = await recommendAITools(need);
    console.log("Tools found:", tools); 
    if (tools.length === 0) {
      console.log("No tools found for need:", need); 
      return res.status(404).json({ message: "No tools found matching your need" });
    }

    res.json({ tools });
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).json({ error: error.message });
  }
});


module.exports = router; 