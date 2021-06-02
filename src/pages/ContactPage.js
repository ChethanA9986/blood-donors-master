import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadCrumbArea from '../components/BreadCrumbArea';
import FixedButton from '../components/FixedButton';

function ContactPage(props) {
    return (
        <div>
            <FixedButton/>
            <TopBar />
            <Header />
            <BreadCrumbArea name="Contact" />
            <div class="page-content contact-page-content-area padding-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content-area">
                                <div class="inner-title margin-bottom-55">
                                    <h3 class="title">Get In Touch</h3>
                                    <p>Instantly cordially far intention recommend estimable yet her his. Stimulated discretion
                                impossible admiration in particular conviction up.</p>
                                </div>
                                <ul class="contact-info-list">
                                    <li class="single-info-item">
                                        <div class="icon">
                                            <i class="fas fa-home"></i>
                                        </div>
                                        <div class="content">
                                            <span class="details">Bangalore, India</span>
                                        </div>
                                    </li>
                                    <li class="single-info-item">
                                        <div class="icon">
                                            <i class="fas fa-phone"></i>
                                        </div>
                                        <div class="content">
                                            <span class="details">+919986516463</span>
                                        </div>
                                    </li>
                                    <li class="single-info-item">
                                        <div class="icon">
                                            <i class="fas fa-envelope"></i>
                                        </div>
                                        <div class="content">
                                            <span class="details">info@sonuforyou.com</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="righti-content-area">
                                <div class="contact-page-form-wrap">
                                    <form action="https://sonu4u.weavingwords.in/contact" id="contact_page_form" method="post"
                                        class="contact-page-form" novalidate="novalidate">
                                        <input type="hidden" name="_token" value="4LjcalTKYBSyvIdkVUCDxiLI3flVyWYIUuHivnSH" />
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <input type="text" name="name" placeholder="Your Name" class="form-control"
                                                        required="" aria-required="true" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <input type="email" name="email" placeholder="Your Email"
                                                        class="form-control" required="" aria-required="true" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <input type="text" name="subject" placeholder="Your Subject"
                                                        class="form-control" required="" aria-required="true" />
                                                </div>
                                                <div class="form-group">
                                                    <textarea class="form-control" name="message" cols="30" rows="10"
                                                        required="" placeholder="Message"></textarea>
                                                </div>
                                                <div class="form-group">
                                                    <input type="submit" value="Submit Message" class="submit-btn" />
                                                </div>
                                            </div>
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
export default ContactPage