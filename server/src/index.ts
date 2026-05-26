require("dotenv").config();
import express from "express";
import cors from "cors";

import contactRouter from "./routes/contact";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);
app.use(express.json());
app.set("trust proxy", 1);

// Routes
app.use("/api/contact", contactRouter);

// Listen for calls
const PORT = 5000;
const port = process.env.PORT || PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
