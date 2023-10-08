import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function PatientLogin() {
    let navigate = useNavigate();

    const [patientCredentials, setDoctorCredentials] = useState({
        id: "",
        password: "",
    });

    const { id, password } = patientCredentials;

    const onInputChange = (e) => {
        setDoctorCredentials({ ...patientCredentials, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/api/v1/patient/plogin", patientCredentials)
            .then((response) => {
                // Handle successful login
                Swal.fire("Success!", "Logged in successfully!", "success");
                navigate("/appo");
                // Redirect or perform other actions
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with an error status code
                    if (error.response.status === 401) {
                        Swal.fire("Error!", "Invalid email or password", "error");
                    } else {
                        Swal.fire("Error!", "An error occurred", "error");
                    }
                } else {
                    // Network or other errors occurred
                    Swal.fire("Error!", "Network error occurred", "error");
                }
            });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 offset-md-2 border rounded p-4 mt-lg-5 shadow">
                    <h2 className="text-center m-4">Patient Login</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="ID" className="form-label">
                                ID
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your ID"
                                name="id"
                                value={id}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                name="password"
                                value={password}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Login
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/d">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
