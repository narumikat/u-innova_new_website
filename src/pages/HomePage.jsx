import NavBar from "../components/NavBar.jsx";
import HomeTop from '../components/HomeTop.jsx'
import GridHomePage from '../components/GridHomePage.jsx'
import GridFeatures from "../components/GridFeatures.jsx";
import MissionBlock from "../components/MissionBlock.jsx";
import CustomSwiper from "../components/CustomSwiper.jsx";
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
                <div className="d-flex justify-content-center align-items-center mx-4">
                    <h2 className="gradient-font mt-5 text-center">Innovative Services to Boost Your Brand with U-Innova</h2>
                </div>
                < GridFeatures/>
            </div>
            < MissionBlock/>
            < CustomSwiper/>
            < AboutCards/>
            < StartProject />
            < Footer/>
        </div>
    );
};

export default HomePage;
