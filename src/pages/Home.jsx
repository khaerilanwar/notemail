import MainLayout from "../layouts/MainLayout";
import TableMail from "../components/TableMail";
import Search from "../components/Search";
import dataEmail from "../data/MailData.json";
import TableHeader from "../components/TableHeader";

function Home() {
    return (
        <MainLayout>
            <div className="my-4">
                <TableHeader />
            </div>
            <TableMail data={dataEmail} />
        </MainLayout>
    );
}

export default Home;