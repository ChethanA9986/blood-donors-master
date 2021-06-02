// common application header
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as updateUser from "./../redux/actions/userDetailsAction";
import { Button } from 'react-bootstrap';

function TopBar(props) {
    let history = useHistory();
    const dispatch = useDispatch();
    const userToken = useSelector(state => state.authReducer.userProfile);
    // const handleLogout = () => {
    //     localStorage.clear();
    //     dispatch(updateUser.updateUser(null));
    // }
    const handleLogin = () => {
        history.push("/login");
    }
    return (
        <div>
            <div class="topbar-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="topbar-inner">
                                <div class="left-content-area">
                                    <ul class="info-items">
                                        <li><i class="fas fa-envelope"></i> support@sonuforyou.com</li>
                                        <li><i class="fas fa-phone"></i> +919986516463</li>
                                    </ul>
                                </div>
                                <div class="right-content-area">
                                    <div class="right-inner">
                                        <ul class="social-icons">
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                        <select id="langchange">
                                            <option value="en">English</option>
                                        </select>
                                        <div class="btn-wrapper">
                                            {!userToken &&<Button className="boxed-btn" onClick={handleLogin}>Login</Button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;