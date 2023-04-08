import React, { useContext } from 'react';
import { ProductContext } from '../../App';
import { addToLocalStorage } from '../utilities/localstorage';
import SingleProducts from './SingleProducts';
const Shop = () => {
    // const data = useLoaderData();
    const data = useContext(ProductContext);
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
