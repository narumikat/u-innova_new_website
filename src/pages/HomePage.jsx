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
                <div className='d-flex justify-content-center align-items-center'>
                    <h3>Powerful</h3><h2>growth solutions</h2>
                </div>
            </div>
            < GridHomePage />
        </div>
    );
};

export default HomePage;
