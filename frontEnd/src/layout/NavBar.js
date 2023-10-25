import React from "react";
import {Link, NavLink} from "react-router-dom";
import '../App.css';

export default function NavBar({ isAuthenticated, userRole, patientId }) {
    const getNavLinks = () => {
        if (isAuthenticated) {
            if (userRole === "home") {
                return (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/">
                                Log In
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/reg">
                                Register
                            </NavLink>
                        </li>
                    </>
                );
            } else if (userRole === "patient") {
                return (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/appo">
                                Appointment
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/">
                                LogOut
                            </NavLink>
                        </li>
                        <div className="userHeader">
                            <img className="userIcon" width="40" height="40" style={{marginTop: '0.5em'}} src="https://img.icons8.com/ios-filled/50/FFFFFF/user.png" alt="user"/>
                            <h1 className="navHeader" style={{ position: 'absolute', top: 0, right: '2em', marginTop: '0.5em', fontSize: '1.5rem', color: 'white' }}>PID: {patientId}</h1>
                        </div>

                    </>
                );
            }else if (userRole === "doctor") {
                return (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to={`/docSchedule/${patientId}`}>
                                MySchedule
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to={`/addScedule/${patientId}`}>
                                AddSchedule
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/">
                                LogOut
                            </NavLink>
                        </li>
                        <div className="userHeader">
                            <img className="userIcon" width="40" height="40" style={{marginTop: '0.5em'}} src="https://img.icons8.com/ios-filled/50/FFFFFF/user.png" alt="user"/>
                            <h1 className="navHeader" style={{ position: 'absolute', top: 0, right: '2em', marginTop: '0.5em', fontSize: '1.5rem', color: 'white' }}>DID: {patientId}</h1>
                        </div>
                    </>
                );
            } else if (userRole === "admin") {
                return (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/patient">
                                PatientDetails
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/doctorDetails">
                                DoctorDetails
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/addPatAdmin">
                                AddPatient
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/addDocAdmin">
                                AddDoctor
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/channels">
                                Channels
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ul-auto" activeClassName="active" to="/">
                                LogOut
                            </NavLink>
                        </li>
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
                    <Link to="/front" className="navbar-brand">
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-part-2/512/create_with_plus_mail_layer-512.png"
                            alt="Logo"
                            width="30"
                            height="24"
                            className="d-inline-block align-text-top mx-2"
                        />
                        MEDCare
                    </Link>
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
