import { Outlet, Navigate } from "react-router-dom";

function AuthRoutes() {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    return (
        !token && !username ? <Outlet /> : <Navigate to="/" />
    )
}

export default AuthRoutes;