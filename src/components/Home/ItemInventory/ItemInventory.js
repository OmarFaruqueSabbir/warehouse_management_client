import React from 'react';

const ItemInventory = ({item}) => {
    const { id, name, price,supplier,img, description } = item;
    return (
        <div className='shadow-lg rounded-2xl w-[350px] bg-white p-4 mt-3 mb-5'>
        <div className='gap-4 flex flex-col justify-between items-center'>
          <div className='flex-shrink-0'>
  
            <img
              alt='profile'
              src={img}
              className='mx-auto object-cover h-100 w-100 '
            />
  
          </div>
          <div className=' flex flex-col justify-end'>
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY: Microwave Oven</h3>
          <p class="text-gray-900 text-sm text-justify font-medium"> <strong>Specs: </strong>{description}</p>
          <p class="mt-1 underline-offset-1">Supplier: {supplier}</p>
          <p class="mt-1">Price : {price}$</p>
          </div>
        </div>
      </div>
    );
};

export default ItemInventory;