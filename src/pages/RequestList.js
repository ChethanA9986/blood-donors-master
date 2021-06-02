import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadCrumbArea from '../components/BreadCrumbArea';
import LoadingOverlay from 'react-loading-overlay';
import { Button } from 'react-bootstrap';
import _ from "lodash";
import { URL } from "./../constants/constants";
import { useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { fetchApi } from "./../services/services"

function RequestList(props) {
    let history = useHistory();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState();
    const userToken = useSelector(state => state.authReducer.userProfile);
    const [requestList, setRequestList] = useState([])
    useEffect(async () => {
        const payload = {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
        }
        const url = `${URL}request/my_requests`
        try {
            setLoading(true)
            const response = await fetchApi({ url: url, payload: payload })
            const responseJson = await response.json();
            if (response.status === 200) {
                setRequestList(responseJson);
            }
            else {
                setError(responseJson)
            }
            setLoading(false)
        } catch (e) {
            setError(e)
            setLoading(false)
        }
    }, []);
    const handleEdit = (data) => {
        localStorage.setItem("userRequest", data._id);
        history.push({
            pathname: '/updateBloodRequest',
            state: { data: data }
        })
    }
    return (
        <div>
            <TopBar />
            <Header />
            <BreadCrumbArea name="Request List" />
            <div class="recently-requested-area padding-bottom-90">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title margin-bottom-60">
                                <h2 class="title">My Requests</h2>
                                <span class="separator"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="recent-requested-blood-table table-responsive">
                                <LoadingOverlay
                                    active={loading}
                                    spinner
                                    text='Loading your content...'
                                >
                                    <table class="table table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Blood Group</th>
                                                <th scope="col">Number Of Units</th>
                                                <th scope="col">Illness</th>
                                                <th scope="col">Contact Number</th>
                                                <th scope="col">Hospital Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {requestList.length && !error ? requestList.map((data, i) =>
                                                <tr key={i}>
                                                    <th scope="row">{data.requestor.firstName}</th>
                                                    <td>{data.requestor.emailId}</td>
                                                    <td>{data.bloodType}</td>
                                                    <td>{data.noOfUnits}</td>
                                                    <td>{data.illness}</td>
                                                    <td>{data.requestor.mobileNumber}</td>
                                                    <td>{data.hospitalInfo.address}</td>
                                                    <td><Button onClick={() => handleEdit(data)}>Edit</Button></td>
                                                </tr>
                                            ) : error ? <div>{error.message}</div> : <div>No Requests Found</div>}
                                        </tbody>
                                    </table>
                                </LoadingOverlay>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default RequestList