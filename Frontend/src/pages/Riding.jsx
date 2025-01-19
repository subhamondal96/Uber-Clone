import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
    return (
        <div className="h-screen">
            <Link
                to="/home"
                className="fixed w-12 h-12 flex justify-center items-center bg-white right-2 top-2 rounded-full"
            >
                <i className="ri-home-9-fill"></i>
            </Link>
            <div className="h-1/2">
                <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt=""
                />
            </div>
            <div className="h-1/2 p-4 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between">
                        <img
                            className="h-20"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSF95CrjLiN1GWozOua1uJFCkeDTsLTOb1A&s"
                            alt=""
                        />
                        <div className="text-right">
                            <h2 className="text-lg font-medium">
                                Subha Mondal
                            </h2>
                            <h4 className="text-xl font-semibold">
                                {" "}
                                WB 54N 5361
                            </h4>
                            <p className="text-sm text-gray-500">
                                Maruti Suzuki Alto
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-5 justify-between flex-col items-center">
                        <div className="w-full">
                            <div className="flex items-center gap-5 p-3 border-b-2">
                                <i className="text-lg ri-map-pin-user-fill"></i>
                                <div>
                                    <h3 className="text-lg font-medium">
                                        562/11-A
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Baidyapur, Sainthia, Birbhum
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-3 border-b-2">
                                <i className="text-lg ri-money-rupee-circle-line"></i>
                                <div>
                                    <h3 className="text-lg font-medium">
                                        RS : 193.20
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Cash Cash
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="w-full mb-6 bg-green-500 text-white font-semibold p-2 rounded-lg">
                    Make a Payment
                </button>
            </div>
        </div>
    );
};

export default Riding;
