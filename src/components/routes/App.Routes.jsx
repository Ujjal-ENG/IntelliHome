import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import { cartItemDataFromLoacalStorage } from '../loaders/getCartItemsData';
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
        loader: cartItemDataFromLoacalStorage,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
]);
