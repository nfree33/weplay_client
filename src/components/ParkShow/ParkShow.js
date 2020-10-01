import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import axios from 'axios'
// import "./ParkShow.css";

function ParkShow(props) {
    const params = useParams()

    const [park, setPark] = useState([])

    useEffect(() => {
        // Need to wrap this in an async function to use await inside:
        async function fetchData() {
            const response = await axios.get(`http://localhost:3000/parks/${params.id}`);
            console.log("=====fetch park====", response)
            setPark(response.data);
        }
        fetchData();
    }, [!park]);

    const { name, address, sports } = park;

    return (
        <div className="park-preview">
            <h1>Parks</h1>
            {/* <img src={imageUrl} alt={name} className="park-image" /> */}
            <h3>{name}</h3>
            {props.isLoggedIn ? <h4>{address}</h4> : ""}
            {props.isLoggedIn ? <h4>{sports}</h4> : ""}
        </div>
    );
}

export default ParkShow;
