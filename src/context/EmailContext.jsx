import { createContext, useContext, useState } from "react";
import { ApiContext } from "./ApiContext";

const EmailContext = createContext()

function EmailProvider({ children }) {
    const api = useContext(ApiContext)
    const [email, setEmail] = useState()

    async function getMail(idMail) {
        const response = await api.get(`/email/${idMail}`)
        setEmail(response.data)
    }

    return (
        <EmailContext.Provider value={{ email, getMail }}>
            {children}
        </EmailContext.Provider>
    )
}

export { EmailContext, EmailProvider };