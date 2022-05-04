import React from 'react';
import { Link } from 'react-router-dom';
import { useItems } from '../../../hooks/useItems';
import ItemInventory from '../ItemInventory/ItemInventory';

const ItemsInventory = () => {
    const [items] = useItems([])
    return (
        <div className=''>
            <h2 style={{ fontFamily: "poppins" }} className='text-3xl text-indigo-700 font-bold mt-10 pt-5'>Inventory Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center'>
                {
                    items?.slice(0, 6).map((item) => (
                        <ItemInventory key={item._id} item={item}>
                        </ItemInventory>)
                    )
                }
            </div>
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

export default ItemsInventory;