import React from 'react';
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {CurrentUserContext} from "../context/currentUser";

const Header = (props) => {
    const [currentUserState] = useContext(CurrentUserContext);
    return (
        <div className='navbar navbar-light'>
            <div className="container">
                <NavLink to="/" className="navbar-brand">Medium</NavLink>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    {currentUserState.isLoggedIn === false && (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Sign-in</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/registration">Sign-up</NavLink>
                            </li>
                        </>
                    )}
                    {currentUserState.isLoggedIn && (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/articles/new">New Post</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to={`/profile/${currentUserState.currentUser.username}`}
                                >
                                    <img
                                        className="user-pic"
                                        src={currentUserState.currentUser.image}
                                        alt=""
                                    />
                                </NavLink>
                            </li>
                        </>)}
                </ul>
            </div>
        </div>
    )
};

export default Header;