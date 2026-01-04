import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CleanAir Hub Backend Running");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from "express";

const router = express.Router();

router.post("/review-summary", async (req, res) => {
  const { reviews } = req.body;

  if (!reviews) {
    return res.status(400).json({ error: "Reviews text required" });
  }

  // Dummy AI logic for now
  const summary = "The product works well but is considered expensive.";

  res.json({ summary });
});

export default router;

