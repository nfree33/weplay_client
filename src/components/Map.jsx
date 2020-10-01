import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import axios from 'axios'
// import Locations from './Locations'


export default function Map() {
    const [parks, setParks] = useState([])

    useEffect(() => {
        // Need to wrap this in an async function to use await inside:
        async function fetchData() {
            const response = await axios.get("http://localhost:3000/parks");
            setParks(response.data);
        }
        fetchData();
    }, [!parks]);

    const mapStyles = {
        height: "100vh",
        width: "100%",
      };
      const defaultCenter = {
        lat: 41.68,
        lng: -70.15,
      };
    return (
    <div className= "map">
        <h2 className= "map-header">wePLAY Locations</h2>
        <div className= "google-map">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
            {
                ...parks.map(item => {
                  return (
                  <Marker key={item.name} position={item.location}/>
                  )
                })
             }
          />
        </LoadScript>
        </div>
    </div>
    );
    }
