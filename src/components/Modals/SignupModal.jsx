import React from "react";
import { AiOutlineClose } from "react-icons/ai"
import wizardImg from "@assets/images/setup-wizard.svg"
import company from "@assets/images/company-icon.png"
import consultant from "@assets/images/consultant-male.png"
import Image from "next/image";

const SignupModal = () => {
    return (
        <>
            <div className="w-full py-12 bg-dark-gray bg-opacity-50  transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal ">
                <div role="alert" className="container relative mx-auto w-11/12 lg:w-2/3 h-[85vh] bg-white shadow-md rounded overflow-hidden">
                         <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-2xl text-dark-gray hover:text-blue-primary transition duration-150 ease-in-out" onClick="modalHandler()">
                          <AiOutlineClose />
                        </button>
                    <div className="w-full h-full flex flex-col lg:flex-row items-start justify-between">
                    {/* Image */}
                        <div className="basis-2/5 hidden flex items-center text-center justify-center my-auto p-16 lg:block">
                            <Image src={wizardImg} alt="setup-wizard"/>
                        </div>
                            <div className="lg:basis-3/5 w-full">
                                <div className="relative py-16 lg:py-8 px-5 lg:px-10 ">
                               
                                <div className="flex flex-col  justify-between my-8">
                                <h3 className="text-blue-primary text-2xl text-center lg:text-left font-lg font-bold tracking-normal leading-tight mb-2">Welcome!</h3>
                                <h5 className="text-dark-gray text-sm text-center lg:text-left font-lg font-bold tracking-normal leading-tight mb-2">Let&apos;s get you started</h5>
                               </div>

                                <h1 className="text-dark-gray text-xl lg:text-2xl text-center lg:text-left font-lg tracking-normal leading-tight mb-4">Who are you signing as?</h1>
                              
                                <div className="flex items-center lg:justify-between justify-evenly mt-8 w-full">
                                    <button className="flex flex-col items-center justify-center text-center focus:outline-none focus:bg-blue-primary focus:border-none focus:text-white transition duration-150 ease-in-out hover:bg-blue-primary hover:text-white hover:bg-opacity-90 hover:border-none bg-white rounded border border-lighter-gray text-dark-gray tracking-wide px-2 lg:px-8 py-4 text-sm lg:text-xl">
                                        <Image src={company} alt="company-icon"/>
                                        <span className="my-2">Company</span>
                                    </button>
                                    <button className="flex flex-col items-center justify-center text-center focus:outline-none focus:bg-blue-primary focus:border-none focus:text-white transition duration-150 ease-in-out hover:bg-blue-primary hover:text-white hover:bg-opacity-90 hover:border-none bg-white rounded border border-lighter-gray text-dark-gray tracking-wide  px-2 lg:px-8 py-4 text-sm lg:text-xl">
                                        <Image src={consultant} alt="company-icon"/>
                                        <span className="my-2">Consultant</span>
                                    </button>
                                    
                                  
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SignupModal;
