import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import NavBar from "../layout/NavBar";


export default function DocSchedule() {
    const [schedules, setSchedule] = useState([]);

    /*const { doctorId } = useParams();*/
    const {id} = useParams();

    useEffect(() => {
        loadSchedule();

    }, []);

    const loadSchedule = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/channel/getChannelByDoc/${id}`);
        setSchedule(result.data);
    }

    const deleteDoctor = async (id) => {
        await axios.delete(`http://localhost:8080/api/v1/channel/deleteChannel/${id}`);
        loadSchedule();
    }

    return (
        <div className="row">
            <NavBar isAuthenticated={true} userRole={"doctor"} patientId={id}/>
            <div className="background-image3"></div>
            <div className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                        <tr>
                            <th scope="col">Channel ID</th>
                            <th scope="col">Day</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">End Time</th>
                            <th scope="col">Patient ID</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            schedules.map((schedule) => (
                                <tr>
                                    <td>{schedule.channelId}</td>
                                    <td>{schedule.availability.dayOfWeek}</td>
                                    <td>{schedule.availability.startTime}</td>
                                    <td>{schedule.availability.endTime}</td>
                                    <td>{schedule.patient.id}</td>
                                    <td>
                                        <button className="btn btn-sm btn-outline-danger mx-1"
                                                onClick={() => deleteDoctor(schedule.id)}>Delete
                                        </button>
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