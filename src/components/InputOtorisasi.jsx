import { Button } from "flowbite-react";
import { useState } from "react";

function InputOtorisasi({ login, setPassword, setUsername }) {
    const [visible, setvisible] = useState(false);

    return (
        <div className="w-full max-w-xs md:max-w-md bg-theme2 p-4 m-auto rounded-md shadow-sm shadow-white font-poppins">
            <h2 className="text-center text-2xl font-medium text-white mb-3">Otorisasi</h2>
            <form onSubmit={login}>
                <div className="mb-4">
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-600 focus:border-slaring-slate-600 block w-full p-2.5" autoFocus />
                </div>
                <div className="relative flex items-center">
                    <input type={visible ? 'text' : 'password'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-600 focus:border-slaring-slate-600 block w-full p-2.5" onChange={(e) => setPassword(e.target.value)} required />

                    <span className="absolute text-black right-3 flex items-center cursor-pointer" onClick={() => setvisible(!visible)}>
                        <ion-icon name={visible ? 'eye-off' : 'eye'} style={{ fontSize: "24px" }}></ion-icon>
                    </span>
                </div>
                <Button color="blue" type="submit" className="mt-3 w-full mx-auto">Masuk</Button>
            </form>
        </div>
    );
}

export default InputOtorisasi;