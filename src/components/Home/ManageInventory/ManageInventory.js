import React from 'react';
import { Link } from 'react-router-dom';
import { useItems } from '../../../hooks/useItems';
import './ManageInventory.css'

const ManageInventory = () => {
    const [items,setItems] = useItems([])
    const deleteItem = id =>{
        const agree = window.confirm('Want to delete Items?');
        if(agree){
            const url = `http://localhost:5000/item/${id}`
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            })
        }
    }
    return (
        <div>
            <h3 className='text-3xl mt-5 mb-5'>All Inventory Items</h3>
            <div>
                <section className="flex items-center justify-center">
                    <div className="container">
                        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                            <thead className="text-white">
                                <tr className="bg-gray-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="p-3 text-center">Id</th>
                                    <th className="p-3 text-center">Name</th>
                                    <th className="h-image p-3 text-center">Image</th>
                                    <th className="p-3 text-center" width="110px">Actions</th>
                                </tr>
                            </thead>
                            {
                                items.map(item => (
                                    <tbody className="flex-1 sm:flex-none">
                                    <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                        <td className="border-grey-light border hover:bg-gray-100 p-3">{item._id}</td>
                                        <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{item.name}</td>
                                        <td className="image border-grey-light border hover:bg-gray-100 p-3 truncate h-20 w-20"> <img className='' src={item.img} alt="" /> </td>
                                        <td onClick={() => deleteItem(item._id)} className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
                                    </tr>
                                </tbody>)
                                )
                            }
                        </table>
                    </div>
                </section>
                {/* {
                    items.map(item => (
                        <ManageInventoryItems key={item._id} item={item}>
                        </ManageInventoryItems>)
                    )
                } */}

                <div className='flex justify-center my-10'>
                    <Link to="/addItems">
                        <button className="flex items-center px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 2304 1792" className="mr-4" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z">
                                </path>
                            </svg>
                            Add Inventory Items
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;