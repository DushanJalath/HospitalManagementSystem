import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function DoctorLogin() {
    let navigate = useNavigate();

    const [doctorCredentials, setDoctorCredentials] = useState({
        id: "",
        password: "",
    });

    const { id, password } = doctorCredentials;

    const onInputChange = (e) => {
        setDoctorCredentials({ ...doctorCredentials, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/api/v1/doctor/dlogin", doctorCredentials)
            .then((response) => {
                if (response.data) {
                    // Handle successful login
                    Swal.fire("Success!", "Logged in successfully!", "success");

                    const authenticatedDoctor = response.data;
                    console.log(authenticatedDoctor.id);

                    navigate(`/docSchedule/${authenticatedDoctor.id}`);
                } else {
                    Swal.fire("Error!", "Invalid email or password", "error");
                }
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 401) {
                        Swal.fire("Error!", "Invalid email or password", "error");
                    } else {
                        Swal.fire("Error!", "An error occurred", "error");
                    }
                } else {
                    Swal.fire("Error!", "Network error occurred", "error");
                }
            });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-lg-5 shadow" style={{backgroundColor: "white"}}>
                    <h2 className="text-center m-4">Doctor Login</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="ID" className="form-label">
                                Doctor ID
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
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}