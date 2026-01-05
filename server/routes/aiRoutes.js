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
      temperature: 0.7, // 🔥 IMPORTANT
      input: [
        {
          role: "system",
          content:
            "You are an assistant that summarizes customer product reviews clearly, mentioning positives and negatives.",
        },
        {
          role: "user",
          content: reviews,
        },
      ],
    });

    // ✅ SAFEST way to extract text
    const summary =
      response.output?.[0]?.content?.[0]?.text ||
      "Unable to generate summary";

    res.json({ summary });
  } catch (error) {
    console.error("AI ERROR:", error);
    res.status(500).json({ error: "AI summary failed" });
  }
});

export default router;
