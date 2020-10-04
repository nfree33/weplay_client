import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import axios from 'axios'
// import Locations from './Locations'


export default function Map() {
  const [parks, setParks] = useState([])

  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get("http://weplay-api.herokuapp.com/parks");
      setParks(response.data);
    }
    fetchData();
  }, [!parks]);

  const mapStyles = {
    height: "80vh",
    width: "100%",

  };
  const defaultCenter = {
    lat: 41.68,
    lng: -70.15,
  };

  const [selected, setSelected] = useState({});

  const onSelect = item => {
    setSelected(item);
    console.log((item.sports))
  }
  return (

    <div className="map">
      <h2 className="map-header">wePLAY Locations</h2>
      <div className="google-map">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={defaultCenter}
          >
            {
              parks.map(item => {
                return (
                  <Marker key={item.name}
                    position={item.location}
                    onClick={() => onSelect(item)} />
                )
              })
            }
            {
              selected.location &&
              (
                <InfoWindow
                  position={selected.location}
                  clickable={true}
                  onCloseClick={() => setSelected({})}
                >
                  <div className="park-card">
                  <h1 className="card-address">{selected.name}</h1>
                  <h3 className="card-address">{selected.address}</h3>
                  <a href={`/parks/${selected.id}`}>
                  <img className="card-image" src={selected.img}/></a>
                  <h3 className="card-list-header">Available Sports</h3>
                  <ul className= "card-list">
                    <li>{selected.sports[0]}</li>
                    <li>{selected.sports[1]}</li>
                    <li>{selected.sports[2]}</li>
                    <li>{selected.sports[3]}</li>
                  </ul>
                  </div>
                </InfoWindow>
              )
            }
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}
