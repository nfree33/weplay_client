import axios from 'axios';
import React, { useState, useEffect } from 'react';

// import ParkShow from "./ParkShow/ParkShow"
import "./ParkList.css";

export default function ParkList(props) {
    const [parks, setParks] = useState([])

    useEffect(() => {
        // Need to wrap this in an async function to use await inside:
        async function fetchData() {
            const response = await axios.get("http://localhost:3000/parks");
            setParks(response.data);
        }
        fetchData();
    }, [!parks]);

    const showParks = parks.map((park, i) => {
        const { id, name, address, location, sports, img } = park
        return (
            <div key={i}>
                <h1><a href={`/parks/${id}`}>{name}</a></h1>
                <img className= "show-image" src={img}/>
                <h1>Address: {address}</h1>
                <h1>Sports: {sports}</h1>
                <hr/>
            </div>
        );
    });

    return <div>{showParks}</div>;
};

