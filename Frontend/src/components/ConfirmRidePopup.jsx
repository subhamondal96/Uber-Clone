import React from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopup = (props) => {
    return (
        <div className="h-[90%]">
            <h5
                className="p-1 text-center w-[93%] absolute top-0"
                onClick={() => {
                    props.setConfirmRidePopupPanel(false);
                }}
            >
                <i className="text-3xl text-gray-400  ri-arrow-down-s-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">
                Confirm this ride to start!
            </h3>
            <div className="flex items-center justify-between mt-5 p-3 bg-yellow-400 rounded-lg">
                <div className="flex items-center gap-3">
                    <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740"
                        alt=""
                    />
                    <h2 className="text-lg font-medium">Subha Mondal</h2>
                </div>
                <h5 className="text-lg font-semibold">2.2 km</h5>
            </div>
            <div className="flex gap-5 justify-between flex-col items-center mt-3">
                <div className="w-full">
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm text-gray-600">
                                Baidyapur, Sainthia, Birbhum
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm text-gray-600">
                                Baidyapur, Sainthia, Birbhum
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="text-lg ri-money-rupee-circle-line"></i>
                        <div>
                            <h3 className="text-lg font-medium">RS : 193.20</h3>
                            <p className="text-sm text-gray-600">Cash Cash</p>
                        </div>
                    </div>
                </div>
                <Link
                    to="/captain-riding"
                    className="w-full mt-5 flex justify-center  bg-green-500 text-white font-semibold p-2 rounded-lg"
                >
                    Confirm
                </Link>
                <button
                    onClick={() => {
                        props.setConfirmRidePopupPanel(false);
                        props.setRidePopupPanel(false);
                    }}
                    className="w-full mt-1 bg-red-500 text-white font-semibold p-2 rounded-lg"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ConfirmRidePopup;
