import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
