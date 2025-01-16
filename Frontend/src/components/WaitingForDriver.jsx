import React from "react";

const WaitingForDriver = (props) => {
    return (
        <div>
            <h5
                className="p-1 text-center w-[93%] absolute top-0"
                onClick={() => {
                    props.setWaitingForDriver(false);
                }}
            >
                <i className="text-3xl text-gray-400  ri-arrow-down-s-line"></i>
            </h5>

            <div className="flex items-center justify-between">
                <img
                    className="h-20"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSF95CrjLiN1GWozOua1uJFCkeDTsLTOb1A&s"
                    alt=""
                />
                <div className="text-right">
                    <h2 className="text-lg font-medium">Subha Mondal</h2>
                    <h4 className="text-xl font-semibold"> WB 54N 5361</h4>
                    <p className="text-sm text-gray-500">Maruti Suzuki Alto</p>
                </div>
            </div>

            <div className="flex gap-5 justify-between flex-col items-center">
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
            </div>
        </div>
    );
};

export default WaitingForDriver;
