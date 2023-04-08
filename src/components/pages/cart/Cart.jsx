import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getDataFromLocalStorage } from '../../utilities/localstorage';
import CartItemDetails from './CartItemDetails';

const Cart = () => {
    const loaderData = useLoaderData();
    const getData = getDataFromLocalStorage();
    let foundData = [];
    for (const id in getData) {
        const findData = loaderData.find((el) => el.id === id);
        findData.quantity = getData[id];
        if (findData) foundData.push(findData);
    }

    return (
        <div>
            {foundData.map((el) => (
                <CartItemDetails key={el.id} product={el} />
            ))}
        </div>
    );
};

export default Cart;
