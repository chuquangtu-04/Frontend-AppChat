import { Routes, Route } from "react-router-dom"
import Auth from "./pages/auth/Auth"
import Home from "~/pages/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
    </Routes>
  )
}

export default App
