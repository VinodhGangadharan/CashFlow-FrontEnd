import { useEffect } from "react"
import authServices from "../services/authServices";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    // perform the logout
    useEffect(() => {
        authServices.logout()
            .then((response) => {
                alert(response.data.message);

                // redirect to login page
                setTimeout(() => {
                    navigate('/login');
                }, 500);
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    }, []);

    return (
        <div>Logging out...</div>
    )
}

export default Logout