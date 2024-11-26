import React from 'react';
import HomeTop from '../components/HomeTop.jsx'
import GridHomePage from '../components/GridHomePage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    const words = ['Ideas', 'Vision', 'Brand', 'Growth', 'Goals', 'Online presence'];

    return (
        <div>
            < HomeTop/>
            <div className='container middle-container'>
                <div id="readmore" className='d-flex justify-content-center align-items-center'>
                    <h2>Powerful growth solutions</h2>
                </div>
                <p className='text-center'>Driving Your Success with Marketing, Design, and Software Solutions.</p>
            </div>
            < GridHomePage/>
        </div>
    );
};

export default HomePage;
