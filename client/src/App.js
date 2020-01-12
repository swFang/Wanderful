import React from 'react';
import './App.css';
import MapContainer from './MapContainer';
import SimpleCard from './components/travelAdvisoryBoard';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <Profile/>
      <SimpleCard/>
      <MapContainer></MapContainer>
    </div>
  );
}

export default App;
