import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom';
import NavBar from "./NavBar";


const AboutUs = () => {

    return (
        <div className="row" style={{marginRight:0, marginLeft:0}}>
            <NavBar isAuthenticated={true} userRole={"front"} patientId={""} style={{paddingRight:0}}/>
        </div>
    );
};


export default AboutUs;