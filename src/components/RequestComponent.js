import React, { useState } from 'react';
import { stateList, bloodGroupList, URL } from "./../constants/constants";
import { Button, Form, Col, Row, Spinner } from 'react-bootstrap';
function RequestComponent(props) {
    const { stateName, city, bloodType, noOfUnits, illness, hospitalName, hospitalAddress, message, prescription, cityList,
        isValidBloodType, isValidState, isValidCity, isValidNumberOfUnits, isValidHospitalName, isValidHospitalAddress,
        isValidMessage, isValidPrescription } = props.name;
    // const {  props.callback } = props.callback
    return (
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <Form.Group as={Row} className="required">
                    <Form.Label className="control-label" as="legend" column sm={3}>
                        State</Form.Label>
                    <Col >
                        <Form.Control as="select" custom onChange={(event) => props.callback({ ...event, type: "state" })} value={stateName}>
                            {stateList.map((data) => <option key={data.value} value={data.value}>{data.name}</option>)}
                        </Form.Control>
                        {!isValidState && (<Form.Text className="text-muted">
                            Please select state.</Form.Text>)}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="required">
                    <Form.Label className="control-label" as="legend" column sm={3}>
                        City</Form.Label>
                    <Col >
                        <Form.Control as="select" custom onChange={(event) => props.callback({ ...event, type: "city" })} value={city}>
                            {cityList.map((data) => <option key={data.value} value={data.value}>{data.name}</option>)}
                        </Form.Control>
                        {!isValidCity && (<Form.Text className="text-muted">
                            Please select city.</Form.Text>)}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="required">
                    <Form.Label className="control-label" as="legend" column sm={3}>
                        Blood Type</Form.Label>
                    <Col >
                        <Form.Control as="select" value={bloodType} custom onChange={(event) => props.callback({ ...event, type: "bloodType" })}>
                            {bloodGroupList.map((data) => <option key={data.value} value={data.value}>{data.name}</option>)}
                        </Form.Control>
                        {!isValidBloodType && (<Form.Text className="text-muted">
                            Please select Blood type.</Form.Text>)}
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label className="control-label" as="legend" column sm={3}>
                        Number of Units</Form.Label>
                    <Col >
                        <input type="number" name="password_confirmation"
                            placeholder="Number of Units" class="form-control" required="" value={noOfUnits}
                            aria-required="true"
                            onChange={(event) => props.callback({ ...event, type: "noOfUnits" })} />
                        {!isValidNumberOfUnits && (<Form.Text className="text-muted">
                            Please enter number of units blood required.</Form.Text>)}
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label className="control-label" as="legend" column sm={3}>
                        Illness</Form.Label>
                    <Col >
                        <input type="text" name="name" placeholder="Illness" value={illness}
                            onChange={(event) => props.callback({ ...event, type: "illness" })}
                            class="form-control" required={true} aria-required="true" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="required">
                    <Form.Label className="control-label" as="legend" column sm={3}>
                        Hospital Name</Form.Label>
                    <Col >
                        <input type="text" name="name" placeholder="Hospital Name" value={hospitalName}
                            onChange={(event) => props.callback({ ...event, type: "hospitalName" })}
                            class="form-control" required={true} aria-required="true" />
                        {!isValidHospitalName && (<Form.Text className="text-muted">
                            Please enter hospital name</Form.Text>)}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="required">
                    <Form.Label className="control-label" as="legend" column sm={3}>
                        Hospital Address</Form.Label>
                    <Col >
                        <input type="text" name="name" placeholder="Hospital address" value={hospitalAddress}
                            onChange={(event) => props.callback({ ...event, type: "hospitalAddress" })}
                            class="form-control" required={true} aria-required="true" />
                        {!isValidHospitalAddress && (<Form.Text className="text-muted">
                            Please enter hospital address.</Form.Text>)}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label className="control-label" as="legend" column sm={3}>
                        Message</Form.Label>
                    <Col >
                        <textarea onChange={(event) => props.callback({ ...event, type: "message" })}
                            class="form-control" required={true} aria-required="true" > {message} </textarea>

                        {!isValidMessage && (<Form.Text className="text-muted">
                            Fullname must be atleast 3 letters.</Form.Text>)}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="required" >
                    <Form.Label className="control-label" as="legend" column sm={3} style={{ height: "60px" }}>
                        Prescription</Form.Label>
                    <Col >
                        <input type="file" name="name" placeholder="Prescription" value={prescription}
                            onChange={(event) => props.callback({ ...event, type: "prescription" })}
                            class="form-control" required={true} aria-required="true" />
                        {!isValidPrescription && (<Form.Text className="text-muted">
                            Fullname must be atleast 3 letters.</Form.Text>)}
                    </Col>
                </Form.Group>
            </div>
        </div>
    )
}
export default RequestComponent