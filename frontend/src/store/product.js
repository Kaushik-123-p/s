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
  }
}))

export { useProductStore }