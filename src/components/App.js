import React from 'react';
// import './App.css';
import SpookyStreet from './SpookyStreet'
import Homepage from './Homepage'
import { Route, Routes } from "react-router-dom"

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="spookystreet/*" element={<SpookyStreet />}/>
      </Routes>
    </div>
  );
}

export default App;
