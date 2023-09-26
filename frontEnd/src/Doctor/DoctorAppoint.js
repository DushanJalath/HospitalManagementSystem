import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


export default function DoctorAppoint() {
    const [doctors, setDoctors] = useState([]);


    const patientId="65399";

    useEffect(() => {
        loadDoctors();

    }, []);

    const loadDoctors = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/doctor/getDoctors");
        setDoctors(result.data);
    }

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
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
                                <td>{doctor.email}</td>
                                <td>{doctor.specialization}</td>
                                <td>
                                    <Link className="btn btn-sm btn-outline-primary mx-1"
                                          to={`/apoinment/${doctor.id}/${patientId}`}>Book</Link>
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