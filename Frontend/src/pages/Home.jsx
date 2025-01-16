import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehicalPanel from "../components/VehicalPanel";
import ConfirmedRide from "../components/ConfirmedRide";
import WaitingForDriver from "../components/WaitingForDriver";
import LookingForDriver from "../components/LookingForDriver";

const Home = () => {
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [panelOpen, setPanelOpen] = useState(false);
    const vehicalPanelRef = useRef(null);
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const [vehicalPanel, setVehicalPanel] = useState(false);
    const confirmRidePanelRef = useRef(null);
    const [confirmRidePanel, setConfirmRidePanel] = useState(false);

    const vehicleFoundRef = useRef(null);
    const [vehicalFound, setVehicalFound] = useState(false);

    const waitingForDriverRef = useRef(null);
    const [waitingForDriver, setWaitingForDriver] = useState(false);

    const submitHandeler = (e) => {
        e.preventDefault();
    };

    useGSAP(
        function () {
            if (panelOpen) {
                gsap.to(panelRef.current, {
                    height: "70%",
                    padding: 24,
                    // opacity: 1,
                });
                gsap.to(panelCloseRef.current, {
                    opacity: 1,
                });
            } else {
                gsap.to(panelRef.current, {
                    height: "0%",
                    padding: 0,
                    // opacity: 0,
                });
                gsap.to(panelCloseRef.current, {
                    opacity: 0,
                });
            }
        },
        [panelOpen]
    );

    useGSAP(
        function () {
            if (vehicalPanel) {
                gsap.to(vehicalPanelRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(vehicalPanelRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [vehicalPanel]
    );

    useGSAP(
        function () {
            if (confirmRidePanel) {
                gsap.to(confirmRidePanelRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(confirmRidePanelRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [confirmRidePanel]
    );

    useGSAP(
        function () {
            if (vehicalFound) {
                gsap.to(vehicleFoundRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(vehicleFoundRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [vehicalFound]
    );

    useGSAP(
        function () {
            if (waitingForDriver) {
                gsap.to(waitingForDriverRef.current, {
                    transform: "translateY(0)",
                });
            } else {
                gsap.to(waitingForDriverRef.current, {
                    transform: "translateY(100%)",
                });
            }
        },
        [waitingForDriver]
    );

    return (
        <div className="h-screen relative overflow-hidden">
            <img
                className="w-16 absolute left-5 top-5"
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                alt=""
            />
            <div className="h-screen w-screen">
                {/* image for temporary use */}
                <img
                    className="h-full w-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnC7KgawuNmngUVzXsPzW7zAFMP2Jgjor4A&s"
                    alt=""
                />
            </div>
            <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
                <div className="h-[30%] p-6 bg-white relative">
                    <h5
                        ref={panelCloseRef}
                        onClick={() => {
                            setPanelOpen(false);
                        }}
                        className="absolute opacity-0 right-6 top-6 text-2xl"
                    >
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className="text-2xl font-semibold">Find a trip</h4>
                    <form
                        onSubmit={(e) => {
                            submitHandeler(e);
                        }}
                    >
                        <input
                            onClick={() => {
                                setPanelOpen(true);
                            }}
                            value={pickup}
                            className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
                            type="text"
                            placeholder="Add a pich-up location"
                            onChange={(e) => {
                                setPickup(e.target.value);
                            }}
                        />
                        <input
                            onClick={() => {
                                setPanelOpen(true);
                            }}
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value);
                            }}
                            className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
                            type="text"
                            placeholder="Enter your destination"
                        />
                    </form>
                </div>

                {/* location Search Pannel */}
                <div ref={panelRef} className="bg-white  h-0">
                    <LocationSearchPanel
                        setPanelOpen={setPanelOpen}
                        setVehicalPanel={setVehicalPanel}
                    />
                </div>
            </div>

            <div
                ref={vehicalPanelRef}
                className="fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12 translate-y-full"
            >
                <VehicalPanel
                    setConfirmRidePanel={setConfirmRidePanel}
                    setVehicalPanel={setVehicalPanel}
                />
            </div>

            <div
                ref={confirmRidePanelRef}
                className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full"
            >
                <ConfirmedRide
                    setConfirmRidePanel={setConfirmRidePanel}
                    setVehicalFound={setVehicalFound}
                />
            </div>

            <div
                ref={vehicleFoundRef}
                className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full"
            >
                <LookingForDriver setVehicalFound={setVehicalFound} />
            </div>

            <div
                ref={waitingForDriverRef}
                className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 "
            >
                <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
            </div>
        </div>
    );
};

export default Home;
