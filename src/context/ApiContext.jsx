import axios from "axios";
import { createContext } from "react";

const ApiContext = createContext()
const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token")
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`
//         }
//         return config
//     },
//     (error) => {
//         return Promise.reject(error)
//     }
// )

function ApiProvider({ children }) {
    return (
        <ApiContext.Provider value={axiosInstance}>
            {children}
        </ApiContext.Provider>
    )
}

export { ApiContext, ApiProvider };