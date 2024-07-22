import React from 'react';
import './App.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import Footer from './components/Footer';

const App = () => {
  return (
   <>
    <Header/>
    <Home/>
   </>
  );
};

export default App;
