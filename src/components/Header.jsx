import { useContext, useState } from 'react';
import notemail from '../assets/notemail.png';
import { Link, useNavigate } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';
import Loading from './Loading';

function Header() {
    const { api } = useContext(ApiContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    async function keluar() {
        setLoading(true)
        try {
            await api.delete("/logout")
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            setLoading(false)
            navigate("/")
        } catch (error) {
            console.error(error)
        }
    }

    if (loading) return <Loading />

    return (
        <header className="max-w-screen-lg mx-auto">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link className="flex items-center space-x-3 rtl:space-x-reverse" to={"/daftar-email"}>
                    <img src={notemail} className="h-8" alt="Notemail Logo" />
                    <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">NOTEMAIL</span>
                    <img src={notemail} className="h-8" alt="Notemail Logo" />
                </Link>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <button onClick={keluar} className='text-sm text-white bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded-md'>
                        Keluar
                    </button>
                </div>
            </div>
        </header>

    );
}

export default Header;