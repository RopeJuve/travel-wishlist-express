import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import destinationRouter from "./routes/destinationsRouter.js";
import viewsRouter from "./routes/viewsRouter.js";

const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Views routes
app.use("/", viewsRouter);

//API routes
app.use("/api/countries", destinationRouter);

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
