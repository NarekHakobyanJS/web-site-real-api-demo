import React, {useEffect} from 'react';
import "./index.css";
import {Routes, Route} from "react-router-dom"
import Navigation from './componenets/Navigation';
import AuthPage from './pages/AuthPage';
import FilmsPage from './pages/FilmsPage';
import MainPage from './pages/MainPage';
import axios from 'axios';

function App() {

  return (
    <div className="App">
      <Navigation />
      <div className='main-app'>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/films/:id" element={<FilmsPage /> } />
      </Routes>
      </div>
    </div>
  );
}

export default App;
