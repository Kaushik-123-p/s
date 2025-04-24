import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/db.js"
import productRouters from "./routers/products.routes.js"


dotenv.config()

const app = express()

app.use(express.json())

app.use("/api/v1/products", productRouters)

app.listen(5000, () => {
  connectDB()
  console.log("server runing at http://localhost:5000")
})