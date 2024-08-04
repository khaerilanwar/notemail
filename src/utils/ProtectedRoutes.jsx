import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
    const isAuth = false;

    if (!isAuth) {
        return <Navigate to="/otorisasi" />;
    }

    return <Outlet />;
}

export default ProtectedRoutes;