import React from "react";
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

const GridHomePage = () => {
    return (
        <div className="container my-5 grid-home">
            <div className="row g-4">
                <div className="col-lg-7 col-md-12">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='d-flex justify-content-start'>
                            <img src={icon1} alt="Icon" className='icon img-fluid'/>
                        </div>
                        <div className='p-icon'>
                            <p><strong>Customized software solution</strong> for the efficient management of your
                                business. Our advanced
                                program simplifies and automates key processes, from managing leads, inventory, users to
                                tracking your business growth.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg col-md-12">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='p-icon'>
                            <p><strong>Increase your online presence</strong>, acquire customers and accelerate your
                                business. Discover
                                innovation and creativity at your fingertips with U-Innova Studios</p>
                        </div>
                        <div className='d-flex justify-content-start'>
                            <img src={icon2} alt="Icon" className='icon img-fluid'/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-12">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='p-icon2'>
                            <p>With <strong>robust applicant tracking, project management</strong>, and integrated communication
                                features, we
                                develop software that enables companies to optimize their operational efficiency and
                                improve
                                service quality.</p>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <img src={icon4} alt="Icon" className='icon img-fluid'/>
                        </div>
                    </div>
                </div>

                <div className="col-lg col-md-12">
                    <div className="grid-card text-white rounded-3 shadow">
                        <div className='p-icon2'>
                            <p>We offer a comprehensive <strong>marketing solution</strong> to help your business stand out in the
                                marketplace. Our custom solution combines creative strategies, data analytics and
                                technology
                                to boost your online presence, increase brand awareness and attract qualified
                                customers.</p>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <img src={icon3} alt="Icon" className='icon img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridHomePage;
