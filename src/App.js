import React from 'react';
import Map from './components/Map'
import './App.css';

require('dotenv').config()

const location = {
  address: '180 Old Bass River Rd, South Dennis, massachusetts.',
  lat: 41.68,
  lng: -70.15,
}
function App() {
  return (
    <div className="App">
      <h1>wePLAY</h1>
      <Map location={location} zoomLevel={11}/>
    </div>
  );
}



export default App;
