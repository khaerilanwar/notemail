import data from "../data/MailData.json";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import FormMail from "../components/FormMail";

function Update() {
    const { email } = useParams()
    const mailDetail = data.find((mail) => mail.email === email)
    return (
        <MainLayout>
            <div className="my-6 flex justify-center">
                <FormMail data={mailDetail} title="Update" />
            </div>
        </MainLayout>
    );
}

export default Update;