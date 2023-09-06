import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from './mongodb/connect.js';
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);


const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URI);
    app.listen(8080, () => console.log("Server is up on the port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();