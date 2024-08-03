import Header from "../components/Header";
import Search from "../components/Search";

function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div className="max-w-screen-xl mx-auto">
                <div className="my-6">
                    <Search />
                </div>
                {children}
            </div>
        </>
    );
}

export default MainLayout;