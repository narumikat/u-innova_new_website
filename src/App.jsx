import {Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

function App() {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/privacy_policy" element={<PrivacyPolicy/>}/>
        </Routes>
    )
}


export default App
