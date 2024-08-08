import { useContext, useState } from "react";
import InputOtorisasi from "../components/InputOtorisasi";
import { ApiContext } from "../context/ApiContext";
import Loading from "../components/Loading";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Otorisasi() {
    const { api } = useContext(ApiContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    async function masuk(e) {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await api.post('/otorisasi', { username, sandi: password })
            const token = response.data.accessToken
            localStorage.setItem('token', token)
            const decoded = jwtDecode(token)
            localStorage.setItem('username', decoded.username)
            navigate("/")
        } catch (error) {
            setError(error)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <Loading />

    return (
        <div className="flex items-center justify-center h-screen">
            <InputOtorisasi login={masuk} setPassword={setPassword} setUsername={setUsername} />
        </div>
    );
}

export default Otorisasi;