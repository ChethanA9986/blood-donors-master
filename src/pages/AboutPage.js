import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FixedButton from '../components/FixedButton';
import BreadCrumbArea from '../components/BreadCrumbArea';
import './../App.css'

function AboutPage(props) {
    return (
        <div>
            <FixedButton/>
            <TopBar />
            <Header />
            <BreadCrumbArea name="About Us" />
            <div class="about-us-content padding-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content-area">
                                <p><span class="about-span">Few
                                Words About who we are and what we do</span></p>
                                <p class="about-style">
                                    Lorem ipsum dolorsit amet consectetur adipisicing elit. A atque aliquam pariatur accusantium
                                    nostrum eos sapiente sequi culpa perspiciatis consequuntur, sint error. Mollitia placeat in
                            dolor illo tenetur nostrum. Repellat.</p>
                                <p class="about-style">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque aliquam pariatur
                                    accusantium nostrum eos sapiente sequi culpa perspiciatis consequuntur, sint error. Mollitia
                            placeat in dolor illo tenetur nostrum. Repellat.</p>
                                <p><br /></p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content-area">
                                <div class="img-wrapper">
                                    <img src="assets/uploads/about-us-image-917787.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="why-donate-blood-area gray-bg padding-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title margin-bottom-60">
                                <h2 class="title">Why You Should Donate</h2>
                                <span class="separator"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="img-wrapper">
                                <img src="assets/uploads/why-donate-image-666440.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content-area">
                                <div>
                                    <h4 class="title about-style2" >
                                        1. Reduce risk of heart attack and liver ailment</h4>
                                    <p className="about-style2" >
                                        <span className="about-span2">Donating
                                        blood regularly is benefical to prevent and reduce heart attacks and liver ailment.
                                        The risk of heart and liver related problem is caused by the iron overload in the
                                    body.</span></p>
                                    <h4 class="title about-style2" >
                                        2. Lower the risk of cancer</h4>
                                    <p className="about-style2">
                                        <span className="about-span2">Cancer
                                        is the most feared and deadly disease. Blood donation help in lowering the risk of
                                        cancer by donating blood regularly the iron level in the blood is bananced and the
                                    risk of cancer.</span></p>
                                    <h4 class="title about-style2">
                                        3. Speeds up healing process</h4>
                                    <p className="about-style2"
                                    >
                                        <span className="about-span2">The
                                        body tries to adjust to the loss of blood the cells we donate blood these
                                    adjustments also help in accelerating the wound healing process.</span><br /></p>
                                    <p className="about-style2" >
                                        <br /></p>
                                    <p className="about-style2">
                                        <br /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="dedicated-team-area padding-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title margin-bottom-60">
                                <h2 class="title">Our Volunteer Members</h2>
                                <span class="separator"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">

                            <div class="our-dedicated-team-carousel owl-carousel">
                                <div class="single-team-member">
                                    <div class="thumb">
                                        <span class="blood-group">a+</span>
                                        <img style={{ maxWidth: "200px" }} src="assets/uploads/volunteers/volunteers-pic-10.jpg"
                                            alt="Myron Merritt" />
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Myron Merritt</h4>
                                        <span class="designation">Founder</span>
                                        <ul class="social-icon">
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="single-team-member">
                                    <div class="thumb">
                                        <span class="blood-group">a+</span>
                                        <img style={{ maxWidth: "200px" }} src="assets/uploads/volunteers/volunteers-pic-9.jpg"
                                            alt="Larry Ford" />
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Larry Ford</h4>
                                        <span class="designation">General Member</span>
                                        <ul class="social-icon">
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="single-team-member">
                                    <div class="thumb">
                                        <span class="blood-group">b+</span>
                                        <img style={{ maxWidth: "200px" }} src="assets/uploads/volunteers/volunteers-pic-8.jpg"
                                            alt="Gary  Ladner" />
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Gary Ladner</h4>
                                        <span class="designation">General Member</span>
                                        <ul class="social-icon">
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="single-team-member">
                                    <div class="thumb">
                                        <span class="blood-group">a-</span>
                                        <img style={{ maxWidth: "200px" }} src="assets/uploads/volunteers/volunteers-pic-7.jpg"
                                            alt="Charlie Buckner" />
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Charlie Buckner</h4>
                                        <span class="designation">Founder</span>
                                        <ul class="social-icon">
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="single-team-member">
                                    <div class="thumb">
                                        <span class="blood-group">a+</span>
                                        <img style={{ maxWidth: "200px" }} src="assets/uploads/volunteers/volunteers-pic-6.jpg"
                                            alt="Michael Hughes" />
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Michael Hughes</h4>
                                        <span class="designation">General Member</span>
                                        <ul class="social-icon">
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="single-team-member">
                                    <div class="thumb">
                                        <span class="blood-group">b+</span>
                                        <img style={{ maxWidth: "200px" }} src="assets/uploads/volunteers/volunteers-pic-5.jpg"
                                            alt="Roberto McDermott" />
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Roberto McDermott</h4>
                                        <span class="designation">Founder</span>
                                        <ul class="social-icon">
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="single-team-member">
                                    <div class="thumb">
                                        <span class="blood-group">o+</span>
                                        <img style={{ maxWidth: "200px" }} src="assets/uploads/volunteers/volunteers-pic-4.jpg"
                                            alt="Earl Cho" />
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Earl Cho</h4>
                                        <span class="designation">Founder</span>
                                        <ul class="social-icon">
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="single-team-member">
                                    <div class="thumb">
                                        <span class="blood-group">o+</span>
                                        <img style={{ maxWidth: "200px" }} src="assets/uploads/volunteers/volunteers-pic-3.jpg"
                                            alt="Jorge Amos" />
                                    </div>
                                    <div class="content">
                                        <h4 class="title">Jorge Amos</h4>
                                        <span class="designation">General Member</span>
                                        <ul class="social-icon">
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="coutnerup-area red-bg padding-80">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="single-counterup-item">
                                <div class="icon">
                                    <i class="fas fa-address-book"></i>
                                </div>
                                <div class="content">
                                    <span class="count-num">2050</span>
                                    <h4 class="title">Happy Donors</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-counterup-item">
                                <div class="icon">
                                    <i class="fas fa-tint"></i>
                                </div>
                                <div class="content">
                                    <span class="count-num">3000</span>
                                    <h4 class="title">Volunteers</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-counterup-item">
                                <div class="icon">
                                    <i class="fas fa-grin"></i>
                                </div>
                                <div class="content">
                                    <span class="count-num">33</span>
                                    <h4 class="title">Blood Group</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-counterup-item">
                                <div class="icon">
                                    <i class="fas fa-trophy"></i>
                                </div>
                                <div class="content">
                                    <span class="count-num">20</span>
                                    <h4 class="title">Total Awards</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial-area padding-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title margin-bottom-60">
                                <h2 class="title">What People Say&#039;s</h2>
                                <span class="separator"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="testimonial-carousel owl-carousel">
                                <div class="single-testimonial-item">
                                    <div class="thumb">
                                        <img style={{ maxWidth: "200px" }} src="assets/uploads/testimonial/testimonial-pic-1.jpg"
                                            alt="Javier Jeffery" />

                                    </div>
                                    <div class="content">
                                        <p>So we me unknown as improve hastily sitting forming. Especially favourable compliment
                                    but thoroughly unreserved saw she themselves.</p>
                                        <div class="author-meta">
                                            <div class="ratings">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <h4 class="title">Javier Jeffery</h4>
                                            <span class="designation">Founder</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-testimonial-item">
                                    <div class="thumb">
                                        <img style={{ maxWidth: "200px" }} src="assets/uploads/testimonial/testimonial-pic-2.jpg"
                                            alt="David Barnes" />

                                    </div>
                                    <div class="content">
                                        <p>So we me unknown as improve hastily sitting forming. Especially favourable compliment
                                    but thoroughly unreserved saw she themselves.</p>
                                        <div class="author-meta">
                                            <div class="ratings">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <h4 class="title">David Barnes</h4>
                                            <span class="designation">CEO</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-testimonial-item">
                                    <div class="thumb">
                                        <img style={{ maxWidth: "200px" }} src="assets/uploads/testimonial/testimonial-pic-3.jpg"
                                            alt="Victor Ryan" />

                                    </div>
                                    <div class="content">
                                        <p>So we me unknown as improve hastily sitting forming. Especially favourable compliment
                                    but thoroughly unreserved saw she themselves.</p>
                                        <div class="author-meta">
                                            <div class="ratings">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <h4 class="title">Victor Ryan</h4>
                                            <span class="designation">Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <Footer/>
        </div>
    );
}

export default AboutPage;