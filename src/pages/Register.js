import React, { useState } from "react";
import { Button, Form, Col, Row, Spinner } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadCrumbArea from '../components/BreadCrumbArea';
import { genderList, bloodGroupList, HEADERS, URL } from './../constants/constants';
import { dateToTimeStamp, validateEmail, returnGender, getLocation, getEighteenYearAgoDate, getThreeMonthsBackDate } from './../constants/helper';
import { fetchApi } from './../services/services'; 
import './../App.css';

function Register(props) {
    let history = useHistory();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [state, setState] = useState(
        {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: '',
            bloodType: '',
            geo: '',
            mobNum: '',
            lastDonated: '',
            isValidEmail: true,
            isValidPassword: true,
            isValidGender: true,
            isValidBloodType: true,
            isValidFullName: true,
            isValidConfirmPassword: true,
            isValidMobNumber: true,
            isValidDOB: true
        });
    const { fullName, email, password, confirmPassword, gender, bloodType, geo, mobNum, dob, lastDonated, isValidDOB, isValidMobNumber, isValidBloodType, isValidGender, isValidConfirmPassword, isValidPassword, isValidEmail, isValidFullName } = state;
  
    const handleChange = async (event) => {
        switch (event.type) {
            case "fullName":
                event.target.value.length > 2 ? setState({
                    ...state,
                    fullName: event.target.value,
                    isValidFullName: true
                }) : setState({
                    ...state,
                    fullName: event.target.value,
                    isValidFullName: false
                })
                break;
            case "email":
                validateEmail(event.target.value) ? setState({
                    ...state,
                    email: event.target.value,
                    isValidEmail: true
                }) : setState({
                    ...state,
                    email: event.target.value,
                    isValidEmail: false
                })
                break;
            case "password":
                event.target.value.length > 6 ? setState({
                    ...state,
                    password: event.target.value,
                    isValidPassword: true,
                    isValidConfirmPassword: event.target.value === confirmPassword
                }) : setState({
                    ...state,
                    password: event.target.value,
                    isValidPassword: false,
                    isValidConfirmPassword: event.target.value === confirmPassword
                })
                break;
            case "confirmPassword":
                event.target.value === password ? setState({
                    ...state,
                    confirmPassword: event.target.value,
                    isValidConfirmPassword: true
                }) : setState({
                    ...state,
                    confirmPassword: event.target.value,
                    isValidConfirmPassword: false
                })
                break;
            case "gender":
                event.value ? setState({
                    ...state,
                    gender: event.value,
                    isValidGender: true
                }) : setState({
                    ...state,
                    gender: event.value,
                    isValidGender: false
                })
                break;
            case "bloodType":
                event.target.value ? setState({
                    ...state,
                    bloodType: event.target.value,
                    isValidBloodType: true
                }) : setState({
                    ...state,
                    bloodType: event.target.value,
                    isValidBloodType: false
                })
                break;
            case "mobNum":
                event.target.value.length === 0 || event.target.value.length === 10 ? setState({
                    ...state,
                    mobNum: event.target.value,
                    isValidMobNumber: true
                }) : setState({
                    ...state,
                    mobNum: event.target.value,
                    isValidMobNumber: false
                })
                break;
            case "lastDonated":
                setState({
                    ...state,
                    lastDonated: event.target.value
                })
                break;
            case "dob":
                event.target.value ? setState({
                    ...state,
                    dob: event.target.value,
                    isValidDOB: true
                }) : setState({
                    ...state,
                    dob: event.target.value,
                    isValidDOB: false
                })
                break;
            default:
               try{
                setLoading(true)
                let lat = null;
                let lang = null;
                let location = await getLocation()
                if(location!=null){
                    lat = location.coords.latitude
                    lang = location.coords.latitude
                }
                let payload = {
                    method: 'POST',
                    headers: HEADERS,
                    body: JSON.stringify(mobNum ? {
                        "fullName": fullName,
                        "emailId": email,
                        "mobileNumber": mobNum,
                        "password": password,
                        "gender": returnGender(gender),
                        "dob": dateToTimeStamp(dob),
                        "bloodType": bloodType,
                        "lastDonated": lastDonated ? dateToTimeStamp(lastDonated) : "",
                        "locations": [lat, lang],
                    } : {
                        "fullName": fullName,
                        "emailId": email,
                        "password": password,
                        "gender": returnGender(gender),
                        "dob": dateToTimeStamp(dob),
                        "bloodType": bloodType,
                        "lastDonated": lastDonated ? dateToTimeStamp(lastDonated) : "",
                        "locations": [[lat, lang]]
                    })
                }
                const url = `${URL}auth/register`
                const response = await fetchApi({ url, payload });
                if (response.status === 201) {
                    history.push({
                        pathname: '/otp',
                        state: { mobNum: mobNum }
                    })
                }
                else{
                    const responseJson = await response.json();
                    setError(responseJson);
                }
                setLoading(false)
               }
               catch(error){
                setLoading(false)
                setError(error)
               }
                break;
        }
    }

    return (
        <div>
            <TopBar />
            <Header />
            <BreadCrumbArea name="Register" />
            <div class="page-content contact-page-content-area padding-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="righti-content-area">
                                <div class="contact-page-form-wrap login-page">
                                    <h2 class="title">Register</h2>
                                    <form class="contact-page-form" novalidate="novalidate" enctype="multipart/form-data">
                                        <input type="hidden" name="_token" value="4LjcalTKYBSyvIdkVUCDxiLI3flVyWYIUuHivnSH" />
                                        <div class="row justify-content-center">
                                            <div class="col-lg-8">
                                                <Form.Group as={Row} className="required">
                                                    <Form.Label className="control-label" as="legend" column sm={3}>
                                                        FullName</Form.Label>
                                                    <Col >
                                                        <input type="text" name="name" placeholder="FullName" value={fullName}
                                                            onChange={(event) => handleChange({ ...event, type: "fullName" })}
                                                            class="form-control" required={true} aria-required="true" />
                                                        {!isValidFullName && (<Form.Text className="text-muted">
                                                            Fullname must be atleast 3 letters.</Form.Text>)}
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="required">
                                                    <Form.Label className="control-label" as="legend" column sm={3}>
                                                        Email</Form.Label>
                                                    <Col >
                                                        <Form.Control type="email" placeholder="test@email.com" value={email}
                                                            class="form-control"
                                                            onChange={(event) => handleChange({ ...event, type: "email" })}
                                                        />
                                                        {!isValidEmail && (<Form.Text className="text-muted">
                                                            Enter valid email address.</Form.Text>)}
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="required">
                                                    <Form.Label className="control-label" as="legend" column sm={3}>
                                                        Password</Form.Label>
                                                    <Col >
                                                        <input type="password" name="password" placeholder="Your Password" value={password}
                                                            class="form-control" required="" aria-required="true"
                                                            onChange={(event) => handleChange({ ...event, type: "password" })}
                                                        />
                                                        {!isValidPassword && (<Form.Text className="text-muted">
                                                            Password must contain minimum 7 characters .</Form.Text>)}
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="required">
                                                    <Form.Label className="control-label" as="legend" column sm={3}>
                                                        Confirm Password</Form.Label>
                                                    <Col >
                                                        <input type="password" name="password_confirmation"
                                                            placeholder="Confirm Password" class="form-control" required="" value={confirmPassword}
                                                            aria-required="true"
                                                            onChange={(event) => handleChange({ ...event, type: "confirmPassword" })} />
                                                        {!isValidConfirmPassword && (<Form.Text className="text-muted">
                                                            Password and confirmPassword must match.</Form.Text>)}
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="required">
                                                    <Form.Label className="control-label" as="legend" column sm={3}>
                                                        Blood Type</Form.Label>
                                                    <Col >
                                                        <Form.Control as="select" custom onChange={(event) => handleChange({ ...event, type: "bloodType" })}>
                                                            {bloodGroupList.map((data) => <option key={data.value} value={data.value}>{data.name}</option>)}
                                                        </Form.Control>
                                                        {!isValidBloodType && (<Form.Text className="text-muted">
                                                            Please select Blood type.</Form.Text>)}
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row}>
                                                    <Form.Label className="control-label" as="legend" column sm={3}>
                                                        Mobile Number</Form.Label>
                                                    <Col >
                                                        <input type="number" name="password_confirmation"
                                                            placeholder="Mobile Number" class="form-control" required="" value={mobNum}
                                                            aria-required="true"
                                                            onChange={(event) => handleChange({ ...event, type: "mobNum" })} />
                                                        {!isValidMobNumber && (<Form.Text className="text-muted">
                                                            Mobile number must contain 10 numbers.</Form.Text>)}
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="required">
                                                    <Form.Label as="legend" column sm={3} className="control-label">
                                                        Geneder</Form.Label>
                                                    <Col >
                                                        {genderList.map((data) =>
                                                            <Form.Check
                                                                type="radio"
                                                                label={data.name}
                                                                name="formHorizontalRadios"
                                                                id="formHorizontalRadios1"
                                                                checked={data.value === gender}
                                                                onChange={(e) => { handleChange({ ...data, type: "gender" }) }}
                                                            />
                                                        )}
                                                        {!isValidGender && (<Form.Text className="text-muted">
                                                            Select Gender.</Form.Text>)}
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="required">
                                                    <Form.Label className="control-label" as="legend" column sm={3}>
                                                        DOB</Form.Label>
                                                    <Col >
                                                        <input type="date" max={getEighteenYearAgoDate()} value={dob} onChange={event => handleChange({...event, type: "dob" })}/>
                                                        {!isValidDOB && (<Form.Text className="text-muted">
                                                            Select valid date of birth.</Form.Text>)}
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row}>
                                                    <Form.Label as="legend" column sm={3}>
                                                        Last Donated</Form.Label>
                                                    <Col >
                                                        <input type="date" max={getThreeMonthsBackDate()} value={lastDonated} onChange={event => handleChange({...event, type: "lastDonated" })}/>
                                                    </Col>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div class="form-group" style={{display:"flex", justifyContent:"center"}}>
                                            <Button value="Register" class="submit-btn register-as-donor" disabled={fullName.length < 3 || !validateEmail(email) || !(!password ? false : password.length > 6 && password === confirmPassword) || !bloodType || !gender || !dob || !(mobNum.length === 0 || mobNum.length === 10 ? true : false) || loading} onClick={() => { handleChange({ type: "register" }) }}>Register
                                            
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
    )
}

export default Register