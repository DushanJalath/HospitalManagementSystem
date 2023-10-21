import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
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
            <NavBar isAuthenticated={true} userRole={"home"} patientId={""} />
            <div className="col-md-6">
                <img
                    src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=1060&t=st=1692635028~exp=1692635628~hmac=e8a0599cb186ffe464c6911d95ef3da0f4da9bc434103b7150664a8ab0cfb39e"
                    alt=""
                    width="700"
                    height="700"
                    className="mt-lg-5"
                />
            </div>
            <div className="col-md-6">
                <div className="welcome-container">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/009/362/747/original/simple-medical-icon-symbol-sign-design-free-png.png"
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
