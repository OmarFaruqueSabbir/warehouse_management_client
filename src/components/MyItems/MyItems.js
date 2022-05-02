import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([])
    const email = user?.email
    useEffect(() => {
        const url = `http://localhost:5000/item?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])

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
        <div className='w-50 mx-auto mt-8'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="md:w-1/2 sm:w-3/4 text-sm  text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='text-center'>
                            <th scope="col" className="px-2 py-3 text-base">
                                User Email
                            </th>
                            <th scope="col" className="px-2 py-3 text-base">
                                Product Model
                            </th>
                            <th scope="col" className="px-2 py-3 text-base">
                                Category
                            </th>
                            <th scope="col" className="px-2 py-3 text-base">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {
                        items.map(item => (
                            <tbody key={item._id}>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {item.email}
                                    </td>
                                    <td className="px-9 py-4">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        Oven
                                    </td>
                                    <td onClick={() => deleteItem(item._id)} className="px-6 py-4 text-right">
                                        <p href="#" className="font-medium text-red-500 dark:text-red-600 hover:underline">Delete</p>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }

                </table>
            </div>



        </div>
    );
};

export default MyItems;