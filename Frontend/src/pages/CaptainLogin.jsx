import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const captain = {
            email: email,
            password: password,
        };

        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/captains/login`,
            captain
        );

        if (response.status === 200) {
            const data = response.data;
            setCaptain(data.captain);

            localStorage.setItem("token", data.token);
            navigate("/captain-home");
        }

        setEmail("");
        setPassword("");
    };

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img
                    className="w-20 mb-8"
                    src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png"
                    alt=""
                />
                <form onSubmit={submitHandler}>
                    <h3 className="text-lg font-medium mb-2">
                        What's your email
                    </h3>
                    <input
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="email@example.com"
                    />
                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                    <input
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                        placeholder="password"
                    />
                    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
                        Login
                    </button>
                </form>
                <p className="text-center">
                    New here ?{" "}
                    <Link to="/captain-signup" className="text-blue-600">
                        Register as a Captain
                    </Link>
                </p>
            </div>
            <div>
                <Link
                    to="/login"
                    className="bg-[#FF7F3E] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                >
                    Sign in as User
                </Link>
            </div>
        </div>
    );
};

export default CaptainLogin;
