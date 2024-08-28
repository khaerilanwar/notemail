import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext } from "react";
import Swal from "sweetalert2";
import { useState } from "react";

// const baseURL = "https://notemails-e6d0a4f82467.herokuapp.com/"
const baseURL = "http://localhost:3000/"

let isRefreshing = false;
let refreshSubscribers = [];

// Fungsi untuk menambahkan subscriber ke antrian
function subscribeTokenRefresh(cb) {
    refreshSubscribers.push(cb);
}

// Fungsi untuk mengosongkan antrian dan mengirim ulang semua permintaan yang menunggu
function onRefreshed(token) {
    refreshSubscribers.map((cb) => cb(token));
    refreshSubscribers = [];
}

const ApiContext = createContext()
const axiosInstance = axios.create({
    baseURL,
    withCredentials: true
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { config, response } = error;
        const originalRequest = config;

        if (response.status === 401 && !originalRequest._retry) {
            if (!isRefreshing) {
                isRefreshing = true;
                originalRequest._retry = true;

                return new Promise((resolve, reject) => {
                    axios
                        .get('/token') // Endpoint untuk memperbarui token
                        .then(({ data }) => {
                            localStorage.setItem('token', data.accessToken);
                            axiosInstance.defaults.headers['Authorization'] =
                                'Bearer ' + data.accessToken;
                            onRefreshed(data.accessToken);
                            resolve(api(originalRequest));
                        })
                        .catch((err) => {
                            reject(err);
                        })
                        .finally(() => {
                            isRefreshing = false;
                        });
                });
            }

            // Menunggu pembaruan token selesai
            return new Promise((resolve) => {
                subscribeTokenRefresh((token) => {
                    originalRequest.headers['Authorization'] = 'Bearer ' + token;
                    resolve(axiosInstance(originalRequest));
                });
            });
        }

        return Promise.reject(error);
    }
)

function ApiProvider({ children }) {
    const [messageApi, setMessageApi] = useState()

    return (
        <ApiContext.Provider value={{ api: axiosInstance, baseURL, messageApi, setMessageApi }}>
            {children}
        </ApiContext.Provider>
    )
}

export { ApiContext, ApiProvider };