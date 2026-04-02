import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./pages/login"
import { SignUp } from "./pages/sign-up"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}