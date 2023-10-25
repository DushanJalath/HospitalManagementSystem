import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import NavBar from "../layout/NavBar";


export default function LoadChannels() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        loadDoctors();

    }, []);

    const loadDoctors = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/channel/getChannels");
        setChannels(result.data);
    }

    return (
        <div className="row">
            <NavBar isAuthenticated={true} userRole={"admin"}/>
            <div className="background-image2"></div>
            <div className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Patient ID</th>
                            <th scope="col">Doctor ID</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            channels.map((channel) => (
                                <tr>
                                    <td>{channel.channelId}</td>
                                    <td>{channel.date}</td>
                                    <td>{channel.patient.id}</td>
                                    <td>{channel.doctor.id}</td>
                                    <td>
                                        <Link className="btn btn-sm btn-outline-primary mx-1" to={`/report/${channel.channelId}`}>Create Bill</Link>
                                    </td>
                                </tr>

                            ))
                        }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

