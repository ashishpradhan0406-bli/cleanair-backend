import express from "express";
import dotenv from "dotenv";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("CleanAir Hub Backend Running");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
