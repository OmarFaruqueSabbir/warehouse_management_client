import React from 'react';
import { useForm } from 'react-hook-form';

const AddItems = (event) => {
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const url = `http://localhost:5000/item`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div>
            <h3 className='text-3xl mt-5 mb-5 font-medium'>Add a new Inventory</h3>
            <div className='container '>
                <form className='flex flex-col w-full max-w-lg m-auto py-10 mt-10 px-10 border' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='User Email' {...register("email", { required: true })} />
                    {errors.email && <p>User Email is required.</p>}
                    <input className='mb-2' placeholder='Product Name' {...register("name", { required: true })} />
                    {errors.name && <p>Name is required.</p>}
                    <textarea className='mb-2' placeholder='Product Details' {...register("description")} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    {errors.img && <p>Please enter image url.</p>}
                    <button
                        className="mt-4 w-full bg-gray-600 hover:bg-gray-800 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div >
    );
};

export default AddItems;