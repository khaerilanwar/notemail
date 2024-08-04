import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Otorisasi from "./pages/Otorisasi"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Update from "./pages/Update"
import AddMail from "./pages/AddMail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otorisasi" element={<Otorisasi />} />
        <Route path="/detail/:email" element={<Detail />} />
        <Route path="/update/:email" element={<Update />} />
        <Route path="/add" element={<AddMail />} />
      </Routes>
    </Router>
  )
}

export default App
