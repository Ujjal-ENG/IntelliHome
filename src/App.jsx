import { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/pages/Footer';

// context API
export const ProductContext = createContext([]);
export const CartContext = createContext([]);

function App() {
    const [cartArray, products] = useLoaderData();
    const [cart, setCart] = useState(cartArray);
    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
                <Navbar />
                <div className="min-h-[calc(100vh-136px)]">
                    <Outlet />
                </div>
                <Footer />
            </CartContext.Provider>
        </ProductContext.Provider>
    );
}

export default App;
