
require('dotenv').config();

const mongoose = require("mongoose");
const AITool = require("../models/AiTool.js");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error:", err));

// Function to seed AI tools
const seedAITools = async () => {
  const tools = [
    {
      name: "ChatGPT",
      description: "A conversational AI for generating text.",
      category: "NLP",
      features: ["Chatbot", "Text Generation"],
      useCases: ["Customer Support", "Content Creation"],
    },
    {
      name: "TensorFlow",
      description: "An open-source platform for machine learning.",
      category: "Machine Learning",
      features: ["Model Training", "Data Analysis"],
      useCases: ["Image Classification", "Predictive Analysis"],
    },
    {
      name: "OpenCV",
      description: "An open-source computer vision library.",
      category: "Computer Vision",
      features: ["Image Processing", "Object Detection"],
      useCases: ["Face Recognition", "Video Analysis"],
    },
    {
      name: "Hugging Face Transformers",
      description: "A library for state-of-the-art NLP models.",
      category: "NLP",
      features: ["Text Summarization", "Sentiment Analysis"],
      useCases: ["Content Moderation", "Chatbot Development"],
    },
    {
      name: "Scikit-learn",
      description: "A Python library for data analysis and machine learning.",
      category: "Machine Learning",
      features: ["Data Preprocessing", "Model Training"],
      useCases: ["Fraud Detection", "Predictive Modeling"],
    },
    {
      name: "Tableau",
      description: "A powerful data visualization tool.",
      category: "Data Visualization",
      features: ["Interactive Dashboards", "Charts and Graphs"],
      useCases: ["Business Intelligence", "Data Reporting"],
    },
    {
      name: "YOLO (You Only Look Once)",
      description: "A real-time object detection system.",
      category: "Computer Vision",
      features: ["Object Detection", "Real-Time Processing"],
      useCases: ["Surveillance", "Autonomous Vehicles"],
    },
    {
      name: "PyTorch",
      description: "An open-source machine learning library for deep learning.",
      category: "Deep Learning",
      features: ["Model Training", "Neural Networks"],
      useCases: ["Natural Language Processing", "Image Recognition"],
    },
    {
      name: "DALL·E",
      description: "AI for generating images from text descriptions.",
      category: "Generative AI",
      features: ["Image Generation", "Text-to-Image"],
      useCases: ["Creative Design", "Marketing"],
    },
    {
      name: "Keras",
      description: "A deep learning API for building neural networks.",
      category: "Deep Learning",
      features: ["Model Training", "Neural Networks"],
      useCases: ["Medical Image Analysis", "Anomaly Detection"],
    },
  ];


  try {
    const result = await AITool.insertMany(tools);
    console.log("AI Tools seeded successfully:", result);
  } catch (err) {
    console.error("Error seeding AI tools:", err.message);
  } finally {
    mongoose.disconnect(); 
  }
};


seedAITools();
