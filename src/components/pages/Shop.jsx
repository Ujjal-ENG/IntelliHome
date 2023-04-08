import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { CartContext, ProductContext } from '../../App';
import { addToLocalStorage } from '../utilities/localstorage';
import SingleProducts from './SingleProducts';
const Shop = () => {
    // const data = useLoaderData();
    const data = useContext(ProductContext);
    const [cart, setCart] = useContext(CartContext);
    // handle Cart Item
    const handleCartItem = (product) => {
        let newCart = [];
        const exist = cart.find((exisitingProduct) => exisitingProduct.id === product.id);

        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            const rest = cart.filter((exisitingProduct) => exisitingProduct.id !== product.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToLocalStorage(product.id);
        toast.success('Successfully Product Added!!');
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
