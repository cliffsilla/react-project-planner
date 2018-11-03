import React from 'react';
import {NavLink} from 'react-router-dom';

const SignOutLinks = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <ul className="right">
                <li><NavLink to='/signup'>Sign Up</NavLink></li>
                <li><NavLink to='/signin'>Log In</NavLink></li>
            </ul>
        </nav>
    )
}

export default SignOutLinks