import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../../hooks/useItemDetail';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId)

    const handleIncrement = event =>{
        event.preventDefault();
        const quantity1 = parseFloat(item.quantity) + parseFloat(event.target.item.value);

        const updatedQuantity = {quantity1}

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
        .then(data =>{
            console.log('success', data);
            alert('quantity added!');
            event.target.reset();
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
                        <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Delivered</button>
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

                            <button  className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">submit</button>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default ItemDetail;