import React from 'react';
import './App.css';
import Home from './pages/index'
import {BrowserRouter as Router} from 'react-router-dom'
import About from './components/AboutPage/index'
function App() {
  return (
    
   <Router>
    {/* <Home /> */}
    
    <About />
    
   </Router>
     
   
  );
}

export default App;
