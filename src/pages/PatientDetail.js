import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


export default function PatientDetail() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        loadPatients();

    }, []);

    const loadPatients = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/patient/getPatients");
        setPatients(result.data);
    }

    const deletePatient = async (id) => {
        await axios.delete(`http://localhost:8080/api/v1/patient/deletePatient/${id}`);
        loadPatients();
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
                        <th scope="col">GardienName</th>
                        <th scope="col">GardienContact</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        patients.map((patient) => (
                            <tr>
                                <td>{patient.id}</td>
                                <td>{patient.name}</td>
                                <td>{patient.contact}</td>
                                <td>{patient.gardienName}</td>
                                <td>{patient.gardienContact}</td>
                                <td>
                                    <Link className="btn btn-sm btn-outline-primary mx-1"
                                          to={`/updatePat/${patient.id}`}>Edit</Link>
                                    <button className="btn btn-sm btn-outline-danger mx-1"
                                            onClick={() => deletePatient(patient.id)}>Delete
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