import React from 'react';
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { activeStyle } from './../styles/styles'
import * as updateUser from "./../redux/actions/userDetailsAction";

function Header(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const userToken = useSelector(state => state.authReducer.userProfile);
    const handleLogout = () => {
        localStorage.clear();
        dispatch(updateUser.updateUser(null));
    }
    return (
        <div>
            <nav class="navbar navbar-area navbar-expand-lg">
                <div class="container nav-container">
                    <div class="responsive-mobile-menu">
                        <div class="logo-wrapper">
                            <a href="index.html" class="logo">
                                <img src="assets/uploads/site-logo-38861.png" alt="site logo" />
                            </a>
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#weforyou_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="weforyou_main_menu">
                        <ul class="navbar-nav">
                            <li>
                                <NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink>
                            </li>
                            <li class=""><NavLink to="/donors" exact activeStyle={activeStyle}>Donors</NavLink></li>
                            <li class=""><NavLink to="/about" exact activeStyle={activeStyle}>About</NavLink></li>
                            <li class=""><NavLink to="/contact" exact activeStyle={activeStyle}>Contact</NavLink></li>
                            {userToken ?
                                <>
                                    <li class=""><NavLink to="/profile" exact activeStyle={activeStyle}>My Profile</NavLink></li>
                                    <li class=""><NavLink to="/RequestList" exact activeStyle={activeStyle}>My Requests</NavLink></li>
                                    <li className="menu-btn" onClick={handleLogout}>Logout</li>
                                </> : <li onClick={() => { history.push("/register"); }} className="menu-btn">Join as Donor</li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;