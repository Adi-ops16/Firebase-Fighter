import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({ to, children, className }) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? "text-white py-[2px] px-3 rounded-lg bg-purple-500 font-semibold" : `${className}`}>
            {children}
        </NavLink>
    );
};

export default MyLink;