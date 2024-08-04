import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CardLayout from "../layouts/CardLayout";

function FormMail({ title, data }) {
    const navigate = useNavigate();
    const [visible, setvisible] = useState(false);

    return (
        <CardLayout>
            <h5 className="text-2xl text-center font-semibold tracking-wider text-gray-100">
                {title} Email
            </h5>

            <form className="max-w-md gap-4 mx-auto w-full flex flex-col">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Email" className="text-white" />
                    </div>
                    <TextInput id="email1" type="email" value={data ? data.email : ''} placeholder="name@provide.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Kata Sandi" className="text-white" />
                    </div>
                    <div className="relative flex items-center">
                        <TextInput style={{ paddingRight: "30px" }} className="w-full" id="password1" type={visible ? 'text' : 'password'} value={data ? data.password : ''} required placeholder="******" />
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