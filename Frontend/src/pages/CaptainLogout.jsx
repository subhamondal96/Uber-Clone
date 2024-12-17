import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.removeItem("token");
                    navigate("/captain-login");
                }
            })
            .catch((err) => {
                console.error("Logout error:", error);
                // Redirect to login regardless of the error
                navigate("/captain-login");
            });
    }, []);

    return <div>Captain Logging out...</div>;
};

export default CaptainLogout;
