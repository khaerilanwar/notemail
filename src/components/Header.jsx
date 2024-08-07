import notemail from '../assets/notemail.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="max-w-screen-lg mx-auto">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={notemail} className="h-8" alt="Notemail Logo" />
                    <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">NOTEMAIL</span>
                    <img src={notemail} className="h-8" alt="Notemail Logo" />
                </a>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <Link className='text-sm text-white bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded-md' to={'/'}>
                        Keluar
                    </Link>
                </div>
            </div>
        </header>

    );
}

export default Header;