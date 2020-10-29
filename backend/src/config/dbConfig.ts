import mongoose from "mongoose";

export const connectDB = async () => {
    const db = await mongoose.connect(process.env.MONGODB_URL!);
};
