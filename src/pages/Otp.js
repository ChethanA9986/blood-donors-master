import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { Button, Form, Spinner } from 'react-bootstrap';
import { HEADERS, URL } from './../constants/constants';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadCrumbArea from '../components/BreadCrumbArea';
import { fetchApi } from './../services/services';

function Otp(props) {
    const location = useLocation();
    let history = useHistory();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [otp, setOtp] = useState("");
    if (location.state === undefined) {
        history.push('/')
    }

    const handleOtp = (event) => {
        setOtp(event.target.value)
    }

    const handleSubmitClick = async () => {
        try {
            setLoading(true)
            const payload = {
                method: 'POST',
                headers: HEADERS,
                body: JSON.stringify({
                    "mobileNumber": location.state.mobNum,
                    "otp": otp
                })
            }
            const url = `${URL}auth/validate_otp`
            const response = await fetchApi({ url, payload });
            if (response.status === 200 || response.status === 201) {
                history.push('/login');
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
            <BreadCrumbArea name="Otp validate" />
            <div class="page-content contact-page-content-area padding-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="right-content-area">
                                <div class="contact-page-form-wrap login-page">
                                    <h2 class="title">Validate Otp</h2>
                                    <Form.Text class="text-muted">
                                        User status not verified</Form.Text>
                                    <form action="https://sonu4u.weavingwords.in/login" method="post" class="contact-page-form"
                                        noValidate="novalidate" encType="multipart/form-data">
                                        <input type="hidden" name="_token" value="4LjcalTKYBSyvIdkVUCDxiLI3flVyWYIUuHivnSH" />
                                        <div class="form-group">
                                            <input type="text" name="otp" placeholder="enter otp" autoComplete="off" class="form-control"
                                                id="email" required="" aria-required="true"
                                                value={otp}
                                                onChange={handleOtp}
                                            />
                                        </div>

                                        <div class="form-group">
                                            <Button  value="Register" class="submit-btn register-as-donor"  disabled={otp.length < 4} onClick={handleSubmitClick}>Submit
                                            {loading && <Spinner
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />}
                                            </Button>
                                            {error != null && <Form.Text class="text-muted">
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
        </div>)
}

export default Otp