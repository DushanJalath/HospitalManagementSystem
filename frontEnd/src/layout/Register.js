import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom';
import NavBar from "./NavBar";


const Register = () => {
    const navigate = useNavigate();
    const navigateToPatientDetail = () => {
        navigate('/addPat'); // Navigate to the /patient route
    };

    const navigateToDoctor = () => {
        navigate('/addDoc'); // Navigate to the /patient route
    };


    return (
        <div className="row">
            <NavBar isAuthenticated={true} userRole={"home"} patientId={""}/>
            <div className="background-image"></div>
            <div className="welcome-container">
                <div className="col-md-4 offset-md-0 border rounded p-5 mt-0 shadow" style={{backgroundColor: "white"}}>
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-part-2/512/create_with_plus_mail_layer-512.png"
                        alt="Your Image"
                        className="main-image"
                    />
                    <h1>MEDCare</h1>
                    <div className="button-container">
                        <button className="welcome-button btn btn-outline-primary" onClick={navigateToDoctor}>
                            Doctor Registration
                        </button>
                        <button className="welcome-button btn btn-outline-primary" onClick={navigateToPatientDetail}>
                            Patient Registration
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Register;
