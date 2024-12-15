import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        setUserData({
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
        });

        // console.log(userData);

        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
    };

    return (
        <div>
            <div className="p-7 h-screen flex flex-col justify-between">
                <div>
                    <img
                        className="w-16 mb-10"
                        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                        alt=""
                    />
                    <form onSubmit={submitHandler}>
                        <h3 className="text-lg font-medium mb-2">
                            What's your Name
                        </h3>
                        <div className="flex gap-4 mb-6">
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
                            What's your email
                        </h3>
                        <input
                            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                            required
                            type="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <h3 className="text-lg font-medium mb-2">
                            Enter Password
                        </h3>
                        <input
                            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                            required
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
                            Login
                        </button>
                    </form>
                    <p className="text-center">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600">
                            Login here
                        </Link>
                    </p>
                </div>
                <div>
                    <p className="text-[12px] leading-tight">
                        This site is protected by reCAPTCHA and the{" "}
                        <span className="underline">Google Privacy Policy</span>{" "}
                        and{" "}
                        <span className="underline">
                            Terms of Service apply
                        </span>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserSignup;
