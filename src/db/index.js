import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";

// DB_NAME

const DATABASE_URI = process.env.DATABASE_URI || "mongodb://127.0.0.1:27017"

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${DATABASE_URI}/${DB_NAME}/`)
        console.log("db connection succesfull")

    } catch (error) {
        console.log("databsase:", error)
    }
}
export default connectDB