import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProducts from './SingleProducts';
const Shop = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-6">
            {data.map((el) => (
                <SingleProducts key={el.id} data={el} />
            ))}
        </div>
    );
};

export default Shop;
