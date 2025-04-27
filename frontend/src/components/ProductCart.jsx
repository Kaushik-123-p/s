import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useProductStore } from '../store/product';
import toast from 'react-hot-toast';

const ProductCart = ({ product }) => {
  const { deleteProducts, updateProduct } = useProductStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product)

  const deleteProductFn = async (pid) => {
    const { success } = await deleteProducts(pid);

    if (!success) {
      toast.error("Product not found!");
    } else {
      toast.success("Product deleted successfully.");
    }
  };


  const updateProductBtn = async (pid, updatedProduct) => {
    const { success } = await updateProduct(pid, updatedProduct)
    setIsModalOpen(false)
    if (!success) {
      toast.error("Product not updated!");
    } else {
      toast.success("Product updated successfully.");
    }
  }

  return (
    <>
      <div className="bg-gray-800 hover:bg-gray-950 rounded-lg shadow-xl w-80 hover:shadow-2xl hover:scale-105 transition-all duration-500">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-2 flex flex-col justify-between h-28">
          <h3 className="text-lg font-semibold text-white">{product.name}</h3>
          <p className="text-gray-400">₹{product.price}</p>

          <div className="flex gap-3">
            <button
              className="text-blue-600 hover:text-blue-800 text-xl"
              onClick={() => setIsModalOpen(true)}
            >
              <FaEdit />
            </button>
            <button
              className="text-red-600 hover:text-red-800 text-xl"
              onClick={() => deleteProductFn(product._id)}
            >
              <RiDeleteBin5Line />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
          <div className="bg-gray-700 rounded-lg shadow-lg w-full max-w-md p-6 mx-4">
            <div className="text-xl font-semibold text-white mb-4">
              ✏️ Edit Product Info
            </div>
            <div className='flex flex-col gap-2 mb-3'>
              <input
                type="text"
                placeholder='Product Name'
                name="name"
                value={updatedProduct.name}
                onChange={(e) => setUpdatedProduct({ ...updateProduct, name: e.target.value })}
                className=' p-2 border-2 border-gray-500 rounded-sm w-full focus:outline-none focus:ring-2 focus:bg-gray-900 placeholder-gray-400 ' />

              <input
                type="text"
                placeholder='Price'
                name="name"
                value={updatedProduct.price}
                onChange={(e) => setUpdatedProduct({ ...updateProduct, price: e.target.value })}
                className='p-2 border-2 border-gray-500 rounded-sm w-full focus:outline-none focus:ring-2 placeholder-gray-400 focus:bg-gray-900' />

              <input
                type="text"
                placeholder='Image URL'
                name="name"
                value={updatedProduct.image}
                onChange={(e) => setUpdatedProduct({ ...updateProduct, image: e.target.value })}
                className='p-2 border-2 border-gray-500 rounded-sm w-full focus:outline-none focus:ring-2 placeholder-gray-400 focus:bg-gray-900' />

            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-100  hover:bg-red-400 hover:text-white rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => updateProductBtn(product._id, updatedProduct)}
                className="px-4 py-2 text-sm text-white bg-green-600 hover:bg-green-700 rounded-md"

              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCart;
