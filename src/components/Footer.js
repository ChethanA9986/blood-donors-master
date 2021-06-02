import React from 'react';

function Footer(props) {
    return (
        <footer class="footer-area">
            <div class="footer-top-area padding-top-100 padding-bottom-60">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="footer-top-area-inner">
                                <div class="left-content-area">
                                    <ul class="contact-info">
                                        <li>
                                            <div class="single-contact-info">
                                                <div class="icon">
                                                    <i class="fas fa-envelope"></i>
                                                </div>
                                                <div class="content">
                                                    <h4 class="title">Email Address</h4>
                                                    <span class="detials">support@sonuforyou.com</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="single-contact-info">
                                                <div class="icon">
                                                    <i class="fas fa-phone"></i>
                                                </div>
                                                <div class="content">
                                                    <h4 class="title">Emergency Calling</h4>
                                                    <span class="detials">+919986516463</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="right-content-area">
                                    <div class="share-widget">
                                        <h4 class="title">Let&#039;s Connect</h4>
                                        <ul class="social-share">
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="widget footer-widget about_widget">
                                <div class="footer-logo">
                                    <a href="index.html"><img src="assets/uploads/about-widget-logo.png"
                                        alt=" Footer Logo" /></a>
                                </div>
                                <p>“One good thing about donation, once you do it, you get addicted to it because it brings
                                great joy and happiness to you.”</p>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="widget footer-widget">
                                <h2 class="widget-title">Useful Links</h2>
                                <ul class="pages-list">
                                    <li><a href="https://blood-donation.weavingwords.in/join-donor">Join Us</a></li>
                                    <li><a href="https://blood-donation.weavingwords.in/about">About Us</a></li>
                                    <li><a href="https://blood-donation.weavingwords.in/contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="widget footer-widget">
                                <h2 class="widget-title">Recent Posts</h2>
                                <ul class="recent_post_item">
                                    <li class="single-recent-post-item">
                                        <div class="thumb">
                                            <img src="assets/uploads/blog/blog-grid-4.jpg"
                                                alt="Subjects to ecstatic children  up as built match gravida" />
                                        </div>
                                        <div class="content">
                                            <h4 class="title"><a
                                                href="blog/4/subjects-to-ecstatic-children-up-as-built-match-gravida.html">Subjects
                                                to ecstatic children up as built match gravida</a></h4>
                                            <span class="times">1 year ago</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class=" widget footer-widget">
                                <h2 class="widget-title">Important Links</h2>
                                <ul class="pages-list">
                                    <li><a href="https://blood-donation.weavingwords.in/">Home</a></li>
                                    <li><a href="https://blood-donation.weavingwords.in/donors">Search Donors</a></li>
                                    <li><a href="https://blood-donation.weavingwords.in/about">About Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            &copy; Copyright 2021 . All Right Reserved By Weforyou
                </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;