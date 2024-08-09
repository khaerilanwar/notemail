import MainLayout from "../layouts/MainLayout";
import TableMail from "../components/TableMail";
import TableHeader from "../components/TableHeader";
import { useEffect, useState, useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import Loading from "../components/Loading";
import TableFooter from "../components/TableFooter";
import Swal from "sweetalert2";


function Home() {
    const { api, messageApi } = useContext(ApiContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [emails, setEmails] = useState([])
    const [page, setPage] = useState(1)
    const [totalData, setTotalData] = useState()
    const [totalPage, setTotalPage] = useState()
    const [search, setSearch] = useState('')

    async function fetchData(page) {
        try {
            setLoading(true)
            const response = await api.get(`/email?page=${page}}`)
            setEmails(response.data.emailsDecrypted)
            setTotalData(response.data.totalEmails)
            setPage(response.data.page)
            setTotalPage(response.data.totalPages)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    async function handleSearch(e) {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await api.get(`/email?page=${page}}&search=${search}`)
            setEmails(response.data.emailsDecrypted)
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

        if (messageApi) {
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
                icon: messageApi.status,
                title: messageApi.message
            });
        }
    }, [])

    if (loading) return <Loading />

    return (
        <MainLayout>
            <div className="my-4 max-w-screen-lg mx-auto">
                <TableHeader search={search} setSearch={setSearch} handleSearch={handleSearch} reset={fetchData} />
                <TableMail data={emails} currentPage={page} totalData={totalData} />
                <TableFooter totalData={totalData} currentPage={page} totalPage={totalPage} fetchData={fetchData} />
            </div>
        </MainLayout>
    );
}

export default Home;