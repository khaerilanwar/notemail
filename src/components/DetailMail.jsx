import { Button, Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import CardLayout from "../layouts/CardLayout";
import { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import Loading from "./Loading";

function CardMail({ data }) {
    const { api, setMessageApi } = useContext(ApiContext)
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleDelete() {
        setOpenModal(false)
        setLoading(true)
        try {
            const response = await api.delete(`/email/${data._id}`)
            setMessageApi({
                status: "success",
                message: response.data.message
            })
            setLoading(false)
            navigate("/")
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    if (loading) return <Loading />

    return (
        <>
            <CardLayout>
                <h5 className="text-2xl text-center font-semibold tracking-wider text-gray-100">
                    Detail Email
                </h5>
                <table className="mb-3 mx-auto text-gray-100 text-sm md:text-lg">
                    <tbody>
                        <tr>
                            <td>Email</td>

                            <td>: {data.email}</td>
                        </tr>
                        <tr>
                            <td className="pe-2 md:pe-8">Kata Sandi</td>
                            <td>: {data.password}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex justify-center gap-6">
                    <Button color="warning" onClick={() => navigate(`/update/${data._id}`)}>
                        Update
                    </Button>
                    <Button color="failure" onClick={() => setOpenModal(true)}>
                        Hapus
                    </Button>
                </div>
            </CardLayout>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500">
                            Apakah anda yakin ingin menghapus email ini?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={handleDelete}>
                                Ya, Saya yakin
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                Batal
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CardMail;