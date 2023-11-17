import React, {useState} from 'react';
import '../App.css';
import {Link, useNavigate, useParams} from 'react-router-dom';
import NavBar from "./NavBar";
import axios from "axios";


const HFPrediction = () => {
    const {id}=useParams();

    const [doctor, setDoctor] = useState({
        bmi: "",
        smoking: "",
        alcoholDrinking: "",
        stroke: "",
        physicalHealth: "",
        mentalHealth: "",
        difficultyWalking: "",
        sex: "",
        age: "",
        diabetic: "",
        physicalActivity: "",
        generalHealth: "",
        sleepTime: "",
        asthma: "",
        kidneyDisease: "",
        skinCancer: ""


    });

    const {bmi, smoking, alcoholDrinking, stroke,physicalHealth,
        mentalHealth,difficultyWalking,sex,age, diabetic,
        physicalActivity, generalHealth, sleepTime, asthma, kidneyDisease, skinCancer} = doctor;

    const onInputChange = (e) => {
        setDoctor({...doctor, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/v1/doctor/updateDoctor`, doctor);
    };

    return (
        <div className="row" style={{marginRight:0, marginLeft:0}}>
            <NavBar isAuthenticated={true} userRole={"patient"} patientId={id} style={{paddingRight:0}}/>
            <h1 style={{fontSize:'2em', marginTop:'0.5em', fontWeight: 'bold'}}>Patient Information</h1>
            <div className="container border rounded p-4 shadow" style={{marginTop:'3em', marginLeft:0}}>

                {/*Row1*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="bmi" className="form-label">
                                BMI
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Enter BMI"
                                name="bmi"
                                value={bmi}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="smoking" className="form-label">
                                Smoking
                            </label>
                            <select
                                className="form-select"
                                name="smoking"
                                value={smoking}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="alcoholDrinking" className="form-label">
                                Alcohol Drinking
                            </label>
                            <select
                                className="form-select"
                                name="alcoholDrinking"
                                value={alcoholDrinking}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="stroke" className="form-label">
                                Stroke
                            </label>
                            <select
                                className="form-select"
                                name="stroke"
                                value={stroke}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                </div>





                {/*Row2*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="physicalHealth" className="form-label">
                                Physical Health
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Enter your age"
                                name="physicalHealth"
                                value={physicalHealth}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="mentalHealth" className="form-label">
                                Mental Health
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Enter your age"
                                name="mentalHealth"
                                value={mentalHealth}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="difficultyWalking" className="form-label">
                                Difficulty Walking
                            </label>
                            <select
                                className="form-select"
                                name="difficultyWalking"
                                value={difficultyWalking}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="sex" className="form-label">
                                Sex
                            </label>
                            <select
                                name="sex"
                                className="form-select"
                                value={sex}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                </div>





                {/*Row3*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="age" className="form-label">
                               Age
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Enter your age"
                                name="age"
                                value={age}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="diabetic" className="form-label">
                                Diabetic
                            </label>
                            <select
                                className="form-select"
                                name="diabetic"
                                value={diabetic}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="physicalActivity" className="form-label">
                                Physical Activity
                            </label>
                            <select
                                name="physicalActivity"
                                className="form-select"
                                value={physicalActivity}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="generalHealth" className="form-label">
                                General Health
                            </label>
                            <select
                                name="generalHealth"
                                className="form-select"
                                value={generalHealth}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="excellent">Excellent</option>
                                <option value="veryGood">Very Good</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                                <option value="poor">Poor</option>
                            </select>
                        </div>
                    </div>
                </div>





                {/*Row4*/}
                <div className="row">
                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="sleepTime" className="form-label">
                                Sleep Time
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Sleeping hours of the day"
                                name="sleepTime"
                                value={sleepTime}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="asthma" className="form-label">
                                Asthma
                            </label>
                            <select
                                className="form-select"
                                name="asthma"
                                value={asthma}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="kidneyDisease" className="form-label">
                                Kidney Disease
                            </label>
                            <select
                                name="kidneyDisease"
                                className="form-select"
                                value={kidneyDisease}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="skinCancer" className="form-label">
                                Skin Cancer
                            </label>
                            <select
                                name="skinCancer"
                                className="form-select"
                                value={skinCancer}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                </div>





                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <button type="submit" className="btn btn-outline-primary btn-lg">
                                Prediction
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};


export default HFPrediction;
