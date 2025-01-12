import React from "react";

const LocationSearchPanel = (props) => {
    // sample array for location
    const locations = [
        "24B, Baidyapur, Durga Mandir",
        "24B, Deriapur, Durga Mandir",
        "24B, Panur, Durga Mandir",
        "24B, Bagdola, Durga Mandir",
    ];

    return (
        <div>
            {/* This is just a sample data */}

            {locations.map((element, index) => {
                return (
                    <div
                        onClick={() => {
                            props.setVehicalPanel(true);
                            props.setPanelOpen(false);
                        }}
                        key={index}
                        className="flex gap-4 border-2 p-3 rounded-xl active:border-black items-center my-2 justify-start"
                    >
                        <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
                            <i className="ri-map-pin-2-fill"></i>
                        </h2>
                        <h4 className="font-medium">{element}</h4>
                    </div>
                );
            })}
        </div>
    );
};

export default LocationSearchPanel;
