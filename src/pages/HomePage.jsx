import React from 'react';
import HomeTop from '../components/HomeTop.jsx'
import GridHomePage from '../components/GridHomePage.jsx'
import GridFeatures from "../components/GridFeatures.jsx";
import MissionBlock from "../components/MissionBlock.jsx";
import CustomSwiper from "../components/CustomSwiper.jsx";
import AboutCards from "../components/AboutCard.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    const words = ['Ideas', 'Vision', 'Brand', 'Growth', 'Goals', 'Online presence'];

    return (
        <div>
            < HomeTop/>
            <div className='container middle-container'>
                <div id="readmore" className='d-flex justify-content-center align-items-center'>
                    <h2 className="gradient-font">Powerful growth solutions</h2>
                </div>
                <p className='text-center'>Driving Your Success with Marketing, Design, and Software Solutions.</p>
            </div>
            <div className="grid-home">
                < GridHomePage/>
                <div className="d-flex justify-content-center align-items-center">
                    <h2 className="gradient-font mt-5">Innovative Services to Boost Your Brand with U-Innova</h2>
                </div>
                < GridFeatures/>
            </div>
            < MissionBlock/>
            <div className="d-flex justify-content-center align-items-center">
                <h2 className="gradient-font mt-5">U-innova Latest Projects</h2>
            </div>
            < CustomSwiper/>
            <div className="d-flex justify-content-center align-items-center">
                <h2 className="gradient-font2 mt-5">Who We Are</h2>
            </div>
            < AboutCards/>
        </div>
    );
};

export default HomePage;
