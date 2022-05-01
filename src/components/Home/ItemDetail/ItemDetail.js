import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/item/${itemId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setItem(data));
        
    }, [item]);

    const handleIncrement = event => {
        event.preventDefault();
        const quantity = parseFloat(item.quantity) + parseFloat(event.target.item.value);

        const updatedQuantity = { quantity }

        // send update data to the server..
        const url = `http://localhost:5000/item/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('quantity added!');
                event.target.reset();
            })
    }

    const handleDecrement = () => {
        const quantity = parseFloat(item.quantity) -1;

        const updatedQuantity = { quantity }

        // send update data to the server..
        const url = `http://localhost:5000/item/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Item Delivered!');
            })
    }



    return (
        <div className='text-center'>
            <div className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mt-10">
                <div className="w-1/3 bg-cover" >
                    <img src={item.img} alt="" />
                </div>

                <div className="w-2/3 p-4 md:p-4">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{item.name}</h1>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>

                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{item.quantity} items available</h1>

                    <div className="flex justify-between mt-3 item-center">
                        <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{item.price}$</h1>
                        <button onClick={handleDecrement} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Delivered</button>
                    </div>
                </div>
            </div>


            <section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-white md:flex-row md:h-48">
                <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-white md:dark:bg-white">
                    <div className="px-6 py-6 md:px-8 md:py-0">
                        <h2 className="text-lg font-bold text-black">Want to Restock Items?</h2>

                        <p className="mt-2 text-sm text-gray-800">Input required quantity to restock items.</p>
                    </div>
                </div>

                <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                    <form onSubmit={handleIncrement}>
                        <div className="flex flex-col p-1 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                            <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="number" name="item" placeholder="Input" aria-label="Input quantity" />

                            <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">submit</button>
                        </div>
                    </form>
                </div>
            </section>

            <div className='flex justify-center my-10'>
                <Link to="/manageInventory">
                    <button className="flex items-center px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 2304 1792" className="mr-4" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z">
                            </path>
                        </svg>
                        Manage Inventories
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default ItemDetail;