import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { GrTechnology } from 'react-icons/gr';
import { ImCross } from 'react-icons/im';

import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    return (
        <>
            <nav className="md:px-24 md:py-4 px-2 py-2 flex justify-between items-center shadow-md w-full">
                <div>
                    <NavLink to="/" aria-level="Title and Icon" title="Title" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        <span className="flex items-center text-3xl">
                            <GrTechnology className="bg-cyan-200 p-2 rounded-full mr-2 text-5xl" />
                            IntelliHome
                        </span>
                    </NavLink>
                </div>

                <div className="hidden lg:flex  items-center gap-6">
                    <NavLink to="/" aria-label="Home Page" title="Home" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        <span className="text-3xl">Home</span>
                    </NavLink>

                    <NavLink to="/shop" aria-level="Product Page" title="Shop Products" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        <span className="text-3xl">Shop</span>
                    </NavLink>

                    <NavLink to="/cart" aria-label="Cart" title="Cart Items" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        <span className="text-3xl">
                            <AiOutlineShoppingCart />
                        </span>
                    </NavLink>

                    <NavLink aria-level="about" title="About Us" to="/about" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        <span className="text-3xl">About</span>
                    </NavLink>
                </div>

                {/* for designing mobile devices menubar */}
                <div className="lg:hidden relative">
                    <AiOutlineMenu className="text-3xl" onClick={() => setMenuIsOpen(!menuIsOpen)} />

                    {/* menu bar */}
                    {menuIsOpen && (
                        <div className="absolute  top-20 -left-32 flex flex-col shadow-2xl rounded-md p-8 items-center gap-6 transition-all duration-500">
                            <ImCross className="absolute -top-2 -right-2 bg-red-500 p-2 text-4xl rounded-full text-white active:text-black" onClick={() => setMenuIsOpen(!menuIsOpen)} />
                            <NavLink to="/" aria-label="Home Page" title="Home" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                <span className="text-3xl">Home</span>
                            </NavLink>

                            <NavLink to="/shop" aria-level="Product Page" title="Shop Products" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                <span className="text-3xl">Shop</span>
                            </NavLink>

                            <NavLink to="/cart" aria-label="Cart" title="Cart Items" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                <span className="text-3xl">
                                    <AiOutlineShoppingCart />
                                </span>
                            </NavLink>

                            <NavLink aria-level="about" title="About Us" to="/about" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                <span className="text-3xl">About</span>
                            </NavLink>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
