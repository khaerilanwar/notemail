import MainLayout from "../layouts/MainLayout";
import FormMail from "../components/FormMail";

function AddMail() {
    return (
        <MainLayout>
            <div className="my-6 flex justify-center">
                <FormMail title="Tambah" />
            </div>
        </MainLayout>
    );
}

export default AddMail;