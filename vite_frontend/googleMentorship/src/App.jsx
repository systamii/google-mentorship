import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import { Welcome, Homepage, HeatmapPage } from './pages';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />}/>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/heatmap" element={<HeatmapPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
