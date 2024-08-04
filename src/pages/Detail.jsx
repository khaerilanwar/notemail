import MainLayout from "../layouts/MainLayout";
import DetailMail from "../components/DetailMail";
import data from "../data/MailData.json";
import { useParams } from "react-router-dom";

function Detail() {
    const { email } = useParams()
    const mailDetail = data.find((mail) => mail.email === email)
    return (
        <MainLayout>
            <div className="my-6 flex justify-center">
                <DetailMail data={mailDetail} />
            </div>
        </MainLayout>
    );
}

export default Detail;