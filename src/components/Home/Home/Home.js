import React from 'react';
import Banner from '../Banner/Banner';
import ItemsInventory from '../ItemsInventory/ItemsInventory';
import WareHouse from '../WareHouse/WareHouse';

const Home = () => {
    return (
        <>
            <Banner />
            <ItemsInventory />
            <WareHouse />
        </>
    );
};

export default Home;