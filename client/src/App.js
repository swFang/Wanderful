import React from 'react';
import './App.css';
import MapContainer from './components/MapContainer';
import SimpleCard from './components/travelAdvisoryBoard';
import Profile from './components/profile';
import Calendar from './components/CalendarContainer';
import Itinerary from './components/itinerary';

function App() {
  return (
    <div className="App">
      <Itinerary/>
      <Profile/>
      <SimpleCard/>
      <Calendar></Calendar>
      <MapContainer></MapContainer>
    </div>
  );
}

export default App;
