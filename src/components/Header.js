import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Header() {
    return (
        <>
            <nav className="navbar bg-primary d-flex justify-content-center">
                <li className="nav-item nav-link">
                <Button variant="contained" color="warning">
                    <Link className="text-white font-weight-bold link" to="/">TOP JUEGOS</Link>
                </Button>
                </li>     
            </nav>
        </>
    );
}

export default Header;