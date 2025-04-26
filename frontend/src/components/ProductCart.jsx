import React from 'react';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useProductStore } from '../store/product';
import toast from 'react-hot-toast'
import { data } from 'react-router-dom';

const ProductCart = ({ product }) => {

  const { deleteProducts } = useProductStore()

  const deleteProductFn = async (pid) => {
    const { success, message } = await deleteProducts(pid)

    if (!success) {
      toast.error("product can not found!")
    } else {
      toast.success("product deleted successfully.")

    }
  }


  return (
    <div className=" bg-gray-800 hover:bg-gray-950 rounded-lg shadow-xl w-80 hover:shadow-2xl hover:scale-105 transition-all duration-500">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-2 flex flex-col  justify-between h-28">

        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-400">₹{product.price}</p>

        <div className="flex   gap-3">
          <button className="text-blue-600 hover:text-blue-800 text-xl">
            <FaEdit />
          </button>
          <button className="text-red-600 hover:text-red-800 text-xl" onClick={() => deleteProductFn(product._id)}>
            <RiDeleteBin5Line />
          </button>

          {/* <button className=" text-xl bg-blue-400 p-1 rounded-md">
            <FaEdit />
          </button>
          <button className="bg-red-400 p-1 rounded-md text-xl">
            <RiDeleteBin5Line />
          </button> */}
        </div>


      </div>
    </div>
  );
};

export default ProductCart;
