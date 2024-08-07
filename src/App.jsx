import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Otorisasi from "./pages/Otorisasi"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Update from "./pages/Update"
import AddMail from "./pages/AddMail"
import { ApiProvider } from "./context/ApiContext"
import { EmailProvider } from "./context/EmailContext"
import Loading from "./components/Loading"
import PageNotFound from "./pages/PageNotFound"

function App() {

  return (
    <ApiProvider>
      <EmailProvider>
        <Router>
          <Routes>
            <Route path="/loading" element={<Loading />} />
            <Route path="/" element={<Home />} />
            <Route path="/otorisasi" element={<Otorisasi />} />
            <Route path="/detail/:_id" element={<Detail />} />
            <Route path="/update/:_id" element={<Update />} />
            <Route path="/add" element={<AddMail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </EmailProvider>
    </ApiProvider>
  )
}

export default App
