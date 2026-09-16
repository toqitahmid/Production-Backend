import dotenv from "dotenv";
import connectDB from "./db/index_DB.js";

dotenv.config({
    path: './env'
})
connectDB();