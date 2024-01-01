import React, { useEffect, useState } from 'react';
import NavBar from "./NavBar";
import '../App.css';
import styles from '../NewsItem.module.css';



const News = () => {


    return (
        <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
            <NavBar isAuthenticated={true} userRole={"front"} patientId={""} style={{ paddingRight: 0 }} />

        </div>
    );
};

export default News;
