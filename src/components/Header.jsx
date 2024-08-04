import notemail from '../assets/notemail.png';
import { Link } from 'react-router-dom';

function Header({ className }) {
    return (
        <header className={`flex justify-center gap-5 md:gap-10 p-4 ${className}`}>
            <img src={notemail} className='h-8' alt="Logo Notemail" />
            <Link to={'/'} className='text-white text-2xl uppercase font-medium font-poppins md:text-3xl'>NOTEMAIL</Link>
            <img src={notemail} className='h-8' alt="Logo Notemail" />
        </header>
    );
}

export default Header;