import MainLayout from "../layouts/MainLayout";
import TableMail from "../components/TableMail";
import TableHeader from "../components/TableHeader";
import { useEffect, useState, useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import Loading from "../components/Loading";
import TableFooter from "../components/TableFooter";
import { jwtDecode } from "jwt-decode";


function Home() {
    const { api } = useContext(ApiContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [emails, setEmails] = useState([])
    const [page, setPage] = useState(1)
    const [totalData, setTotalData] = useState()
    const [totalPage, setTotalPage] = useState()

    async function fetchData(page) {
        try {
            setLoading(true)
            const response = await api.get(`/email?page=${page}`)
            setEmails(response.data.emails)
            setTotalData(response.data.totalEmails)
            setPage(response.data.page)
            setTotalPage(response.data.totalPages)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(page)
    }, [])

    if (loading) return <Loading />

    return (
        <MainLayout>
            <div className="my-4 max-w-screen-lg mx-auto">
                <TableHeader />
                <TableMail data={emails} currentPage={page} />
                <TableFooter totalData={totalData} currentPage={page} totalPage={totalPage} fetchData={fetchData} />
            </div>
        </MainLayout>
    );
}

export default Home;