import express from "express";
import OpenAI from "openai";

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/review-summary", async (req, res) => {
  try {
    const { reviews } = req.body;

    if (!reviews) {
      return res.status(400).json({ error: "Reviews text required" });
    }

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `Summarize this customer review briefly:\n\n${reviews}`,
    });

    const summary = response.output_text;

    res.json({ summary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI summary failed" });
  }
});

export default router;
