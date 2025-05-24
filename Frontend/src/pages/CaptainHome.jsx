import React from "react";
import { Link } from "react-router-dom";

const CaptainHome = () => {
    return (
        <div className="h-screen">
            <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
                <img
                    className="w-16"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt=""
                />
                <Link
                    to="/home"
                    className="fixed w-12 h-12 flex justify-center items-center bg-white right-2 top-2 rounded-full"
                >
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className="h-3/5">
                <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt=""
                />
            </div>
            <div className="h-2/5 p-6 ">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-3">
                        <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740"
                            alt=""
                        />
                        <h4 className="text-lg font-medium">Subha Mondal</h4>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold">RS : 295.20</h4>
                        <p className="text-sm font-medium text-gray-600">
                            Earned
                        </p>
                    </div>
                </div>
                <div className="flex p-3 mt-8 bg-gray-300 rounded-xl justify-center gap-5 items-start">
                    <div className="text-center">
                        <i className="text-3xl mb-2 font-thin ri-time-line"></i>
                        <h5 className="text-lg font-medium">10.2</h5>
                        <p className="text-sm text-gray-600">Hours Online</p>
                    </div>
                    <div className="text-center">
                        <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                        <h5 className="text-lg font-medium">10.2</h5>
                        <p className="text-sm text-gray-600">Hours Online</p>
                    </div>
                    <div className="text-center">
                        <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                        <h5 className="text-lg font-medium">10.2</h5>
                        <p className="text-sm text-gray-600">Hours Online</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaptainHome;
