import React, { useEffect } from 'react'
import { FaOptinMonster, FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import ProductCart from '../components/ProductCart';

const HomePage = () => {

  const { fetchProducts, products } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  console.log("products", products)

  return (
    <div className=' text-white  flex flex-col items-center justify-center' >
      <div className='flex items-center gap-2 text-lg lg:text-4xl'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>CURRENT PRODUCT </h1>
        <FaShoppingBag className='text-blue-600' />
      </div>

      {
        products && products.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {
            products?.map((product) => (
              <ProductCart key={product._id} product={product} />
            ))
          }
        </div>) : (<div className='mt-32 lg:text-3xl font-semibold'>
          <p>No Products Found 😥
            <Link to={"/create"}> <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 inline-block hover:underline underline-offset-4 decoration-blue-500'>Create a Product</span></Link>
          </p>
        </div>)
      }

    </div>
  )
}

export default HomePage