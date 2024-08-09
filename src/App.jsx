import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Otorisasi from "./pages/Otorisasi"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Update from "./pages/Update"
import AddMail from "./pages/AddMail"
import { ApiProvider } from "./context/ApiContext"
import PageNotFound from "./pages/PageNotFound"
import ProtectedRoutes from "./utils/ProtectedRoutes"

function App() {

  return (
    <ApiProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Otorisasi />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/daftar-email" element={<Home />} />
            <Route path="/detail/:_id" element={<Detail />} />
            <Route path="/update/:_id" element={<Update />} />
            <Route path="/add" element={<AddMail />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ApiProvider>
  )
}

export default App
