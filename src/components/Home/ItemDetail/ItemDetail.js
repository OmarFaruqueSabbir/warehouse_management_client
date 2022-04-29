import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../../hooks/useItemDetail';

const ItemDetail = () => {
    const {itemId} = useParams();
    const [item] = useItemDetail(itemId)
    return (
        <div className='text-center'>
            <h2>You are about to book: {item.name}</h2>
        </div>
    );
};

export default ItemDetail;