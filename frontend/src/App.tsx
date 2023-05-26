// import { Routes, Route } from "react-router-dom"
// import HomeView from "./routes/HomeView"
// import CategoriesView from "./routes/CategoriesView"
// import DetailPage from "./routes/DetailPage"
// import { useEffect, useState } from "react"

// interface Category {
//   category_id: number
//   name: string
//   image: string
// }

// function App() {
//   const [categories, setCategories] = useState<Category[]>([])

//   useEffect(() => {
//     fetchCategories()
//   }, [])

//   const fetchCategories = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/categories")
//       const data = await response.json()
//       setCategories(data)
//     } catch (error) {
//       console.error("Error fetching categories:", error)
//     }
//   }

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<HomeView />} />
//         <Route
//           path={`/${category.name.toLowerCase()}`}
//           element={<CategoriesView />}
//         />
//         <Route path="/detail" element={<DetailPage />} />
//       </Routes>
//     </>
//   )
// }

// export default App

import { Routes, Route } from "react-router-dom"
import HomeView from "./routes/HomeView"
import CategoriesView from "./routes/CategoriesView"
import DetailPage from "./routes/DetailPage"
import { useEffect, useState } from "react"

interface Category {
  category_id: number
  name: string
  image: string
}

function App() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    fetchCategories()
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

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
        {categories.map((category) => (
          <Route
            key={category.category_id}
            path={`/${category.name.toLowerCase()}`}
            element={<CategoriesView />}
          />
        ))}
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </>
  )
}

export default App
