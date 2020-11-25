import React from 'react';
import './App.css';
import Home from './pages/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/AboutPage/index'
import Term from './components/terminal';
import Slider from './components/NewProject';
import TagCanvas from './components/NewSkills/index';
function App() {
  return (
    
   <Router>
     <Switch>

      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/projects" component={Slider} exact />
      <Route path="/terminal" component={Term} exact />
      <Route path="/skills" component={TagCanvas} exact />
      



     </Switch>

      

    

 

   </Router>
     
   
  );
}

export default App;
