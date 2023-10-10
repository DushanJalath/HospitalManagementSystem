import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

export default function NavBar({ isAuthenticated, userRole, patientId }) {
    // Define navigation links based on user role or authentication status
    const getNavLinks = () => {
        if (isAuthenticated) {
            if (userRole === "home") {
                return (
                    <>
                    </>
                );
            } else if (userRole === "patient") {
                return (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/patient">
                                Patients
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/appo">
                                Appointment
                            </NavLink>
                        </li>
                        <div className="userHeader">
                            <img className="userIcon" width="47" height="47" src="https://img.icons8.com/ios-filled/50/FFFFFF/user.png" alt="user"/>
                            <h1 className="navHeader" style={{ position: 'absolute', top: 0, right: '2em', margin: '8px', fontSize: '1.7rem', color: 'white' }}>PID: {patientId}</h1>
                        </div>

                    </>
                );
            }else{
                return (
                    <>
                    </>
                );
            }
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/009/362/747/original/simple-medical-icon-symbol-sign-design-free-png.png"
                            alt="Logo"
                            width="30"
                            height="24"
                            className="d-inline-block align-text-top mx-2"
                        />
                        MEDCare
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {getNavLinks()}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
