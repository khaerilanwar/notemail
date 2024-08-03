import { Button } from "flowbite-react";

function InputOtorisasi() {
    return (
        <div className="w-full max-w-xs md:max-w-md bg-theme2 p-4 m-auto rounded-md shadow-sm shadow-white font-poppins">
            <h2 className="text-center text-2xl font-medium text-white mb-3">Sandi Otorisasi</h2>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-600 focus:border-slaring-slate-600 block w-full p-2.5" />
            <Button color="blue" className="mt-3 mx-auto">Masuk</Button>
        </div>
    );
}

export default InputOtorisasi;