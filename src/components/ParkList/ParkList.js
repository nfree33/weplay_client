import axios from 'axios';
import React, { useState, useEffect } from 'react';

// import ParkShow from "./ParkShow/ParkShow"
import "./ParkList.css";

export default function ParkList(props) {
    const [parks, setParks] = useState([])

    useEffect(() => {
        // Need to wrap this in an async function to use await inside:
        async function fetchData() {
            const response = await axios.get("http://weplay-api.herokuapp.com/parks");
            setParks(response.data);
        }
        fetchData();
    }, [!parks]);

    const showParks = parks.map((park, i) => {
        const { id, name, address, location, sports, img } = 
        park
        console.log(sports)
        return (
            <div className="park-card card-margin park-preview" key={i}>
                <h1 className="sport-font"><a className="sport-font"href={`/parks/${id}`}>{name}</a></h1>
                <img className= "show-image" src={img}/>
                <h3>Address: {address}</h3>
                <ul className="sportList"> 
                    <li className="sportList">{sports[0]} </li>
                    <li className="sportList">{sports[1]} </li>
                    <li className="sportList">{sports[2]}</li>
                    </ul>
                
             
                




                
            </div>
        );
    });

    return (<div>
        {showParks}
        
        </div>
    )
};

