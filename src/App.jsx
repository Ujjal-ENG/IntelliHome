import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';

function App() {
    return (
        <div className="">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default App;
