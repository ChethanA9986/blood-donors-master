import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { Nav, Button, Spinner, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadCrumbArea from '../components/BreadCrumbArea';
import { HEADERS, URL } from './../constants/constants';
import * as updateUser from "./../redux/actions/userDetailsAction";
import { fetchApi } from './../services/services';

function Login(props) {
    const dispatch = useDispatch();
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disbleFlag, setDisbleFlag] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    /**
     * @name handleEmail
     * @param event
     * @description function to set value to email
     * @returns none 
     */
    const handleEmail = (event) => {
        setEmail(event.target.value)
        if (event.target.value.length > 3 && password.length >= 7) {
            setDisbleFlag(false)
        }
        else {
            setDisbleFlag(true)
        }
    };

    /**
     * @name handlePassword
     * @param {*} event 
     * @description function set value to password
     * returns none
     */
    const handlePassword = (event) => {
        setPassword(event.target.value)
        if (event.target.value.length >= 7 && email.length > 3) {
            setDisbleFlag(false)
        }
        else {
            setDisbleFlag(true)
        }
    }

    const handleSubmitClick = async (event) => {
        try {
            event.preventDefault();
            const payload = {
                method: 'POST',
                headers: HEADERS,
                body: JSON.stringify({
                    "mobileNumber": email,
                    "password": password
                })
            }
            setLoading(true)
            const url = `${URL}auth/login`
            const response = await fetchApi({ url, payload })
            const responseJson = await response.json();
            setLoading(false)
            if (response.status === 200 || response.status === 201) {
                localStorage.setItem("userToken", responseJson.token);
                localStorage.setItem("userId", responseJson.user._id)
                dispatch(updateUser.updateUser(responseJson.token), () => {
                    history.push('/');
                });
            }
            else if (response.status === 400) {
                setError(responseJson)
                if (responseJson.message === "User status not verified.") {
                    history.push({
                        pathname: '/otp',
                        state: { mobNum: email }
                    })
                }
            }
            else{
                setError(responseJson)
            }
        }
        catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    return (
        <div>
            <TopBar />
            <Header />
            <BreadCrumbArea name="Login" />
            <div class="page-content contact-page-content-area padding-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="right-content-area">
                                <div class="contact-page-form-wrap login-page">
                                    <h2 class="title">Login</h2>
                                    <form action="https://sonu4u.weavingwords.in/login" method="post" className="contact-page-form"
                                        noValidate="novalidate" encType="multipart/form-data">
                                        <input type="hidden" name="_token" value="4LjcalTKYBSyvIdkVUCDxiLI3flVyWYIUuHivnSH" />
                                        <div className="form-group">
                                            <input type="text" name="email" placeholder="email or phone" autoComplete="off" className="form-control"
                                                id="email" required="" aria-required="true"
                                                value={email}
                                                onChange={handleEmail}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" placeholder="Your Password" autoComplete="off"
                                                className="form-control" id="password" required="" aria-required="true"
                                                value={password}
                                                onChange={handlePassword}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <Button className="submit-btn register-as-donor"
                                                onClick={handleSubmitClick}
                                                disabled={disbleFlag || loading}>Login
                                            {loading && <Spinner
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />}
                                            </Button>
                                            {error != null && <Form.Text className="text-muted">
                                                {error.message}</Form.Text>}
                                        </div>
                                        <div className="extra-links form-group">
                                            <Nav.Link onClick={() => { history.push("/forgotPassword") }}>Forgot Password ?</Nav.Link>
                                            <Nav.Link onClick={() => { history.push("/register") }}>Don&#039;t Have Account ?</Nav.Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}
export default Login