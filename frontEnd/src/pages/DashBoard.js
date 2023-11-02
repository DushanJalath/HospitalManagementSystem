import React, {useEffect, useState} from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import NavBar from "../layout/NavBar";
import { Line } from "react-chartjs-2";
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
} from "recharts";
import axios from "axios";

const DashBoard = () => {
    const [patientCount, setPatientCount] = useState([]);
    const [doctorCount, setDoctorCount] = useState([]);
    const [channelList, setChannelList] = useState([]);

    useEffect(() => {
        loadPCount();
        loadDCount();
        loadCCount();

    }, []);

    const loadPCount = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/patient/getPatientsCount");
        setPatientCount(result.data);
    }

    const loadDCount = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/doctor/getDoctorCount");
        setDoctorCount(result.data);
    }

    const loadCCount = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/channel/getChannels");
        setChannelList(result.data);
    }



    const data = [
        { name: "MON", WeekDay: 20 },
        { name: "TUE", WeekDay: 50 },
        { name: "WED", WeekDay: 10 },
        { name: "THU", WeekDay: 40 },
        { name: "FRI", WeekDay: 50 },
        { name: "SAT", WeekDay: 32 },
        { name: "SUN", WeekDay: 17 },
    ];

    return (
        <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
            <NavBar isAuthenticated={true} userRole={"admin"} patientId={""} style={{ paddingRight: 0 }} />
            <div className="row" style={{ marginTop: '4em' }}>
                <div className="col-md-6">
                    <div className="custom-div mb-3 shadow" style={{ border: '2px solid #2DB3B9', borderRadius: 20 }}>
                        <div className="d-flex">
                            <div className="col-md-6">
                                <h1 style={{fontSize:'5em', marginTop: 8,  }}>{patientCount < 10 ? `0${patientCount}` : patientCount}</h1>
                                <h1 style={{fontWeight: "bold",fontSize:'2em'}}>Patients</h1>
                            </div>
                            <div className="col-md-6" style={{marginTop: 19 }}>
                                <img
                                    src="https://freepngimg.com/thumb/heart/2-2-heart-png-hd.png"
                                    alt="Logo"
                                    width="90"
                                    height="90"
                                    className="d-inline-block align-text-top"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="custom-div mb-3 shadow" style={{ border: '2px solid #2DB3B9', borderRadius: 20 }}>
                        <div className="d-flex">
                            <div className="col-md-6">
                                <h1 style={{fontSize:'5em', marginTop: 8,  }}>{doctorCount < 10 ? `0${doctorCount}` : doctorCount}</h1>
                                <h1 style={{fontWeight: "bold",fontSize:'2em'}}>Doctors</h1>
                            </div>
                            <div className="col-md-6" style={{marginTop: 19 }}>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/4914/4914344.png"
                                    alt="Logo"
                                    width="90"
                                    height="90"
                                    className="d-inline-block align-text-top"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="custom-div mb-3 shadow" style={{ border: '2px solid #2DB3B9', borderRadius: 20 }}>
                        <div className="d-flex">
                            <div className="col-md-6">
                                <h1 style={{fontSize:'5em', marginTop: 8,  }}>07</h1>
                                <h1 style={{fontWeight: "bold",fontSize:'2em'}}>Admin</h1>
                            </div>
                            <div className="col-md-6" style={{marginTop: 27 }}>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/6830/6830382.png"
                                    alt="Logo"
                                    width="90"
                                    height="90"
                                    className="d-inline-block align-text-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <h1 style={{fontWeight:'bold', marginTop: 18,  }}>Channels</h1>
                    </div>
                    <BarChart
                        width={600}
                        height={400}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 80,
                            bottom: 5,
                        }}
                        barSize={30}
                    >
                        <XAxis
                            dataKey="name"
                            scale="point"
                            padding={{ left: 10, right: 10 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="WeekDay" fill="#2DB3B9" background={{ fill: "#eee" }} />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
