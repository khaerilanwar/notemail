import { useContext, useEffect, useState } from "react";
import InputOtorisasi from "../components/InputOtorisasi";
import { ApiContext } from "../context/ApiContext";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Otorisasi() {
    const { api } = useContext(ApiContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const username = localStorage.getItem('username')

        if (token && username) navigate("/")
    }, [])

    async function masuk(e) {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await api.post('/otorisasi', { username: username.toLowerCase(), password })
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

    return (
        <div className="flex items-center justify-center h-screen">
            <InputOtorisasi login={masuk} setPassword={setPassword} setUsername={setUsername} loading={loading} />
        </div>
    );
}

export default Otorisasi;