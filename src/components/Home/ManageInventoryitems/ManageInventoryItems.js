import React from 'react';
import { useItems } from '../../../hooks/useItems';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageInventoryItems = ({ item }) => {
    const { _id, name, price, supplier, img, description } = item;
    const [items,setItems] = useItems()

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
        <>
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
                        <tbody className="flex-1 sm:flex-none">
                            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                <td className="border-grey-light border hover:bg-gray-100 p-3">{_id}</td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{item.name}</td>
                                <td className="image border-grey-light border hover:bg-gray-100 p-3 truncate h-20 w-20"> <img className='' src={img} alt="" /> </td>
                                <td onClick={()=> deleteItem(item._id)} className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default ManageInventoryItems;