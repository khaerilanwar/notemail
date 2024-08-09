import Header from "../components/Header";

function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div className="mx-auto">
                {children}
            </div>
        </>
    );
}

export default MainLayout;