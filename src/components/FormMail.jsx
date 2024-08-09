import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import CardLayout from "../layouts/CardLayout";
import { ApiContext } from "../context/ApiContext";
import Loading from "./Loading";

function FormMail({ title, data }) {
    const { api, setMessageApi } = useContext(ApiContext)
    const navigate = useNavigate();
    const [visible, setvisible] = useState(false);
    const [email, setEmail] = useState(data ? data.email : '');
    const [password, setPassword] = useState(data ? data.password : '');
    const [loading, setLoading] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = data ? await api.patch(`/email/${data._id}`, { password }) : await api.post('/email', { username: localStorage.getItem('username'), email, password });
            if ((data ? response.status === 200 : response.status === 201)) {
                setMessageApi({
                    status: "success",
                    message: response.data.message
                })
                setLoading(false)
                navigate('/')
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    if (loading) return <Loading />

    return (
        <CardLayout>
            <h5 className="text-2xl text-center font-semibold tracking-wider text-gray-100">
                {title} Email
            </h5>

            <form onSubmit={handleForm} className="max-w-md gap-4 mx-auto w-full flex flex-col">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Email" className="text-white" />
                    </div>
                    <TextInput onChange={(e) => setEmail(e.target.value)} id="email1" type="email" value={email} placeholder="name@provide.com" required readOnly={data ? true : false} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Kata Sandi" className="text-white" />
                    </div>
                    <div className="relative flex items-center">
                        <TextInput onChange={(e) => setPassword(e.target.value)} style={{ paddingRight: "30px" }} className="w-full" id="password1" type={visible ? 'text' : 'password'} value={password} required placeholder="******" />
                        <span className="absolute text-black right-3 flex items-center cursor-pointer" onClick={() => setvisible(!visible)}>
                            <ion-icon name={visible ? 'eye-off' : 'eye'} style={{ fontSize: "24px" }}></ion-icon>
                        </span>
                    </div>
                </div>
                <Button className="mt-3" type="submit">Kirim</Button>
            </form>
        </CardLayout>
    )
}

export default FormMail;