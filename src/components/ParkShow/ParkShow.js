import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./ParkShow.css";

function ParkShow(props) {
    const params = useParams()

    const [park, setPark] = useState([])
    const { name, address, img, sports, users } = park;

    useEffect(() => {
        // Need to wrap this in an async function to use await inside:
        async function fetchData() {
            const response = await axios.get(`https://weplay-api.herokuapp.com/parks/${params.id}`);
            console.log("=====fetch park====", response)
            setPark(response.data);
            console.log(response.data)
        }
        fetchData();
    }, [!park]);

    const showUsersAssigned = users?.map((user, i) => {
        const { username } = user;
        return (
            <div className="user-div" key={i}>
                    <h2 className="users-added">{username}</h2>
            </div>
        );
    });

    const showSports= sports?.map((park, i) => {
        const { sports } = park ;
        return (
            <div key={i}>
               <ul>
               <li>{sports}</li>
               </ul>
            </div>
        );
    });


    console.log("===FETCH USER DATA", users)
    console.log("==SHOW SPORTS===",showSports)
    return (
        <div className="park-preview">
            <h1 className="sport-font">{name}</h1>
            <img className="park-image" src={img} />
            {props.isLoggedIn ? <h3>{address}</h3> : ""}


            <h2>See who else wants to pickup here:</h2>
            <div className="container">
                <h3 className="user-has-park">{showUsersAssigned}</h3>
            <a href="/locations"><h2 className="see-on-map">See it on the map!</h2></a>
            </div>
        </div>
    );
}

export default ParkShow;
