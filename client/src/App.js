import React from 'react';
import './App.css';
import MapContainer from './MapContainer';
import SimpleCard from './components/travelAdvisoryBoard';
import Profile from './components/profile';
import Itinerary from './components/itinerary';

function App() {
  return (
    <div className="App">
      <Itinerary/>
      <Profile/>
      <SimpleCard/>
      <MapContainer></MapContainer>
    </div>
  );
}

export default App;
