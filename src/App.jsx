import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/pages/Footer';

// context API
export const ProductContext = createContext([]);
export const CartContext = createContext([]);

function App() {
    const [cartArray, products] = useLoaderData();
    console.log(products);
    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={cartArray}>
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
