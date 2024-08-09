import Header from "../components/Header";

function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div className="max-w-screen-xl mx-auto">
                {children}
            </div>
        </>
    );
}

export default MainLayout;