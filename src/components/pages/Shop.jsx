import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProducts from './SingleProducts';
const Shop = () => {
    const data = useLoaderData();

    // handle Cart Item
    const handleCartItem = (id) => {
        addToLocalStorage(id);
    };
    return (
        <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-6">
            {data.map((el) => (
                <SingleProducts key={el.id} data={el} handleCartItem={handleCartItem} />
            ))}
        </div>
    );
};

export default Shop;
