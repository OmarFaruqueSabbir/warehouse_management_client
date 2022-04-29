import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemInventory = ({ item }) => {
    const { _id, name, price, supplier, img, description } = item;
    const navigate = useNavigate();
    const handleItemDetail = id =>{
        navigate(`/item/${id}`)}
    return (
        <div className='shadow-lg rounded-2xl w-[350px] bg-white p-4 mt-3 mb-5'>
            <div className='gap-4 flex flex-col justify-between items-center'>
                <div className='flex-shrink-0'>

                    <img
                        alt='profile'
                        src={img}
                        className='mx-auto object-cover h-100 w-100'
                    />

                </div>
                <div className=' flex flex-col justify-end'>
                    {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY: Microwave Oven</h3> */}
                    <p class="text-gray-900 text-sm text-orange-500 text-justify font-medium"> <strong>Model : </strong>{name}</p>
                    <p class="text-gray-900 text-sm text-justify font-medium"> <strong>Specs: </strong>{description}</p>
                    <p class="mt-1 text-sm text-left underline-offset-1">Supplier: {supplier}</p>
                    <p class="mt-1 text-base"> <strong>Price : </strong>{price}$</p>
                    <button onClick={() => handleItemDetail(_id)} class="flex mx-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update Button</button>
                </div>
            </div>
        </div>
    );
};

export default ItemInventory;