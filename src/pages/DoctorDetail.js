import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


export default function DoctorDetail() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        loadDoctors();

    }, []);

    const loadDoctors = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/doctor/getDoctors");
        setDoctors(result.data);
    }

    const deleteDoctor = async (id) => {
        await axios.delete(`http://localhost:8080/api/v1/doctor/deleteDoctor/${id}`);
        loadDoctors();
    }

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Email</th>
                        <th scope="col">Specialization</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        doctors.map((doctor) => (
                            <tr>
                                <td>{doctor.id}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.contact}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialization}</td>
                                <td>
                                    <Link className="btn btn-sm btn-outline-primary mx-1"
                                          to={`/updateDoc/${doctor.id}`}>Edit</Link>
                                    <button className="btn btn-sm btn-outline-danger mx-1"
                                            onClick={() => deleteDoctor(doctor.id)}>Delete
                                    </button>
                                </td>
                            </tr>

                        ))
                    }
                    </tbody>
                </table>
            </div>

        </div>
    )
}