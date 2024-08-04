import { Card, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function CardLayout({ children }) {
    const navigate = useNavigate();

    return (
        <Card className="md:max-w-xl w-full mx-2 font-poppins relative border-none bg-theme3">
            <Button color="blue" size="xs" onClick={() => navigate(-1)} className="absolute bg-theme3 enabled:hover:bg-theme1 left-0 top-0 rounded-none rounded-tl-md rounded-ee-md">
                <ion-icon name="arrow-back-outline" style={{ fontSize: "28px" }}></ion-icon>
            </Button>
            {children}
        </Card>
    )
}

export default CardLayout;