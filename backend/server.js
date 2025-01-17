
require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const recomm = require("./routes/recomm.js")
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error:", err));


// Routes
app.get("/", (req, res) => {
    res.send("Server is running!");
  });
  
app.use("/api/recommendations", recomm);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
