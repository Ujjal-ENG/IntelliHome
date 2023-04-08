import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../App';
import { removeLocalStorageData, removeLocalStorageDataByID } from '../../utilities/localstorage';
import CartItemDetails from './CartItemDetails';
const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    const total = cart.reduce((ps, cs) => ps + cs.price, 0);
    useEffect(() => {}, []);
    const handleRemoveDatabyID = (id) => {
        removeLocalStorageDataByID(id);
    };
    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 text-gray-900">
            <div>
                {cart.map((el) => (
                    <CartItemDetails key={el.id} product={el} handleRemoveDatabyID={handleRemoveDatabyID} />
                ))}
            </div>

            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
                <h2 className="text-xl font-semibold">{cart.length ? 'Review Cart Items' : 'Cart Is EMPTY!!'}</h2>

                <p className="text-gray-900 font-semibold text-end">Total Amount: ${total}</p>
                <p className="text-gray-400 text-end">Not including taxes and shipping costs</p>
                <div>
                    {cart.length ? (
                        <button className="btn-outlined" onClick={() => removeLocalStorageData()}>
                            Clear Cart{' '}
                        </button>
                    ) : (
                        <Link to="/shop" className="btn-outlined">
                            Back TO Shop
                        </Link>
                    )}

                    <button className="btn-primary">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
