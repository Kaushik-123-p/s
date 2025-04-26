import React, { useState } from 'react'
import { useProductStore } from '../store/product'
import toast from 'react-hot-toast'

const CreatePage = () => {


  const [newProduct, setNewProduct] = useState(
    {
      name: "",
      price: "",
      image: ""
    }
  )

  const { createProduct } = useProductStore()

  const addProductButton = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      toast.error("Please fill in all fields.")
      return
    }

    try {
      const { success, message } = await createProduct(newProduct)

      if (!success) {
        toast.error(message || "Failed to create product.")
      } else {
        toast.success("Product created successfully!")
        setNewProduct({ name: "", price: "", image: "" })
      }
    } catch (error) {
      toast.error("An unexpected error occurred.")
      console.error(error)
    }
  }

  return (
    <div className='container text-white flex flex-col items-center justify-center w-full max-w-[850px] px-4 py-10 mt-20 mx-auto' >
      <h1 className='text-2xl lg:text-4xl font-bold m-10'>Create New Product</h1>
      <div className='bg-gray-800 w-full flex flex-col items-center justify-center gap-5 p-6 border border-gray-700 text-lg font-semibold rounded-md'>

        <input
          type="text"
          placeholder='Product Name'
          name="name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className=' p-2 border-2 border-gray-500 rounded-sm w-full focus:outline-none focus:ring-2 focus:bg-gray-900 placeholder-gray-400 ' />



        <input
          type="text"
          placeholder='Price'
          name="name"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className='p-2 border-2 border-gray-500 rounded-sm w-full focus:outline-none focus:ring-2 placeholder-gray-400 focus:bg-gray-900' />



        <input
          type="text"
          placeholder='Image URL'
          name="name"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          className='p-2 border-2 border-gray-500 rounded-sm w-full focus:outline-none focus:ring-2 placeholder-gray-400 focus:bg-gray-900' />

        <button
          onClick={addProductButton}
          className='bg-cyan-600 w-full p-2 rounded-sm text-xl text-gray-800 font-bold cursor-pointer'>
          Add Product
        </button>
      </div>

    </div>
  )
}

export default CreatePage