require("dotenv").config();
import express from "express";
import cors from "cors";

import contactRouter from "./routes/contact";

const app = express();

console.log(process.env.CORS_ORIGIN);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);
app.use(express.json());

// Routes
app.use("/api/contact", contactRouter);

// Listen for calls
const PORT = 5000;
const port = process.env.PORT || PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
