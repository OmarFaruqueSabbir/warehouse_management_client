import React from 'react';
import { useItems } from '../../../hooks/useItems';
import ManageInventoryItems from '../ManageInventoryitems/ManageInventoryItems';
import './ManageInventory.css'

const ManageInventory = () => {
    const [items] = useItems([])
    return (
        <div>
            <h3 className='text-3xl mt-5 mb-5'>All Inventory Items</h3>
            <div>
                {
                    items.map(item => (
                        <ManageInventoryItems key={item._id} item={item}>
                        </ManageInventoryItems>)
                    )
                }
            </div>
        </div>
    );
};

export default ManageInventory;