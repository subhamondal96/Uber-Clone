import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
    return (
        <div>
            <div className=" bg-cover  bg-center bg-[url(https://images.unsplash.com/photo-1569542609987-2c0e108c8bc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8  flex flex-col justify-between w-full">
                <img
                    className="w-16 ml-8"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt=""
                />
                <div className="bg-white py-4 px-4 pb-7">
                    <h2 className="text-[30px] font-semibold ">
                        Get Started with Uber
                    </h2>
                    <Link
                        to="/login"
                        className=" flex items-center justify-center w-full bg-black text-white py-3  rounded-lg mt-5"
                    >
                        Continue
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Start;
