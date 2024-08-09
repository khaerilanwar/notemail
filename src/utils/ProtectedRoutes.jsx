import { jwtDecode } from "jwt-decode";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    // const expToken = jwtDecode(token).exp * 1000;
    // Jika token sudah kadaluarsa, hapus token dan username dari local storage
    // Dan kembalikan ke halaman otorisasi
    // Anggap saja sudah logout atau sesinya sudah habis
    // const isTokenExpired = Date.now() > expToken;
    // if (isTokenExpired) {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("username");
    // }

    return (
        token && username ? <Outlet /> : <Navigate to="/otorisasi" />
    )
}

export default ProtectedRoutes;