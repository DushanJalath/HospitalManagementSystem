import React, {useState} from 'react';
import '../App.css';
import {Link, useNavigate, useParams} from 'react-router-dom';
import NavBar from "./NavBar";
import axios from "axios";


const DiabeticPrediction = () => {
    const {id}=useParams();

    const [doctor, setDoctor] = useState({
        age: "",
        gender: "",
        polyuria: "",
        polydipsia: "",
        weightLoss: "",
        weakness: "",
        polyphagia: "",
        genitalThrush: "",
        visualBlurring: "",
        itching: "",
        irritability: "",
        delayedHealing: "",
        partialParesis: "",
        muscleStiffness: "",
        alopecia: "",
        obesity: ""


    });

    const {age, gender, polyuria, polydipsia,weightLoss,weakness,polyphagia,
        genitalThrush, visualBlurring,itching, irritability, delayedHealing,
        partialParesis, muscleStiffness, alopecia, obesity} = doctor;

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
                            <label htmlFor="gender" className="form-label">
                                Gender
                            </label>
                            <select
                                name="gender"
                                className="form-select"
                                value={gender}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="polyuria" className="form-label">
                                Polyuria
                            </label>
                            <select
                                className="form-select"
                                name="polyuria"
                                value={polyuria}
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
                            <label htmlFor="polydipsia" className="form-label">
                                Polydipsia
                            </label>
                            <select
                                className="form-select"
                                name="polydipsia"
                                value={polydipsia}
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
                            <label htmlFor="weightLoss" className="form-label">
                                Sudden Weight Loss
                            </label>
                            <select
                                className="form-select"
                                name="weightLoss"
                                value={weightLoss}
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
                            <label htmlFor="weakness" className="form-label">
                                Weakness
                            </label>
                            <select
                                className="form-select"
                                name="weakness"
                                value={weakness}
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
                            <label htmlFor="polyphagia" className="form-label">
                                Polyphagia
                            </label>
                            <select
                                className="form-select"
                                name="polyphagia"
                                value={polyphagia}
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
                            <label htmlFor="genitalThrush" className="form-label">
                                Genital Thrush
                            </label>
                            <select
                                className="form-select"
                                name="genitalThrush"
                                value={genitalThrush}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                </div>






            {/*Row3*/}

                <div className="row">
                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="visualBlurring" className="form-label">
                                Visual Blurring
                            </label>
                            <select
                                className="form-select"
                                name="visualBlurring"
                                value={visualBlurring}
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
                            <label htmlFor="itching" className="form-label">
                                Itching
                            </label>
                            <select
                                className="form-select"
                                name="itching"
                                value={itching}
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
                            <label htmlFor="irritability" className="form-label">
                                Irritability
                            </label>
                            <select
                                className="form-select"
                                name="irritability"
                                value={irritability}
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
                            <label htmlFor="delayedHealing" className="form-label">
                                Delayed Healing
                            </label>
                            <select
                                className="form-select"
                                name="delayedHealing"
                                value={delayedHealing}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value=''></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                </div>







                {/*Row4*/}

                <div className="row">
                    <div className="col-md-3">
                        <div className="mb-4">
                            <label htmlFor="partialParesis" className="form-label">
                                Partial Paresis
                            </label>
                            <select
                                className="form-select"
                                name="partialParesis"
                                value={partialParesis}
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
                            <label htmlFor="muscleStiffness" className="form-label">
                                Muscle Stiffness
                            </label>
                            <select
                                className="form-select"
                                name="muscleStiffness"
                                value={muscleStiffness}
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
                            <label htmlFor="alopecia" className="form-label">
                                Alopecia
                            </label>
                            <select
                                className="form-select"
                                name="alopecia"
                                value={alopecia}
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
                            <label htmlFor="obesity" className="form-label">
                                Obesity
                            </label>
                            <select
                                className="form-select"
                                name="obesity"
                                value={obesity}
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


export default DiabeticPrediction;
