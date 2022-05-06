import React from 'react';

const WareHouse = () => {
    return (
        <section className="text-gray-600 body-font">
            <h3 className='text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mt-10 pt-10 mb-3'>WareHouses</h3>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-48 h-full bg-indigo-500"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Sabbir Enterprise Ware Houses</h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Introducing our three Ware-Houses to store,stock & products & manage logistics. All of our warehouses are well-built & well-structured with modern setups & facilities.</p>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Halishar Block, Chattogram</h2>
                        <p className="text-base text-justify leading-relaxed mt-2">Our very first warehouse was founded here in halisahar in Chattogram metro. Here, we started our journey to import & stock quality electronic products.</p>
                        <p className="text-indigo-500 inline-flex items-center mt-3">Explore More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1549194388-2469d59ec75c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Bahaddarhat Block, Chattogram</h2>
                        <p className="text-base text-justify leading-relaxed mt-2">Due to demands on local market, we had to stock larger amount products. Here is the Bahaddarhat block warehouse with more spaces & facilities.</p>
                        <p className="text-indigo-500 inline-flex items-center mt-3">Explore More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1633959592096-9d9a339b99fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Uttara Block, Dhaka</h2>
                        <p className="text-base text-justify leading-relaxed mt-2">Here is our third warehouse in Uttara, Dhaka. It has well spaces with more  modern warehouse setups & facilities.</p>
                        <p className="text-indigo-500 inline-flex items-center mt-3">Explore More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WareHouse;