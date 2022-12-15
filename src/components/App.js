import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aeroplanes from './Aeroplanes';
import DeleteAeroplanes from './Aeroplanes/DeletePlane';
import Aeroplane from './Aeroplane';
import Navbar from './Navbar/Navbar';
import Reservations from './Reservations/Reservations';
import ReservationFrom from './Reservations/MakeReservation';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Aeroplanes />} />
          <Route path="/delete-plane" element={<DeleteAeroplanes />} />
          <Route path="/Aeroplanes" element={<Aeroplanes />} />
          <Route path="/Aeroplanes/:aeroplaneId" element={<Aeroplane />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/MakeReservation" element={<ReservationFrom />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
