import React from 'react';

const ThirdSection = () => {
    return (
        <div>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <span className="relative">Why Choose Us</span>
                        </span>{' '}
                        
                    </h2>
                </div>
                <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
                    <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-indigo-500 hover:-translate-y-2">
                        <div className="flex items-center mb-2">
                            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-indigo-500">
                                1
                            </p>
                            <p className="text-lg font-bold leading-5">Global Brand Products</p>
                        </div>
                        <p className="text-sm text-gray-900">
                        We stock globally renowned brand electronic products. Proud clients of Samsung, Panasonic, Xiaomi, Transcom Digital, Rangs etc.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-indigo-500 hover:-translate-y-2">
                        <div className="flex items-center mb-2">
                            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-indigo-500">
                                2
                            </p>
                            <p className="text-lg font-bold leading-5">Refund Policy</p>
                        </div>
                        <p className="text-sm text-gray-900">
                        We ensure quality products to our local clients. So We provide refunds following valid causes.
                        </p>
                    </div>
                    <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-indigo-500 hover:-translate-y-2">
                        <div className="flex items-center mb-2">
                            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-indigo-500">
                                3
                            </p>
                            <p className="text-lg font-bold leading-5">Logistics Support</p>
                        </div>
                        <p className="text-sm text-gray-900">
                        We have exclusive logistcs & transportation for stocking inventory items & also for delivery to local clients as well.
                        </p>
                        <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-indigo-500 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
                            <svg
                                className="text-white w-7"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <polyline
                                    fill="none"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    points="6,12 10,16 18,8"
                                />
                            </svg>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ThirdSection;