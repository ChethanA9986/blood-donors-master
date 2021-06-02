import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FixedButton from '../components/FixedButton';
import DonorSearch from './../components/DonorSearch';
import { bloodTypeList } from './../constants/constants';
import { useSelector, useDispatch } from "react-redux";
import './../App.css';

function HomePage(props) {
    const history = useHistory();
    const userToken = useSelector(state => state.authReducer.userProfile);
    function handleLoginClick() {
        userToken ? history.push("/request") : history.push("/login");
    }
    const handleDonors = (data) => {
        history.push({
            pathname: '/availableDonors',
            bloodType: data
        })
    }
    return (
        <div>
            <FixedButton />
            <TopBar />
            <Header />
            <header class="header-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="left-content-area">
                                <h1 class="title">Donate Blood To Save Life</h1>
                                <p>“The life of a man consists not in seeing visions and in dreaming dreams, but in active
                            charity and in willing service.”</p>
                                <div class="btn-wrapper">
                                    {!userToken && <Button className="boxed-btn" value="Join Now" onClick={() => { history.push("/register"); }}>Join Now</Button>}
                                    <Button className="boxed-btn blank" value="Request For Blood" onClick={handleLoginClick}>Request For Blood</Button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content-area">
                                <div class="img-wrapper">
                                    <img src="assets/uploads/header-right-image-54577.png" alt="Donate Blood To Save Life" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <DonorSearch />
            <section class="blood-donation-process-area padding-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title margin-bottom-60">
                                <h2 class="title">Blood Donation Process</h2>
                                <span class="separator"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="blood-donation-process">
                                <ul class="donation-process-list">
                                    <li class="single-donation-process">
                                        <span class="number">01</span>
                                        <h4 class="title">Registration</h4>
                                    </li>
                                    <li class="single-donation-process">
                                        <span class="number">02</span>
                                        <h4 class="title">Screening</h4>
                                    </li>
                                    <li class="single-donation-process">
                                        <span class="number">03</span>
                                        <h4 class="title">Donation</h4>
                                    </li>
                                    <li class="single-donation-process">
                                        <span class="number">04</span>
                                        <h4 class="title">Rest &amp; Refresh</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="our-valuable-donor-area padding-bottom-90">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title margin-bottom-60">
                                <h2 class="title">Our Available Donors</h2>
                                <span class="separator"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {bloodTypeList.map((data) => <div class="col-lg-3 col-md-6">
                            <div class="single-donor-group-item">
                                <div class="icon">
                                    <span class="blood-group">{data.name}</span>
                                </div>
                                <div class="btn-wrapper">
                                    <a onClick={() => handleDonors(data)} class="boxed-btn">View All</a>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </section>
            <div class="recently-requested-area padding-bottom-90">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title margin-bottom-60">
                                <h2 class="title">Recent Request For Blood</h2>
                                <span class="separator"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="recent-requested-blood-table table-responsive">
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
                                        <tr>
                                            <th scope="row">asdas</th>
                                            <td>asda</td>
                                            <td>o+</td>
                                            <td>asdas</td>
                                            <td>asdas</td>
                                            <td>asdasd</td>
                                            <td>asdasd</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">asdas</th>
                                            <td></td>
                                            <td>o-</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">asdas</th>
                                            <td></td>
                                            <td>o-</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Niitin</th>
                                            <td></td>
                                            <td>o+</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Niitin</th>
                                            <td></td>
                                            <td>o+</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">nitin</th>
                                            <td></td>
                                            <td>o+</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">nitin</th>
                                            <td></td>
                                            <td>o+</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">nitin</th>
                                            <td></td>
                                            <td>o+</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">nitin</th>
                                            <td></td>
                                            <td>o+</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Nitin</th>
                                            <td></td>
                                            <td>o+</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td></td>
                                            <td>o+</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Chethan mv</th>
                                            <td>chethanmvc@gmail.com</td>
                                            <td>a+</td>
                                            <td>2</td>
                                            <td>dengue</td>
                                            <td>+9199865216463</td>
                                            <td>S/o Venkatesh M P</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Basavaraju N</th>
                                            <td>basavarajaradhya90@gmail.com</td>
                                            <td>o+</td>
                                            <td>1</td>
                                            <td>dengue</td>
                                            <td>9986516463</td>
                                            <td>banaglore, rr nagar
                                        karnataka</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="recently-donated-donors padding-bottom-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title margin-bottom-60">
                                <h2 class="title">Recent Donors</h2>
                                <span class="separator"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="recently-donated-donors-carousel owl-carousel">
                                <div class="single-donors-item">
                                    <div class="thumb">
                                        <img style={{ maxWidth: "300px" }} src="assets/uploads/donors/donor-pic-31.jpg" alt="" />
                                    </div>
                                    <div class="content">
                                        <a href="donor-profile/31/harshitha.html">
                                            <h4 class="title">Harshitha</h4>
                                        </a>
                                        <span class="blood-group">Blood Group: <strong>O+</strong></span>
                                        <span class="total-donate">Total Donate: <strong>1</strong> Times</span>
                                    </div>
                                </div>
                                <div class="single-donors-item">
                                    <div class="thumb">
                                        <img style={{ maxWidth: "300px" }} src="assets/uploads/donors/donor-pic-15.jpg" alt="" />
                                    </div>
                                    <div class="content">
                                        <a href="donor-profile/15/sonu-sood.html">
                                            <h4 class="title">Sonu Sood</h4>
                                        </a>
                                        <span class="blood-group">Blood Group: <strong>O+</strong></span>
                                        <span class="total-donate">Total Donate: <strong>1</strong> Times</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="benefit-of-donation-area  gray-bg padding-top-120 padding-bottom-60">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="single-benefit-item">
                                <div class="left-content-area">
                                    <h3 class="title" className="style1">
                                        The Health Benefits of Donating Blood</h3>
                                    <p><span
                                        class="spanStyle">A
                                        blood transfusion can be a life saving treatment for patients with cancer, patients
                                        undergoing surgery, children with severe anaemia, women who have
                                complications</span><br /></p>
                                    <ul class="benifit-list style2">
                                        <li class="style3">
                                            Reduce harmful iron stores.</li>
                                        <li class="style4">
                                            Preserve card ovascular health.</li>
                                        <li
                                            class="style4">
                                            Reduce the risk cancer.</li>
                                        <li
                                            class="style4">
                                            Give you a sense of pride.</li>
                                        <li
                                            class="style4">
                                            Free blood analysis.</li>
                                    </ul>
                                </div>
                                <div class="right-content-area">
                                    <div class="img-wrapper">
                                        <img src="assets/uploads/health-benefit-one-39566.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="single-benefit-item">

                                <div class="left-content-area">
                                    <h3 class="title style1">
                                        Recovery and Time Between Donations.</h3>
                                    <p><span
                                        class="spanStyle">A
                                        blood transfusion can be a life saving treatment for patients with cancer, patients
                                        undergoing surgery, children with severe anaemia, women who have
                                complications</span><span
                                            class="spanStyle"><br /></span>
                                    </p>
                                    <p><span
                                        class="spanStyle">You
                                        must wait at least eight weeks (56 days) between donations of whole blood and 16
                                        weeks (112 days) betwen power Red donations Platelet apheresis donor may give every
                                        7 days up to 24 times per year after a donation. Most peoples haemoglobin levels are
                                back to normal after 6 to 12 weeks.</span></p>
                                </div>
                                <div class="right-content-area">
                                    <div class="img-wrapper">
                                        <img src="assets/uploads/health-benefit-two-76075.png" alt="" />
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
            <Footer />
        </div>
    );
}

export default HomePage;