import NavBar from "../components/NavBar.jsx";
import AboutImg from '../assets/we_think.png'
import HandsPhone from '../assets/hands-phone.jpg'

const AboutPage = () => {
    return (
        <div className="about-page">
            < NavBar/>
            <div className="about-page-top">
                <h1>About Us</h1>
            </div>
            <div className="container">
                <div className="d-flex row">
                    <div className="col-12 col-md-6">
                        <h3 className="gradient-font">Web Solution Company</h3>
                        <p>U-Innova Studios is a dynamic company specializing in software development, and
                            digital marketing. <br />Our mission is to drive client success by delivering creative and
                            effective
                            solutions. <br /> We transform ideas into reality, offering exceptional creativity to propel your
                            business forward. By distinguishing your brand from the competition, we help you reach your
                            target audience memorably. <br /> Our comprehensive services include <strong>software solutions,
                                digital
                                marketing, web design, graphic design, and digital media </strong>. <hr /> We pride ourselves
                            on being at the
                            forefront of innovation, providing fresh and creative ideas to make your brand stand out.
                            Our
                            dedicated team offers personalized attention, collaborating closely with you to achieve
                            long-term success for your brand. At U-Innova Studios, we are passionate about innovation
                            and
                            committed to delivering solutions that empower our clients to thrive in an ever-evolving
                            digital
                            world.</p>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center px-4">
                        <img src={AboutImg} alt="we think, we design, we develop" className="img-we"/>
                    </div>
                </div>

                <div className="d-flex row services">
                    <div className="col-12 col-md-7 d-flex justify-content-center align-items-center px-4">
                        <div className="img-hands">
                            <img src={HandsPhone} alt="hands phone"/>
                        </div>
                    </div>
                    <div className="col-12 col-md d-flex justify-content-center align-items-center px-4">
                        <div>
                            <h2 className="gradient-font">Our Services</h2>
                            <ul>
                                <li>Marketing Strategies</li>
                                <li>Graphic Design</li>
                                <li>Web Design</li>
                                <li>Branding</li>
                                <li>Social Media</li>
                                <li>Online Advertising</li>
                                <li>SEO (Search Engine Optimization)</li>
                                <li>Insightful Data Analytics</li>
                                <li>Email Marketing</li>
                                <li>Software Development</li>
                                <li>E-commerce Development</li>
                                <li>LINE bot development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;