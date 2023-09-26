import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function DoctorAdd() {
    let navigate = useNavigate();

    const [doctor, setDoctor] = useState({
        name: "",
        contact: "",
        email: "",
        specialization: ""
    });

    const {name, contact, email, specialization} = doctor;

    const onInputChange = (e) => {
        setDoctor({...doctor, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Save this!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Saved!',
                    'Your file has been deleted.',
                    'success'
                )
                await axios.post("http://localhost:8080/api/v1/doctor/saveDoctor", doctor);
                navigate("/doctor");
            }
        })

    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 offset-md-1 border rounded p-4 mt-lg-5 shadow">
                    <h2 className="text-center m-4">Register Doctor</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Doctorname" className="form-label">
                                Doctor Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your doctorname"
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
                            <label htmlFor="Email" className="form-label">
                                Email
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your e-mail"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Specialization" className="form-label">
                                Specialization
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your e-mail"
                                name="specialization"
                                value={specialization}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/d">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>

        </div>
    )
}