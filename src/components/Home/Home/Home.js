import React from 'react';
import Banner from '../Banner/Banner';
import ItemsInventory from '../ItemsInventory/ItemsInventory';
import ThirdSection from '../ThirdSection/ThirdSection';
import WareHouse from '../WareHouse/WareHouse';

const Home = () => {
    return (
        <>
            <Banner />
            <ItemsInventory />
            <WareHouse />
            <ThirdSection />
        </>
    );
};

export default Home;