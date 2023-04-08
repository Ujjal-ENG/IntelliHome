import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GrTechnology } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="px-24 py-8 flex justify-between items-center shadow-md w-full">
                <div>
                    <NavLink
                        className={(isActive) => {
                            return isActive ? 'active' : 'default';
                        }}>
                        <span className="flex items-center text-3xl">
                            <GrTechnology />
                            IntelliHome
                        </span>
                    </NavLink>
                </div>

                <div className="flex  items-center gap-6">
                    <NavLink
                        className={(isActive) => {
                            return isActive ? 'active' : 'default';
                        }}>
                        <span className="text-3xl">Home</span>
                    </NavLink>

                    <NavLink
                        className={(isActive) => {
                            return isActive ? 'active' : 'default';
                        }}>
                        <span className="text-3xl">Shop</span>
                    </NavLink>

                    <NavLink
                        className={(isActive) => {
                            return isActive ? 'active' : 'default';
                        }}>
                        <span className="text-3xl">
                            <AiOutlineShoppingCart />
                        </span>
                    </NavLink>

                    <NavLink
                        className={(isActive) => {
                            return isActive ? 'active' : 'default';
                        }}>
                        <span className="text-3xl">About</span>
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
