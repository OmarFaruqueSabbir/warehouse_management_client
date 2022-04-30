import React from 'react';
import { useItems } from '../../../hooks/useItems';
import ItemInventory from '../ItemInventory/ItemInventory';

const ItemsInventory = () => {
    const [items] = useItems([])
    return (
        <div className=''>
            <h2 style={{fontFamily: "poppins"}}  className='text-3xl text-indigo-700 font-bold mt-10 pt-5'>Inventory Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center'>
                {
                    items.slice(0, 6).map((item) => (
                        <ItemInventory key={item._id} item={item}>
                        </ItemInventory>)
                    )
                }
            </div>
        </div>
    );
};

export default ItemsInventory;