import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("CleanAir Hub Backend Running");
});

// AI routes
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
