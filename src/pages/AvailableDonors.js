import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FixedButton from '../components/FixedButton';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingOverlay from 'react-loading-overlay';
import BreadCrumbArea from '../components/BreadCrumbArea';
import { HEADERS, URL } from './../constants/constants';
import { fetchApi } from './../services/services';
import './../App.css';

function AvailableDonors(props) {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [donorsList, setDonorsList] = useState([]);
    const [error, setError] = useState();
    const location = useLocation();
    if (location.bloodType === undefined) {
        history.push('/')
    }
    useEffect(async () => {
        try {
            if (location.bloodType != undefined) {
                window.scrollTo(0, 0);
                const payload = {
                    method: 'POST',
                    headers: HEADERS,
                    body: JSON.stringify({
                        "bloodType": location.bloodType.name
                    })
                }
                const url = `${URL}user/search`
                const response = await fetchApi({ url, payload });
                const responseJson = await response.json();
                if (response.status === 200 || response.status === 201) {
                    setDonorsList(responseJson)
                }
                else {
                    setError(responseJson)
                }
                setLoading(false)
            }
        }
        catch (e) {
            console.log(e)
            setError(error)
            setLoading(false)
        }
    }, [])
    return (
        <div>
            <FixedButton />
            <TopBar />
            <Header />
            <BreadCrumbArea name={`Available Donors in ${location.bloodType === undefined ? '' : location.bloodType.name}`} />
            <LoadingOverlay active={loading}
                spinner>
                <section class="dedicated-team-area padding-120 ">
                    <div class="container">
                        <div class="row" style={{ justifyContent: "center" }}>
                            {donorsList != null && (donorsList.length != 0 ? (donorsList.map((data) => <div class="col-lg-3 col-md-6">
                                <div class="single-donors-item margin-bottom-30">
                                    <div class="thumb">
                                        <img src={data.profileImage} alt="no img available" />
                                    </div>
                                    <div class="content">
                                        <a href="donor-profile/34/rahul.html">
                                            <h4 class="title">{data.firstName}</h4>
                                        </a>
                                        <span class="blood-group">Blood Group: <strong>{data.donorDetails.bloodType}</strong></span>
                                        <span class="total-donate">Current Location: <strong>{data.donorDetails.address}</strong></span>
                                    </div>
                                </div>
                            </div>)) : <div>No donors found in this Blood type</div>)}
                            <div class="col-lg-12">
                                <nav class="pagination-wrapper" aria-label="Page navigation">

                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </LoadingOverlay>
            <Footer />
        </div>
    )
}
export default AvailableDonors;