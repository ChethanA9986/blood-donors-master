import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadCrumbArea from '../components/BreadCrumbArea';
import RequestComponent from './../components/RequestComponent';
import { Button, Form, Spinner } from 'react-bootstrap';
import _ from "lodash";
import LoadingOverlay from 'react-loading-overlay';
import {  URL } from "./../constants/constants";
import { useSelector, useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { getLocation, addValue } from './../constants/helper'
import { fetchApi } from "./../services/services"
import * as updateUser from "./../redux/actions/userDetailsAction";
function UpdateBloodRequest(props) {
    let history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [state, setState] = useState(
        {
            stateName: '',
            cityList: [{ name: "- - No Cities are Available - -", value: "" }],
            city:'',
            bloodType: '',
            noOfUnits:0,
            illness:'',
            hospitalName:'',
            hospitalAddress:'',
            message:'',
            prescription:'',
            isValidState: true,
            isValidBloodType: true,
            isValidCity: true,
            isValidNumberOfUnits: true,
            isValidHospitalName: true,
            isValidHospitalAddress: true,
            isValidMessage:true,
            isValidPrescription:true
        });
        const [loading, setLoading] = useState();
        const [error, setError] = useState();
        const {  stateName, city, bloodType, noOfUnits, illness, hospitalName, hospitalAddress, message, prescription, cityList
                 } = state;
        const userToken = useSelector(state => state.authReducer.userProfile);
        useEffect(async () => {
            try{
                setLoading(true)
                let url, data, payload;
                let flag = true;
                if(location.state === undefined){
                    payload = {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + userToken
                        },
                    }
                    url = `${URL}request/{requestId}?requestId=${localStorage.getItem("userRequest")}`
                    const response = await fetch(url, payload)
                    const responseJson = await response.json();
                    if(response.status === 200){
                        data = responseJson;
                    }
                    else{
                        flag = false;
                        setError(responseJson)
                    }
                }
                else{
                    data = location.state.data
                }
                //  payload = {
                //     method: 'GET',
                //     headers: {
                //         'Accept': 'application/json, text/plain, */*',
                //         'Content-Type': 'application/json',
                //         'Authorization': 'Bearer ' + userToken
                //     },
                // }
                // url = `${URL}location/{locationId}?locationId=60510470cf215743e458eb9b`
                    // setLoading(true)
                    // const response = await fetch(url, payload)
                    // const responseJson = await response.json();
                    // console.log(responseJson)
                    // console.log(data.bloodType)
                    if(flag){
                        setState({
                            ...state,
                            bloodType:data.bloodType,
                            noOfUnits:data.noOfUnits,
                            illness:data.illness,
                            hospitalName:data.hospitalInfo.name,
                            hospitalAddress:data.hospitalInfo.address,
                            message: data.message,
                            prescription:data.prescription
                        })
                    }
                    setLoading(false)
            } catch (e) {
                setError(e);
                setLoading(false)
            }
        }, []);
        const handleChange = async(event) => {
                switch (event.type) {
                    case "state":
                        setState({
                            ...state,
                            stateName: event.target.value
                        })
                        event.target.value ? setState({
                            ...state,
                            stateName: event.target.value,
                            isValidState: true
                        }) : setState({
                            ...state,
                            stateName: event.target.value,
                            isValidState: false
                        })
                        if(event.target.value){
                            setLoading(true);
                            const areaList = await fetch(`${URL}location/by_state?state=${event.target.value}`);
                            setLoading(false);
                            if (areaList.status === 200) {
                                const jsonData = await areaList.json();
                                console.log(jsonData)
                                if (jsonData.length != 0) {
                                    setState({
                                        ...state,
                                        cityList: addValue(jsonData),
                                        city: jsonData[0].name,
                                        stateName: event.target.value,
                                        isValidCity: true,
                                        isValidState: true
                                    })
                                  
                                }
                                else {
                                    setState({
                                        ...state,
                                        cityList: [{ name: "- - No Cities are Available - -", value: "" }],
                                        stateName: event.target.value,
                                        city:"",
                                        isValidCity: true,
                                        isValidState: true
                                    })
                                }
                              }
                        }
                    break;
                    case "city":
                         setState({
                            ...state,
                            city: event.target.value,
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
                    case "noOfUnits":
                        event.target.value>0 ? setState({
                            ...state,
                            noOfUnits: parseInt(event.target.value),
                            isValidNumberOfUnits: true
                        }) : setState({
                            ...state,
                            noOfUnits: parseInt(event.target.value),
                            isValidNumberOfUnits: false
                        })
                        break;
                    case "illness":
                        setState({
                            ...state,
                            illness: event.target.value
                        })
                        break;
                    case "hospitalName":
                        event.target.value ? setState({
                            ...state,
                            hospitalName: event.target.value,
                            isValidHospitalName: true
                        }) : setState({
                            ...state,
                            hospitalName: event.target.value,
                            isValidHospitalName: false
                        })
                        break;
                    case "hospitalAddress":
                        event.target.value ? setState({
                            ...state,
                            hospitalAddress: event.target.value,
                            isValidHospitalAddress: true
                        }) : setState({
                            ...state,
                            hospitalAddress: event.target.value,
                            isValidHospitalAddress: false
                        })
                        break;
                    case "message":
                        setState({
                            ...state,
                            message: event.target.value
                        }) 
                    break;
                    case "prescription":
                        setState({
                            ...state,
                            prescription: event.target.value
                        }) 
                    break;
                    default:
                        try{
                            let lat = null;
                            let lang = null;
                            let location = await getLocation()
                            if(location!=null){
                                lat = location.coords.latitude
                                lang = location.coords.latitude
                            }
                            let payload = {
                                method: 'PUT',
                                headers: {
                                    'Accept': 'application/json, text/plain, */*',
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + userToken
                                },
                                body: JSON.stringify(
                                    {
                                        "bloodType": bloodType,
                                        "location": city ? _.find(cityList, function (o) { return o.name === city })._id: "",
                                        "geo": {
                                          "lat":lat,
                                          "lng":lang
                                        },
                                        "noOfUnits": noOfUnits,
                                        "illness": illness,
                                        "hospitalInfo": {
                                          "name": hospitalName,
                                          "address": hospitalAddress,
                                        },
                                        "message": message,
                                        "prescription":"https://blood-dev.s3.ap-south-1.amazonaws.com/uploads/6753848b-c729-4a36-9be7-fbe649d30523.png"
                                      }
                                )
                            }
                            setLoading(true)
                            const url = `${URL}request?requestId=${localStorage.getItem("userRequest")}`
                            const response = await fetchApi({ url: url, payload: payload })
                            console.log(response.status)
                            if(response.status === 401){
                                const jsonData = await response.json();
                                if(jsonData.message === "Token error: jwt malformed"){
                                    alert("User session expired");
                                    localStorage.clear();
                                    dispatch(updateUser.updateUser(null));
                                }
                                else{
                                    setError(jsonData);
                                }
                            }
                            else if(response.status === 200){
                                alert("blood request updated")
                            }
                            setLoading(false)
                        }
                        catch(e){
                            setLoading(false);
                            console.log("EEEEEEEEEEEEEEEEEEEEEEE",e)
                            setError(e)
                        }
                        break;
                }
        }
    return (
        <div>
           <TopBar />
            <Header />
            <BreadCrumbArea name="Update Blood Request" />
            <LoadingOverlay
                                    active={loading}
                                    spinner
                                    text='Loading your content...'
                                >
            <div class="page-content contact-page-content-area padding-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="righti-content-area">
                                <div class="contact-page-form-wrap login-page">
                                    <h2 class="title">Update Blood Request</h2>
                                    <form class="contact-page-form" novalidate="novalidate" enctype="multipart/form-data">
                                        <input type="hidden" name="_token" value="4LjcalTKYBSyvIdkVUCDxiLI3flVyWYIUuHivnSH" />
                                        <RequestComponent name={state} callback={handleChange}/>
                                        <div class="form-group">
                                            <Button value="Register" class="submit-btn register-as-donor" disabled={
                                                 !bloodType  || !stateName || !(noOfUnits>0) || !hospitalName || !hospitalAddress  || loading} onClick={() => { handleChange({ type: "register" }) }}>Update
                                            
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
            </LoadingOverlay>
            <Footer />
        </div>
    )
}
export default UpdateBloodRequest