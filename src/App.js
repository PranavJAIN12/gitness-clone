import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import Footer from './components/Footer';
import CodeHosting from './components/CodeHosting';
import GitExperience from './components/GitExperience';
import Pipeline from './components/Pipeline/Pipeline';
import CodePlattform from './components/CodePlattform/CodePlattform';

const App = () => {
  return (
   <>
    <Router>
      <Header />
      <Home/>
      <CodeHosting/>
      <GitExperience/>
      <Pipeline/>
      <CodePlattform/>
      <Routes>
        {/* <Route path="/" exact component={<Home/>} />   */}
        <Route path="/features" component={Features} />
      </Routes>
      <Footer />
    </Router>
   </>
  );
};

export default App;
