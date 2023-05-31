import { Routes, Route } from "react-router-dom"
import HomeView from "./routes/HomeView"
import CategoriesView from "./routes/CategoriesView"
import DetailPage from "./routes/DetailPage"
import { useEffect, useState } from "react"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

interface Category {
  category_id: number
  name: string
  image: string
}

interface Product {
  product_id: number
  category_id: number
  name: string
  image: string
}

function App() {
  const [categories, setCategories] = useState<Category[]>([])
  const [, setProduct] = useState<Product[]>([])

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:3000/categories")
      const data = await response.json()
      setCategories(data)
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  const fetchProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/product/")
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.error("Error fetching product:", error)
    }
  }

  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<HomeView />} />
        {categories.map((category) => (
          <Route
            key={category.category_id}
            path="/categories/:category"
            element={<CategoriesView />}
          />
        ))}
        <Route path="/product/:product" element={<DetailPage />} />
      </Routes>
    </ShoppingCartProvider>
  )
}

export default App
