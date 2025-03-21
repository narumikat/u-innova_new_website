import NavBar from "../components/NavBar.jsx";
import HomeTop from '../components/HomeTop.jsx'
import GridHomePage from '../components/GridHomePage.jsx'
import GridFeatures from "../components/GridFeatures.jsx";
import WebsiteCreation from '../components/WebsiteCreation.jsx'
import MissionBlock from "../components/MissionBlock.jsx";
import CustomSwiper from "../components/CustomSwiper.jsx";
import LogoSwiper from "../components/LogoSwiper.jsx"
import AboutCards from "../components/AboutCard.jsx";
import StartProject from "../components/StartProject.jsx";
import Footer from "../components/Footer.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {

    return (
        <div>
            < NavBar/>
            < HomeTop/>
            <div className='container middle-container'>
                <div id="readmore" className='d-flex justify-content-center align-items-center'>
                    <h2 className="gradient-font">Powerful growth solutions</h2>
                </div>
                <p className='text-center'>Driving Your Success with Marketing, Design, and Software Solutions.</p>
            </div>
            <div className="grid-home">
                < GridHomePage/>
                < WebsiteCreation />
                <div className="d-flex justify-content-center align-items-center mx-4">
                    <h2 className="gradient-font2 mt-5 text-center">WHAT WE DO?</h2>
                </div>
                < GridFeatures/>
            </div>
            < MissionBlock/>
            {/*< CustomSwiper/>*/}
            < LogoSwiper />
            < AboutCards/>
            < StartProject />
            < Footer/>
        </div>
    );
};

export default HomePage;
