import React, { useState } from "react";
import { Button, Form, Col, Row, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadCrumbArea from '../components/BreadCrumbArea';
import { HEADERS, URL } from './../constants/constants';
import { fetchApi } from './../services/services';
import './../App.css';

function ForgotPassword(props) {
    let history = useHistory();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [mobNum, setMobNum] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [disbleFlag, setDisbleFlag] = useState(true);
    const [isValidMobNum, setIsValidMobNum] = useState(true);
    const [isValidNewPassword, setIsValidNewPassword] = useState(true);

    const handleMobNum = (event) => {
        setMobNum(event.target.value)
        if (event.target.value.length === 10 && newPassword.length >= 7) {
            setDisbleFlag(false);
            setIsValidMobNum(true)
        }
        else {
            setDisbleFlag(true);
            setIsValidMobNum(false)
        }
    };
    const handleNewPassword = (event) => {
        setNewPassword(event.target.value)
        if (event.target.value.length >= 7 && mobNum.length >= 10) {
            setDisbleFlag(false);
            setIsValidNewPassword(true)
        }
        else {
            setDisbleFlag(true);
            setIsValidNewPassword(false)
        }
    }
    const handleSubmitClick = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const payload = {
                method: 'POST',
                headers: HEADERS,
                body: JSON.stringify({
                    "mobileNumber": mobNum,
                    "newPassword": newPassword
                })
            }
            const url = `${URL}auth/forgot_password`
            const response = await fetchApi({ url, payload });
            if (response.status === 200 || response.status === 201) {
                history.push({
                    pathname: '/otp',
                    state: { mobNum: mobNum }
                })
            }
            else {
                const responseJson = await response.json();
                setError(responseJson)
            }
            setLoading(false)
        }
        catch (error) {
            setError(error)
            setLoading(false)
        }

    }

    return (
        <div>
            <TopBar />
            <Header />
            <BreadCrumbArea name="ForgotPassword" />
            <div class="page-content contact-page-content-area padding-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="righti-content-area">
                                <div class="contact-page-form-wrap login-page">
                                    <h2 class="title">Forgot Password</h2>
                                    <form class="contact-page-form" novalidate="novalidate" enctype="multipart/form-data">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-8">

                                                <Form.Group as={Row}>
                                                    <Form.Label className="control-label" as="legend" column sm={3}>
                                                        Mobile Number</Form.Label>
                                                    <Col >
                                                        <input type="number" name="mobNum"
                                                            placeholder="Mobile Number" className="form-control" required="" autoComplete="off"
                                                            aria-required="true"
                                                            value={mobNum}
                                                            onChange={handleMobNum}
                                                        />
                                                        {!isValidMobNum && (<Form.Text className="text-muted">
                                                            Mobile Number must contain minimum 10 numbers .</Form.Text>)}
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="required">
                                                    <Form.Label className="control-label" as="legend" column sm={3}>
                                                        New Password</Form.Label>
                                                    <Col >
                                                        <input type="Password" name="Password" placeholder="Your New Password"
                                                            class="form-control" required="" autoComplete="off"
                                                            aria-required="true"
                                                            value={newPassword}
                                                            onChange={handleNewPassword}
                                                        />
                                                        {!isValidNewPassword && (<Form.Text className="text-muted">
                                                            Password must contain minimum 7 characters .</Form.Text>)}
                                                    </Col>
                                                </Form.Group>

                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <Button className="submit-btn register-as-donor"
                                                onClick={handleSubmitClick}
                                                disabled={disbleFlag}>Submit
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
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default ForgotPassword

