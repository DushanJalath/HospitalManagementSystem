import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";


export default function DocSchedule() {
    const [schedules, setSchedule] = useState([]);

    /*const { doctorId } = useParams();*/
    const doctorId="13134"

    useEffect(() => {
        loadSchedule();

    }, []);

    const loadSchedule = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/channel/getChannelByDoc/${doctorId}`);
        setSchedule(result.data);
    }

    const deleteDoctor = async (id) => {
        await axios.delete(`http://localhost:8080/api/v1/channel/deleteChannel/${id}`);
        loadSchedule();
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
    )
}