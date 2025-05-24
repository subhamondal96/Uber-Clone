import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [vehicleColor, setVehicleColor] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehicleType, setVehicleType] = useState("");

    const { captain, setCaptain } = React.useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        const captainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType,
            },
        };

        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/captains/register`,
            captainData
        );
        if (response.status === 201) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem("token", data.token);
            navigate("/captain-home");
        }

        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
    };
    return (
        <div className="py-5 px-5 h-screen flex flex-col justify-between">
            <div>
                <img
                    className="w-20 mb-6"
                    src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png"
                    alt=""
                />
                <form onSubmit={submitHandler}>
                    <h3 className="text-lg font-medium mb-2">
                        What's our Captain's Name
                    </h3>
                    <div className="flex gap-4 mb-4">
                        <input
                            className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                            required
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                        <input
                            className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </div>
                    <h3 className="text-lg font-medium mb-2">
                        What's our Captain's email
                    </h3>
                    <input
                        className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        required
                        type="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                    <input
                        className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        required
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <h3 className="text-lg font-medium mb-2">
                        Vehicle Information
                    </h3>
                    <div className="flex gap-4 mb-4">
                        <input
                            required
                            type="text"
                            placeholder="Vehicle Color"
                            className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                            value={vehicleColor}
                            onChange={(e) => {
                                setVehicleColor(e.target.value);
                            }}
                        />
                        <input
                            required
                            type="text"
                            placeholder="Vehicle Plate"
                            className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                            value={vehiclePlate}
                            onChange={(e) => {
                                setVehiclePlate(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex gap-4 mb-5">
                        <input
                            required
                            type="number"
                            placeholder="Vehicle Capacity"
                            className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                            value={vehicleCapacity}
                            onChange={(e) => {
                                setVehicleCapacity(e.target.value);
                            }}
                        />
                        <select
                            required
                            type="text"
                            placeholder="Vehicle Type"
                            className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                            value={vehicleType}
                            onChange={(e) => {
                                setVehicleType(e.target.value);
                            }}
                        >
                            {/* 3h 32min */}
                            <option value="" disabled>
                                Select Vehicle Type
                            </option>
                            <option value="car"> Car </option>
                            <option value="auto">Auto</option>
                            <option value="motorcycle">Moto</option>
                        </select>
                    </div>

                    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
                        Create Captain Account
                    </button>
                </form>
                <p className="text-center mb-5">
                    Already have an account?{" "}
                    <Link to="/captain-login" className="text-blue-600">
                        Login here
                    </Link>
                </p>
            </div>
            <div>
                <p className="text-[12px] mt-6 leading-tight">
                    This site is protected by reCAPTCHA and the{" "}
                    <span className="underline">Google Privacy Policy</span> and{" "}
                    <span className="underline">Terms of Service apply</span>.
                </p>
            </div>
        </div>
    );
};

export default CaptainSignup;
