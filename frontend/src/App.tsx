import { Routes, Route } from "react-router-dom"
import HomeView from "./routes/HomeView"
import CategoriesView from "./routes/CategoriesView"
import DetailPage from "./routes/DetailPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/categories" element={<CategoriesView />} />
      <Route path="/detail" element={<DetailPage />} />

    </Routes>
  )
}
export default App
