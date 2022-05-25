import React from 'react';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className='navbar navbar-light'>
            <div className="container">
                <NavLink to="/" className="navbar-brand">Medium</NavLink>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Sign-in</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/registration">Sign-up</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;