import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import axios from 'axios'
import "./ParkShow.css";

function ParkShow(props) {
    const params = useParams()

    const [park, setPark] = useState([])
    const { name, address, img, sports, users } = park;

    useEffect(() => {
        // Need to wrap this in an async function to use await inside:
        async function fetchData() {
            const response = await axios.get(`http://localhost:3000/parks/${params.id}`);
            console.log("=====fetch park====", response)
            setPark(response.data);
            console.log(response.data)
        }
        fetchData();
    }, [!park]);

    // const { username } = users
    console.log("===FETCH USER DATA", users)
    return (
        <div className="park-preview">
            <h1>{name}</h1>
            <img className="park-image"    src={img}/>
            <a href="/locations"><h2 className="see-on-map">See it on the map!</h2></a>
            {props.isLoggedIn ? <h4>{address}</h4> : ""}
            {props.isLoggedIn ? <h4>{sports}</h4> : ""}
            {/* <h4>{users[0].username||"test"}</h4> */}
            {/* <h4>{Object.keys(users) > 0 ? users[0].username : ''}</h4> */}
            {/* {
              park.map(item => {
                return (
                <h1>{item.users.username}</h1>
                )
              })
            } */}
        </div>
    );
}

export default ParkShow;
