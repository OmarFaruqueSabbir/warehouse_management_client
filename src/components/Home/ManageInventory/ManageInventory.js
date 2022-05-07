import React from 'react';
import { Link } from 'react-router-dom';
import { useItems } from '../../../hooks/useItems';
import './ManageInventory.css'

const ManageInventory = () => {
    const [items, setItems] = useItems([])
    const deleteItem = id => {
        const agree = window.confirm('Want to delete Items?');
        if (agree) {
            const url = `https://tranquil-spire-49472.herokuapp.com/item/${id}`
            fetch(url, {
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
            <h3 className='text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mt-5 mb-5'>All Inventory Items</h3>
            <div>
                <section className="md:w-62  container mx-auto mt-8">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="md:w-1/2 sm:w-2/4 text-sm  text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className='text-center'>
                                    <th scope="col" className="px-2 py-3 text-base">
                                        Id
                                    </th>
                                    <th scope="col" className="px-2 py-3 text-base">
                                        Model
                                    </th>
                                    <th scope="col" className="px-2 py-3 text-base">
                                        Image
                                    </th>
                                    <th scope="col" className="px-2 py-3 text-base">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody  className="flex-1 sm:flex-none">
                            {
                                items.map(item => (
                                    

                                        <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {item._id}
                                            </td>
                                            <td className="px-9 py-4 ">
                                                {item.name}
                                            </td>
                                            <td className=" px-6 py-4  h-20 w-20">
                                                <img src={item.img} alt="" />
                                            </td>
                                            <td onClick={() => deleteItem(item._id)} className="px-6 py-4 text-right">
                                                <button  className="font-medium text-red-500 dark:text-red-600 hover:underline">Delete</button>
                                            </td>
                                        </tr>

                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </section>
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