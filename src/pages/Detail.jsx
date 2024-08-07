import MainLayout from "../layouts/MainLayout";
import DetailMail from "../components/DetailMail";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import Loading from "../components/Loading";

function Detail() {
    const api = useContext(ApiContext)
    const { _id } = useParams()
    const [loading, setLoading] = useState(true)
    const [mailData, setMailData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        const getMail = async () => {
            try {
                const response = await api.get(`/email/${_id}`)
                setMailData(response.data)
            } catch (error) {
                console.log(error)
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
                <DetailMail data={mailData} />
            </div>
        </MainLayout>
    );
}

export default Detail;