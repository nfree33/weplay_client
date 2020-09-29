import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
// import Locations from './Locations'


export default function Map() {
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
        <h2 className= "map-header">wePLAY Map</h2>
        <div className= "google-map">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          />
        </LoadScript>
        </div>
    </div>
    );
    }
