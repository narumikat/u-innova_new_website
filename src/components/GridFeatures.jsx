import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBullhorn,
    faPalette,
    faLaptopCode,
    faDesktop,
    faPencil,
    faMobileScreen,
    faRectangleAd,
    faChartLine,
    faEnvelope,
    faCartShopping,
    faChartPie,
} from '@fortawesome/free-solid-svg-icons'
import { faLine } from '@fortawesome/free-brands-svg-icons';

const GridHomePage = () => {
    return (
        <div className="container my-5">
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='d-flex align-items-center mb-2'>
                            <FontAwesomeIcon icon={faBullhorn}/>
                            <h5>Marketing Strategies</h5>
                        </div>
                        <p>Customized marketing strategies to help your business reach its target audience, increase
                            brand awareness, and drive results.</p>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='d-flex align-items-center mb-2'>
                            <FontAwesomeIcon icon={faPalette}/>
                            <h5>Graphic Design</h5>
                        </div>
                        <p>Innovative and professional graphic design solutions, including logos, promotional
                            materials, and layouts to ensure a striking visual identity.</p>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='d-flex align-items-center mb-2'>
                            <FontAwesomeIcon icon={faDesktop}/>
                            <h5>Web Design</h5>
                        </div>
                        <p>Development of modern, responsive, and visually appealing websites to highlight your
                            brand and provide a unique user experience.</p>

                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='d-flex align-items-center mb-2'>
                            <FontAwesomeIcon icon={faPencil}/>
                            <h5>Branding</h5>
                        </div>
                        <p>Building and strengthening your brand through strategies and visual elements that convey
                            your business values and identity.</p>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='d-flex align-items-center mb-2'>
                            <FontAwesomeIcon icon={faMobileScreen}/>
                            <h5>Social Media</h5>
                        </div>
                        <p>Social media management focused on engagement, audience growth, and creating relevant
                            content to connect your brand with its audience.</p>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='d-flex align-items-center mb-2'>
                            <FontAwesomeIcon icon={faRectangleAd}/>
                            <h5>Online Advertising</h5>
                        </div>
                        <p>Optimized online advertising campaigns to achieve results, increase traffic, and convert
                            leads into customers.</p>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='d-flex align-items-center mb-2'>
                            <FontAwesomeIcon icon={faChartLine}/>
                            <h5>SEO (Search Engine Optimization)</h5>
                        </div>
                        <p>Search engine optimization to ensure your website ranks prominently on Google and other
                            search engines, attracting more qualified visitors.</p>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='d-flex align-items-center mb-2'>
                            <FontAwesomeIcon icon={faChartPie}/>
                            <h5>Insightful Data Analytics</h5>
                        </div>
                        <p>Leverage advanced data analytics to uncover trends, generate actionable insights, and
                            create
                            comprehensive reports that drive informed decision-making for your business.</p>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='d-flex align-items-center mb-2'>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <h5>Email Marketing</h5>
                        </div>
                        <p>Targeted and effective email marketing campaigns to maintain customer relationships and
                            boost conversions.</p>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='d-flex align-items-center mb-2'>
                            <FontAwesomeIcon icon={faLaptopCode}/>
                            <h5>Software Development</h5>
                        </div>
                        <p>Custom software development to automate processes, improve efficiency, and meet the
                            specific needs of your business.</p>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='d-flex align-items-center mb-2'>
                            <FontAwesomeIcon icon={faCartShopping}/>
                            <h5>E-commerce Development</h5>
                        </div>
                        <p>Development of secure and intuitive online stores, offering customers an efficient and
                            enjoyable online shopping experience.</p>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='d-flex align-items-center mb-2'>
                            <FontAwesomeIcon icon={faLine}/>
                            <h5>LINE bot development</h5>
                        </div>
                            <p>Development of LINE bots to automate interactions, improve customer service, and optimize
                                communication processes.</p>
                        </div>
                    </div>
                </div>
            </div>
            );
            };

            export default GridHomePage;
