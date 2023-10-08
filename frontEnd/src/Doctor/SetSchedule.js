import React, { useState } from 'react';
import axios from 'axios';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';


const DoctorScheduleForm = () => {
    const [formData, setFormData] = useState({
        doctorId: '',
        startTime: '',
        endTime: '',
        dayOfWeek: '',
    });

    const { doctorId, startTime, endTime, dayOfWeek } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleTimeChange = (name, time) => {
        setFormData({ ...formData, [name]: time.format('HH:mm') });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send the schedule data to the backend for processing
            const response = await axios.post(
                'http://localhost:8080/api/v1/schedule/addSchedule',
                formData
            );
            console.log('Schedule added successfully:', response.data);
            // Reset the form after successful submission
            setFormData({
                doctorId: '',
                startTime: '',
                endTime: '',
                dayOfWeek: '',
            });
        } catch (error) {
            console.error('Error adding schedule:', error);
        }
    };

    return (
        <div>
            <h2>Doctor Schedule</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="doctorId" className="form-label">
                        Doctor ID
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="doctorId"
                        name="doctorId"
                        value={doctorId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="startTime" className="form-label">
                        Start Time
                    </label>
                    <Datetime
                        id="startTime"
                        name="startTime"
                        value={startTime}
                        onChange={(time) => handleTimeChange('startTime', time)}
                        dateFormat={false} // Display time only
                        inputProps={{ required: true }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="endTime" className="form-label">
                        End Time
                    </label>
                    <Datetime
                        id="endTime"
                        name="endTime"
                        value={endTime}
                        onChange={(time) => handleTimeChange('endTime', time)}
                        dateFormat={false} // Display time only
                        inputProps={{ required: true }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="dayOfWeek" className="form-label">
                        Day of the Week
                    </label>
                    <select
                        className="form-select"
                        id="dayOfWeek"
                        name="dayOfWeek"
                        value={dayOfWeek}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a day</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Save Schedule
                </button>
            </form>
        </div>
    );
};

export default DoctorScheduleForm;
