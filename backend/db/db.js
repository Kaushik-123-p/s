import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
  try {
    const connectionInstanses = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    console.log("MongoDB connected || DB HOST : ", connectionInstanses.connection.host)

  } catch (error) {
    console.log("MongoDB connection FAILED!!", error.message)
    process.exit(1)
  }
}

export { connectDB }