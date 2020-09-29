import React from 'react'
import GoogleMapReact from 'google-map-react'
// import Locations from './Locations'


export default function Map({ location, zoomLevel }) {
    const KEY = process.env.REACT_APP_KEY
//     const location = {
//     address: 'Dennis, massachusetts.',
//     lat: 41.68,
//     lng: -70.15,
// }
    return (
    <div className= "map">
        <h2 className= "map-header">
            wePLAY Map
        </h2>
        <div className= "google-map">
            <GoogleMapReact
                style={{ height: "100%", width: "100%"}}
                bootstrapURLKeys={{key: KEY}}
                defaultCenter={{location}}
                defaultZoom={zoomLevel}
                yesIWantToUseGoogleMapApiInternals
            >
                 {/* <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                    />      */}


            </GoogleMapReact>
        </div>
    </div>
    )}
