import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function FixedButton(props) {
    const userToken = useSelector(state => state.authReducer.userProfile);
    const history = useHistory();
    const handleClick = () => {
        userToken ? history.push("/request") : history.push("/login");
    }
    return (
        <div class="request-for-blood">
            <a className="request-link" onClick={handleClick}><i class="fas fa-tint"></i>Request For Blood</a>
        </div>)
}
export default FixedButton;