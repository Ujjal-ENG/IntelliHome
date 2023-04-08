import { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/pages/Footer';
import Modal from './components/pages/Modal';

// context API
export const ProductContext = createContext([]);
export const CartContext = createContext([]);

function App() {
    const [cartArray, products] = useLoaderData();
    const [cart, setCart] = useState(cartArray);
    let [isOpen, setIsOpen] = useState(false);

    const cartAlert = sessionStorage.getItem('alert');

    if (cart.length > 0 && cartAlert !== 'true') {
        setIsOpen(true);
        sessionStorage.setItem('alert', true);
    }
    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
                <Navbar />
                <div className="min-h-[calc(100vh-136px)]">
                    <Outlet />
                </div>
                <Footer />
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            </CartContext.Provider>
        </ProductContext.Provider>
    );
}

export default App;
