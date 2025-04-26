import { create } from "zustand"

const useProductStore = create((set) => ({
  product: [],
  setProduct: (product) => set({ product }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "please fill all fields! 🤕 " }
    }

    const response = await fetch("/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })

    const data = await response.json()
    set((state) => ({ product: [...state.product, data.data] }))
    return { success: true, message: "product created successfully 🥳" }
  },
  fetchProducts: async () => {
    const respose = await fetch("/api/v1/products")
    const data = await respose.json()
    set({ products: data.data })
  },
  deleteProducts: async (pid) => {
    const response = await fetch(`/api/v1/products/${pid}`, {
      method: "DELETE"
    })
    const data = await response.json()

    if (!data.success) return { success: false, message: data.message }

    set(state => ({ products: state.products.filter(product => product._id !== pid) }))
    return { success: true, message: data.message }

  }

}))

export { useProductStore }