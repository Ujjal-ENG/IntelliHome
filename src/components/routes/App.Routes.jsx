import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/cart/Cart';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />,
                loader: async () => fetch('Products.json')
            },
            {
                path: '/cart',
                element: <Cart />,
                loader: async () => fetch('Products.json')
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
]);
