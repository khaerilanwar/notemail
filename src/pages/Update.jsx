import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import FormMail from "../components/FormMail";
import { ApiContext } from "../context/ApiContext";
import Loading from "../components/Loading";
import { useContext, useState, useEffect } from "react";

function Update() {
    const api = useContext(ApiContext)
    const { _id } = useParams()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [mail, setMail] = useState()

    useEffect(() => {
        const getMail = async () => {
            try {
                const response = await api.get(`/email/${_id}`)
                setMail(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        getMail()
    }, [])

    if (loading) return <Loading />

    return (
        <MainLayout>
            <div className="my-6 flex justify-center">
                <FormMail data={mail} title="Update" />
            </div>
        </MainLayout>
    );
}

export default Update;