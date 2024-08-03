import notemail from '../assets/notemail.png';

function Header({ className }) {
    return (
        <header className={`flex justify-center gap-5 md:gap-10 p-4 ${className}`}>
            <img src={notemail} className='h-8' alt="Logo Notemail" />
            <h1 className='text-white text-xl uppercase font-medium font-poppins md:text-3xl'>Catatan Email Khaeril Anwar</h1>
            <img src={notemail} className='h-8' alt="Logo Notemail" />
        </header>
    );
}

export default Header;