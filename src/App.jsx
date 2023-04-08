import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/pages/Footer';

function App() {
    return (
        <div className="">
            <Navbar />
            <div className="min-h-[calc(100vh-136px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
