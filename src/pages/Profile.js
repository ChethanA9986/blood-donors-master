import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadCrumbArea from '../components/BreadCrumbArea';
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Col, Row, Spinner } from 'react-bootstrap';
import LoadingOverlay from 'react-loading-overlay';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { genderList, bloodGroupList, HEADERS, URL } from './../constants/constants';
import { dateToTimeStamp, validateEmail, returnGender, getLocation, returnGenderNumber } from './../constants/helper'
import { fetchApi } from "./../services/services"

function Profile(props) {
    const dispatch = useDispatch();
    const imgRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [imgUploadFlag, setImageUploadFlag] = useState(false)
    const [imgPath, setImgPath] = useState();
    const [state, setState] = useState(
        {
            fullName: '',
            email: '',
            gender: '',
            bloodType: '',
            address: '',
            geo: '',
            mobNum: '',
            imgSrc: '',
            lastDonated: '',
            isValidEmail: true,
            isValidGender: true,
            isValidBloodType: true,
            isValidFullName: true,
            isValidMobNumber: true,
            isValidDOB: true
        });
    const { fullName, email, gender, bloodType, imgSrc, geo, mobNum, dob, lastDonated, address, isValidDOB, isValidMobNumber, isValidBloodType, isValidGender, isValidConfirmPassword, isValidPassword, isValidEmail, isValidFullName } = state;
    const userToken = useSelector(state => state.authReducer.userProfile);

    useEffect(async () => {
        try {
            setLoading(true)
            const payload = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                },
            }
            const url = `${URL}user/get_my_profile`
            const response = await fetchApi({ url: url, payload: payload })
            const responseJson = await response.json();
            if (response.status === 200) {
                setState({
                    ...state,
                    fullName: responseJson.firstName + " " + responseJson.lastName,
                    email: responseJson.emailId,
                    bloodType: responseJson.donorDetails.bloodType,
                    mobNum: responseJson.mobileNumber,
                    gender: returnGenderNumber(responseJson.gender),
                    dob: new Date(responseJson.dob),
                    lastDonated: responseJson.donorDetails.lastDonated ? new Date(responseJson.donorDetails.lastDonated) : "",
                    address: responseJson.donorDetails.address,
                    imgSrc: responseJson.profileImage
                })
            }
            else {
                setError(responseJson);
            }
            setLoading(false)
        } catch (e) {
            setError(error)
            setLoading(false)
        }
    }, []);

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
                    lastDonated: event.date
                })
                break;
            case "dob":
                event.date ? setState({
                    ...state,
                    dob: event.date,
                    isValidDOB: true
                }) : setState({
                    ...state,
                    dob: event.date,
                    isValidDOB: false
                })
                break;
            case "address":
                setState({
                    ...state,
                    address: event.target.value
                })
                break;
            default:
                try {
                    let imageUploadStatus = false;
                    let imgResponseJson;
                    setLoading(true);
                    if (imgUploadFlag) {
                        console.log(imgPath)
                        let formData = new FormData();
                        formData.append('file', imgPath);
                        formData.append('type', "image/png")
                        const payload = {
                            method: 'POST',
                            headers: {
                                'Authorization': 'Bearer ' + userToken
                            },
                            body: formData
                        }
                        const imgResponse = await fetch(`${URL}file/upload_files`, payload);
                         imgResponseJson = await imgResponse.json();
                        if (imgResponse.status === 201) {
                            imageUploadStatus = true;
                        }
                        else {
                            setError(imgResponseJson)
                            return
                        }
                    }
                    const payload = {
                        method: 'PUT',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + userToken
                        },
                        body: JSON.stringify(imgUploadFlag ? {
                            "fullName": fullName,
                            "emailId": email,
                            "mobileNumber": mobNum,
                            "gender": returnGender(gender),
                            "dob": dateToTimeStamp(dob),
                            "bloodType": bloodType,
                            "lastDonated": lastDonated ? dateToTimeStamp(lastDonated) : "",
                            "profileImage": imgResponseJson[0].fileName
                        } : {
                                "fullName": fullName,
                                "emailId": email,
                                "mobileNumber": mobNum,
                                "gender": returnGender(gender),
                                "dob": dateToTimeStamp(dob),
                                "bloodType": bloodType,
                                "lastDonated": lastDonated ? dateToTimeStamp(lastDonated) : ""
                            })
                    }
                    const url = `${URL}user/update_my_profile`
                    if (imgUploadFlag) {
                        if (imageUploadStatus) {
                            const response = await fetchApi({ url: url, payload: payload });
                            if (response.status === 200) {
                                alert("Profile updated successfully")
                            }
                            else {
                                const responseJson = await response.json();
                                setError(responseJson)
                            }
                        }
                        else {
                            alert("Image upload failed");
                        }
                    }
                    else {
                        const response = await fetchApi({ url: url, payload: payload });
                        if (response.status === 200) {
                            alert("Profile updated successfully")
                        }
                        else {
                            const responseJson = await response.json();
                            setError(responseJson)
                        }

                    }
                    setLoading(false)
                }
                catch (e) {
                    setError(e)
                    setLoading(false)
                    console.log(e)
                }
                break;
        }
    }

    const handleUpload = () => {
        imgRef.current.click();
    }

    const uploadImage = (e) => {
        let file = e.target.files[0];
        setImgPath(e.target.files[0]);
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = async () => {
            setState({
                ...state,
                imgSrc: reader.result
            })
            setImageUploadFlag(true);
        }
        reader.onerror = function (error) {
            console.log('Error: ', error);
        }
    }
    return (
        <div>
            <TopBar />
            <Header />
            <BreadCrumbArea name="Profile" />
            <LoadingOverlay
                active={loading}
                spinner
                text='Loading your content...'
            >
                <div class="donor-dashboard-page-content padding-120">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                            </div>
                            <div class="col-lg-4">
                                <div class="donor-sidebar">
                                    <div class="profile-img">
                                        {loading ? <img src="../../assets/uploads/no-image.png" alt="" /> : <div>
                                            <img src={imgSrc} alt="" />
                                        </div>}
                                    </div>
                                    <div class="donor-info">
                                        <h4 class="username"> {fullName}</h4>
                                        <div class="btn-wrapper">
                                            <input type="file" id="imgupload" ref={imgRef} style={{ display: 'none' }} accept="image/*" onChange={uploadImage} />
                                            <Button data-toggle="modal" data-target="#donor_contact" class="boxed-btn" onClick={handleUpload}>Upload</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="donor-content-area">
                                    <h2 class="title">Donor Information</h2>
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            {error != null && <Form.Text className="text-muted">
                                                {error.message}</Form.Text>}
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
                                                    Blood Type</Form.Label>
                                                <Col >
                                                    <Form.Control as="select" value={bloodType} custom onChange={(event) => handleChange({ ...event, type: "bloodType" })}>
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
                                                <Form.Label as="legend" column sm={3} value={gender} className="control-label" >
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
                                                    <DatePicker selected={dob} onChange={date => handleChange({ date: date, type: "dob" })} />
                                                    {!isValidDOB && (<Form.Text className="text-muted">
                                                        Select valid date of birth.</Form.Text>)}
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label as="legend" column sm={3}>
                                                    Last Donated</Form.Label>
                                                <Col >
                                                    <DatePicker selected={lastDonated} onChange={date => handleChange({ date: date, type: "lastDonated" })} />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row}>
                                                <Form.Label className="control-label" as="legend" column sm={3}>
                                                    Address</Form.Label>
                                                <Col >
                                                    <input type="text" class="form-control" required="" value={address}
                                                        aria-required="true"
                                                        onChange={(event) => handleChange({ ...event, type: "address" })} />
                                                </Col>
                                            </Form.Group>
                                            <div class="form-group">
                                                <Button value="Register" class="submit-btn register-as-donor" disabled={!(isValidBloodType && isValidDOB && isValidEmail && isValidFullName && isValidGender && isValidMobNumber)}
                                                    onClick={() => handleChange({ type: "register" })}>
                                                    Update
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LoadingOverlay>
            <Footer />
        </div>
    )
}
export default Profile