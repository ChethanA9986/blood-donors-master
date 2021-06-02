import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import { stateList, bloodGroupList } from "./../constants/constants";
import { Spinner, Button, Col, Form } from "react-bootstrap";
import * as donorSearchAction from "./../redux/actions/donorSearchAction";

function DonorSearch(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const locationObj = useSelector(state => state.donorSearchReducer);
    const cities = [...locationObj.cities];
    const { stateName, cityName, bloodType } = locationObj;
    const disableFlag = (locationObj.stateName && locationObj.cityName && locationObj.bloodType) ? false : true;

    const handleStateSelect = (event) => {
        dispatch(donorSearchAction.donorSearchCityAsync(event.target.value));
    }
    const handleCitySelect = (event) => {
        dispatch(donorSearchAction.setCity(event.target.value));
    }
    const handleBloodTypeSelect = (event) => {
        dispatch(donorSearchAction.setBloodType(event.target.value));
    }
    const handleButton = () => {
        history.push("/donors")
        const locationId = _.find(cities, function (o) { return o.name === cityName });
        dispatch(donorSearchAction.donorSearch({ ...locationId, bloodType: bloodType }));
    }

    return (
        <div class="header-bottom-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="blood-search-warpper">
                            <form action="https://sonu4u.weavingwords.in/donors/search" class="blood-search-form"
                                method="get">
                                <ul class="fields-list">
                                    <li>
                                        <Col >
                                            <Form.Control as="select" custom onChange={handleStateSelect} value={stateName}>
                                                {stateList.map((data) => <option key={data.value} value={data.value}>{data.name}</option>)}
                                            </Form.Control>
                                        </Col>
                                    </li>
                                    <li>
                                        <Col >
                                            <Form.Control as="select" custom disabled={cities[0].value != "" ? false : true}
                                                value={cityName} onChange={handleCitySelect}>
                                                {cities.map((data) => <option key={data.value} value={data.value}>{data.name}</option>)}
                                            </Form.Control>
                                        </Col>
                                    </li>
                                    <li>
                                        <Col>
                                            <Form.Control as="select" value={bloodType} onChange={handleBloodTypeSelect}>
                                                {bloodGroupList.map((data) => <option key={data.value} value={data.value}>{data.name}</option>)}
                                            </Form.Control>
                                        </Col>
                                    </li>
                                    <li>
                                        <Button class="submit-btn"style = {{minWidth:"204px",height:"41px",marginLeft:"34px"}} disabled={locationObj.loading || disableFlag} onClick={handleButton}>
                                            Search Donor
                                           {locationObj.loading && (<Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />)}
                                        </Button>

                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DonorSearch;