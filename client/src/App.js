import React from 'react';
import './App.css';
import MapContainer from './MapContainer';
import SimpleCard from './components/travelAdvisoryBoard';

function App() {
  return (
    <div className="App">
      <SimpleCard/>
      <MapContainer></MapContainer>
    </div>
  );
}

export default App;
