import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/db.js"
import { Product } from "./models/product.models.js"
import mongoose from "mongoose"


dotenv.config()

const app = express()

app.use(express.json())

app.get("/api/v1/getproducts", async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json({ success: true, data: products })
  } catch (error) {
    console.log("error in feaching products!", error.message)
    res.status(500).json({ success: false, message: "Server Error!" })
  }
})

// ---------------------------------------------------------------------
app.post("/api/v1/products", async (req, res) => {
  const product = req.body

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ success: false, message: "Please Provide all fields!" })
  }

  const newProduct = new Product(product)

  try {
    await newProduct.save()
    res.status(201).json({ success: true, data: newProduct })
  } catch (error) {
    console.error("Error create in product : ", error.message)
    res.status(500).json({ success: false, message: "Server FAILED!" })
  }

})

// -----------------------------------------------------------------------
app.put("/api/v1/products/:id", async (req, res) => {
  const { id } = req.params

  const products = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "invalid product id" })
  }


  try {
    const updetedProduct = await Product.findByIdAndUpdate(id, products, { new: true })
    res.status(200).json({ success: true, data: updetedProduct })
  } catch (error) {
    console.log("error in updation products", error.message)
    res.status(500).json({ success: true, message: "server error" })
  }
})


// -----------------------------------------------------------------------
app.delete("/api/v1/products/:id", async (req, res) => {
  const { id } = req.params
  console.log("id", id)

  try {
    await Product.findByIdAndDelete(id)
    res.status(200).json({ success: true, message: "Product deleted successfuly." })
  } catch (error) {
    console.log("Error  indeleting produc :", error.message)
    res.status(404).json({ success: false, message: "product not found!" })
  }
})

app.listen(5000, () => {
  connectDB()
  console.log("server runing at http://localhost:5000")
})