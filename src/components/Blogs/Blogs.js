import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-12 mx-auto">
                    <h1 className="text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl ">Blog Sections.</h1>

                    <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 ">
                        <div>
                            <div className="inline-block p-3 text-white bg-indigo-500 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Difference between Javascript and Nodejs?</h1>

                                <p className="mt-2 text-sm text-justify text-gray-500 dark:text-gray-300">
                                    Javascript is a computer language used for building scripts on websites & NodeJS is a Javascript runtime environment. Javascript can only be used in browsers, but with the help of NodeJS, it can be used outside of them. JS is commonly utilized in client-side, whereas server-side Nodejs is commonly used.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-indigo-500 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">When should we use Nodejs and Mongodb?</h1>

                                <p className="mt-2 text-justify text-sm text-gray-500 dark:text-gray-300">
                                    NodeJS and MongoDB are two distinct technologies. MonogDB is a database system that allows you to efficiently store documents in a database and conduct operations such as data updates and document searches based on certain criteria.
                                    The responsibility of NodeJS is to run user's application.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-indigo-500 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Differences between SQL and NoSQL databases?</h1>

                                <p className="mt-2 text-justify text-sm text-gray-500 dark:text-gray-300">
                                    Relational databases are SQL, while non-relational databases are NoSQL.
                                    SQL databases have a specified schema and employ structured query language. For unstructured data, NoSQL databases use dynamic schemas. SQL databases scale vertically, but NoSQL databases scale horizontally. NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based. SQL databases excel in multi-row transactions, while NoSQL excels at unstructured data like documents and JSON.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-indigo-500 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">What is the purpose of JWT and how does it work?</h1>
                                <p className="mt-2 text-sm text-justify text-gray-500 dark:text-gray-300">
                                    A JWT is a means for determining who owns JSON data. It's a cryptographically signed, encoded, URL-safe string that can hold an endless amount of data. JWT is frequently used and possibly the only good one as an API authentication technique. Google employs JWT technology to allow you to authenticate to its APIs because it is so popular. The concept is simple: when we set up the API, we receive a secret token from the service. On the client side, you build the token and sign it with the secret token. Because the request is signed with the client's unique identifier, the server will know it's that exact client when we pass it as part of the API request.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;