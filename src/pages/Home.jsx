import MainLayout from "../layouts/MainLayout";
import TableMail from "../components/TableMail";
import TableHeader from "../components/TableHeader";
import { useEffect, useState, useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import Loading from "../components/Loading";
import TableFooter from "../components/TableFooter";


function Home() {
    const api = useContext(ApiContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [emails, setEmails] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState()

    async function fetchData(page) {
        try {
            setLoading(true)
            const response = await api.get(`/email?page=${page}`)
            setEmails(response.data.emails)
            setTotal(response.data.totalEmails)
            setPage(response.data.page)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) return <Loading />

    return (
        <MainLayout>
            <div className="my-4 max-w-screen-lg mx-auto">
                <TableHeader />
                <TableMail data={emails} currentPage={page} />
                <TableFooter totalData={total} currentPage={page} fetchData={fetchData} />
            </div>
        </MainLayout>
    );
}

export default Home;