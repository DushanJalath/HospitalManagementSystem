import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function AddPatient() {
    let navigate = useNavigate();

    const [patient, setPatient] = useState({
        name: "",
        contact: "",
        gardienName: "",
        gardienContact: "",
    });

    const {name, contact, gardienName, gardienContact} = patient;

    const onInputChange = (e) => {
        setPatient({...patient, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/patient/savePatient", patient);
        navigate("/d");
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 offset-md-1 border rounded p-4 mt-lg-5 shadow">
                    <h2 className="text-center m-4">Register Patient</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Patientname" className="form-label">
                                Patient Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your patientname"
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Contact" className="form-label">
                                Contact
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your contact"
                                name="contact"
                                value={contact}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Gardien Name" className="form-label">
                                Gardien Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your e-mail address"
                                name="gardienName"
                                value={gardienName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Gardien Contact" className="form-label">
                                Gardien Contact
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your e-mail address"
                                name="gardienContact"
                                value={gardienContact}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/patient">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>

        </div>
    )
}