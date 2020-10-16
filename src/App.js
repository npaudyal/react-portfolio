import React from 'react';
import './App.css';
import Home from './pages/index'
import {BrowserRouter as Router} from 'react-router-dom'
import About from './components/AboutPage/index'
import Skills from './components/SkillSection';
function App() {
  return (
    
   <Router>
    {/* <Home /> */}
    
    {/* <About /> */}

    <Skills />

   </Router>
     
   
  );
}

export default App;
