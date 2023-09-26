import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./layout/NavBar";
import UserDetail from "./pages/UserDetail";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddUser from "./User/AddUser";
import UpdateUser from "./User/UpdateUser";
import DoctorDetail from "./pages/DoctorDetail";
import DoctorAdd from "./Doctor/DoctorAdd";
import UpdateDoctor from "./Doctor/UpdateDoctor";
import PatientDetail from "./pages/PatientDetail";
import AddPatient from "./Patient/AddPatient";
import UpdatePatient from "./Patient/UpdatePatient";
import DoctorAppoint from "./Doctor/DoctorAppoint";
import ApoinmentDetails from "./pages/ApoinmentDetails";
import DocSchedule from "./Doctor/DocSchedule";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Routes>
                    <Route path={"/user"} element={<UserDetail/>}/>
                    <Route path={"/adduser"} element={
                        <div className="row">
                            <div className="col-md-6">
                                <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=1060&t=st=1692635028~exp=1692635628~hmac=e8a0599cb186ffe464c6911d95ef3da0f4da9bc434103b7150664a8ab0cfb39e" alt="" width="600" height="600" className=" mt-lg-5"/>
                            </div>
                            <div className="col-md-6">
                                <AddUser/>
                            </div>
                        </div>
                    }/>
                    <Route path={"/addDoc"} element={
                        <div className="row">
                            <div className="col-md-6">
                                <img src="https://img.freepik.com/free-vector/man-doctor-woman-nurse-stand-with-patient-card-medical-staff-uniform-study-discuss-examination-result-make-note-therapist-giving-treatment-recommendation-prescription-putting-signature_575670-1316.jpg?w=1060&t=st=1692642115~exp=1692642715~hmac=b2328ff12532ae072862aec48a8a3fbece0f0cddb1743c823f4044056244f702" alt="" width="600" height="600" className=" mt-lg-5"/>
                            </div>
                            <div className="col-md-6">
                                <DoctorAdd/>
                            </div>
                        </div>
                    }/>
                    <Route path={"/addPat"} element={
                        <div className="row">
                            <div className="col-md-6">
                                <img src="https://img.freepik.com/free-vector/doctor-patient-medical-concept-hospital-patient-lying-hospital-bed_1150-50285.jpg?w=1800&t=st=1692645843~exp=1692646443~hmac=509b64de3d05c2b8e9291b2bd99d8fa66b67b9fce45ff204995c69ad845b1ebb" alt="" width="650" height="600" className=" mt-lg-5"/>
                            </div>
                            <div className="col-md-6">
                                <AddPatient/>
                            </div>
                        </div>
                    }/>
                    <Route path={`/update/:id`} element={<UpdateUser/>}/>
                    <Route path={`/updateDoc/:id`} element={<UpdateDoctor/>}/>
                    <Route path={`/updatePat/:id`} element={<UpdatePatient/>}/>
                    <Route path={`/docSchedule/:id`} element={<DocSchedule/>}/>
                    <Route path={"/doctor"} element={<DoctorDetail/>}/>
                    <Route path={"/appo"} element={<DoctorAppoint/>}/>
                    <Route path={"/patient"} element={<PatientDetail/>}/>
                    <Route path={"/apoinment/:doctorId/:patientId"} element={<ApoinmentDetails/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
