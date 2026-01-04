import express from "express";

const router = express.Router();

router.post("/review-summary", async (req, res) => {
  const { reviews } = req.body;

  if (!reviews) {
    return res.status(400).json({ error: "Reviews text required" });
  }

  // Dummy AI logic
  const summary = "The product works well but is considered expensive.";

  res.json({ summary });
});

export default router;
