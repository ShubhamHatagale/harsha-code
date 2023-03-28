import './App.css';
import React, { useState, useEffect, setState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './MainRoutes';


function App() {


  return (
    <BrowserRouter basename={'/dev'}>
      <MainRoutes />
    </BrowserRouter>



  );
}

export default App;
