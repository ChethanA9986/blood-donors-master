import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FixedButton from '../components/FixedButton';
import BreadCrumbArea from '../components/BreadCrumbArea';
import DonorSearch from './../components/DonorSearch';
import { useSelector, useDispatch } from "react-redux";
import './../App.css';

function DonorsPage(props) {
    const locationObj = useSelector(state => state.donorSearchReducer);
    const { donorsList } = locationObj;
    return (
        <div>
            <FixedButton/>
            <TopBar />
            <Header />
            <BreadCrumbArea name="Donors" />
            <DonorSearch />
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
                        </div>)) : <div>No donors found in this location</div>)}
                        <div class="col-lg-12">
                            <nav class="pagination-wrapper" aria-label="Page navigation">

                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default DonorsPage;