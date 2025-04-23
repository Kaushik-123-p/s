import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/db.js"

dotenv.config()

const app = express()

app.get("/", (req, res) => {
  res.send("Server is ready")
})

app.listen(5000, () => {
  connectDB()
  console.log("server runing at http://localhost:5000")
})