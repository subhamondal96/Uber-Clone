import React from "react";

const VehicalPanel = (props) => {
    return (
        <div>
            <h5
                className="p-1 text-center w-[93%] absolute top-0"
                onClick={() => {
                    props.setVehicalPanel(false);
                }}
            >
                <i className="text-3xl text-gray-400  ri-arrow-down-s-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">Choose a Vehical</h3>

            <div
                onClick={() => {
                    props.setConfirmRidePanel(true);
                }}
                className="flex border-2 mb-2 active:border-black rounded-xl w-full items-center justify-between p-3"
            >
                <img
                    className="h-12"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSF95CrjLiN1GWozOua1uJFCkeDTsLTOb1A&s"
                    alt=""
                />
                <div className="w-1/2 ml-2">
                    <h4 className="font-medium text-base">
                        UberGo
                        <span>
                            <i className="ri-user-fill"></i>4
                        </span>
                    </h4>
                    <h5 className="font-medium text-sm ">3 mins away</h5>
                    <p className="font-medium text-xs text-gray-600">
                        Affordable, Motorcycle Ride
                    </p>
                </div>
                <h2 className="text-lg font-semibold">Rs.193.20</h2>
            </div>

            <div
                onClick={() => {
                    props.setConfirmRidePanel(true);
                }}
                className="flex border-2 mb-2 active:border-black rounded-xl w-full items-center justify-between p-3"
            >
                <img
                    className="h-12"
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
                    alt=""
                />
                <div className="w-1/2 ml-2">
                    <h4 className="font-medium text-base">
                        Moto
                        <span>
                            <i className="ri-user-fill"></i>1
                        </span>
                    </h4>
                    <h5 className="font-medium text-sm ">2 mins away</h5>
                    <p className="font-medium text-xs text-gray-600">
                        Affordable, compact Ride
                    </p>
                </div>
                <h2 className="text-lg font-semibold">Rs.65.50</h2>
            </div>

            <div
                onClick={() => {
                    props.setConfirmRidePanel(true);
                }}
                className="flex border-2 mb-2 active:border-black rounded-xl w-full items-center justify-between p-3"
            >
                <img
                    className="h-12"
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                    alt=""
                />
                <div className="w-1/2 ml-2">
                    <h4 className="font-medium text-base">
                        UberAuto
                        <span>
                            <i className="ri-user-fill"></i>4
                        </span>
                    </h4>
                    <h5 className="font-medium text-sm ">3 mins away</h5>
                    <p className="font-medium text-xs text-gray-600">
                        Affordable compact Ride
                    </p>
                </div>
                <h2 className="text-lg font-semibold">Rs.118.58</h2>
            </div>
        </div>
    );
};

export default VehicalPanel;
