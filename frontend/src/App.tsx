import { Routes, Route } from "react-router-dom"
import HomeView from "./routes/HomeView"
import CategoriesView from "./routes/CategoriesView"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/categories" element={<CategoriesView />} />
    </Routes>
  )
}
export default App
