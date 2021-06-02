import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

BreadCrumbArea.propTypes = {

};

function BreadCrumbArea(props) {
    const { name, path } = props
        return(
            <div class="breadcrumb-area" style={{ backgroundImage: "url(assets/uploads/breadcrumb-bg-29654.jpg)" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-inner">
                                <h2 class="page-title"> {name}
                                </h2>
                                <ul class="page-list">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link>{name}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default BreadCrumbArea;