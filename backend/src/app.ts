import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/usersRouter";
import cors from "cors";
import { connectDB } from "./config/dbConfig";
dotenv.config({ path: "./config.env" });

const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.use("/api/users", userRouter);

app.listen(process.env.PORT, () => {
    console.log("started successfully");
});
