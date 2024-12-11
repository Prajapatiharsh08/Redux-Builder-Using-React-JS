import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {

    const navbarStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 20px',
        position: 'sticky',
        top: '0',
    };

    const linkStyle = {
        color: 'black',
        margin: '0 15px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1rem',
        transition: 'color 0.3s ease, transform 0.3s ease',
    };

    return (
        <div style={navbarStyle}>
            <Link to='/Home' style={linkStyle}>Home</Link>
            <Link to='/About' style={linkStyle}>About</Link>
            <Link to='/Contact' style={linkStyle}>Contact</Link>
            <Link to='/Product' style={linkStyle}>Products</Link>
        </div>
    );
}
