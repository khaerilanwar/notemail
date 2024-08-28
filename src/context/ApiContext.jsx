import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext } from "react";
import Swal from "sweetalert2";

const baseURL = "https://notemails-e6d0a4f82467.herokuapp.com/"

const ApiContext = createContext()
const axiosInstance = axios.create({
    baseURL,
    withCredentials: true
})

axiosInstance.interceptors.request.use(
    async (config) => {
        // Mendapatkan token yang disimpan di local storage
        const token = localStorage.getItem("token")
        if (token) {
            // Mengecek apakah token sudah kadaluarsa
            const expiration = jwtDecode(token).exp * 1000
            if (Date.now() >= expiration) {
                localStorage.removeItem("token")
                try {
                    const response = await axiosInstance.get("/token")
                    const newToken = response.data.accessToken
                    localStorage.setItem("token", newToken)
                    console.log("Dapet token baru!")
                    config.headers.Authorization = `Bearer ${newToken}`
                } catch (error) {
                    console.error("Gagal mendapatkan token!", error)
                    localStorage.removeItem("token")
                    throw error
                }
            } else {
                config.headers.Authorization = `Bearer ${token}`
            }
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        const originalRequest = error.config

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            try {
                const response = await axiosInstance.get("/token")
                const newToken = response.data.accessToken
                localStorage.setItem("token", newToken)
                console.log("Dapet token baru!")
                axios.defaults.headers['Authorization'] = `Bearer ${newToken}`
                originalRequest.headers['Authorization'] = `Bearer ${newToken}`
                return axiosInstance(originalRequest)
            } catch (error) {
                console.error("Gagal dapat token baru!", e)
                return Promise.reject(error)
            }
        } else {
            if (error.response.data.message) {
                // Sweet Alert
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });

                Toast.fire({
                    icon: "error",
                    title: error.response.data.message
                });
            }
        }

        return Promise.reject(error)
    }
)

function ApiProvider({ children }) {
    return (
        <ApiContext.Provider value={{ api: axiosInstance, baseURL }}>
            {children}
        </ApiContext.Provider>
    )
}

export { ApiContext, ApiProvider };