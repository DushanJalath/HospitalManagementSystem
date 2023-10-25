import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom';
import NavBar from "./NavBar";


const Home = () => {
    const navigate = useNavigate();
    const navigateToLog = () => {
        navigate('/'); // Navigate to the /patient route
    };

    const navigateToReg = () => {
        navigate('/reg'); // Navigate to the /patient route
    };

    return (
        <div className="row">
            <NavBar isAuthenticated={true} userRole={""} patientId={""}/>
            <div className="background-image"></div>
            <div className="welcome-container">
                <div>
                    <h1 style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontSize: '5rem',
                        fontWeight: 'bold'
                    }}>Welcome</h1>
                    <p style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto', fontSize: '1rem'}}>Welcome to
                        MEDCare, your trusted partner in healthcare. Our mission is to provide quality medical services
                        to our patients and a convenient platform for our doctors and staff. Whether you are a patient,
                        doctor, or an administrator, we have you covered. Explore our services and start your journey
                        with us today.</p>
                </div>
                <div className="front-button-container">
                    <button className="welcome-button btn btn-primary" onClick={navigateToLog}>
                        Log In
                    </button>
                    <button className="welcome-button btn btn-outline-primary" onClick={navigateToReg}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Home;
