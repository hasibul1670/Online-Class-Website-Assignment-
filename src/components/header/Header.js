import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">

            <nav>
                <a href="/Courses">All Courses</a>
                <a href="/review">Order Review</a>
                <a href="/manage">My Courses</a>
                <a href="/manage">Login</a>
            </nav>
        </div>
    );
};

export default Header;