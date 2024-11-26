import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        {/* About Website */}
                        <div className="col-md-6 col-sm-11">
                            <h6 id="aboutWebsite">About the Website</h6>
                            <p className="p-small" id="aboutWebsiteText">
                                Welcome to the U-Innova Studios website! We are a company passionate about innovation,
                                software, and digital marketing. Our mission is to drive client success by providing
                                creative and effective solutions. Explore our website to discover how we can help
                                transform your business in the digital world!
                            </p>
                        </div>
                        {/* Links Section */}
                        <div className="col-md col-sm-11">
                            <div className="">
                                <h6>Links</h6>
                                <ul className="list-unstyled li-space-lg p-small">
                                    <li>
                                        Important: <a href="terms.html">Terms & Conditions</a>,{' '}
                                        <a href="privacy.html">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            {/* Social Media Section */}
                            <div className="mt-4">
                                <span className="fa-stack">
                                    <a href="https://www.facebook.com/uinnova.studio" target="_blank"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebookF}/>
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="https://www.instagram.com/uinnova_studio" target="_blank"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram}/>
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="https://wa.me/+818066557091" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faWhatsapp}/>
                                    </a>
                                </span>
                                <p>Contact Us</p>
                                <p className="p-small" id="ContactUsFooter">
                                    <a href="mailto:contact@u-innova.com">
                                        <strong>contact@u-innova.com</strong>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>
                    Copyright © <a href="u-innova.com">U-Innova</a>
                </p>
            </div>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} id="myBtn">
                < FontAwesomeIcon icon={faCircleArrowUp} alt="Back to top"/>
            </button>
        </>
    );
};

export default Footer;
