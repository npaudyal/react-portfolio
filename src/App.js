import React from 'react';
import './App.css';
import Home from './pages/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/AboutPage/index'
import Skills from './components/SkillSection';
import Projects from './components/Projects';
import Term from './components/terminal';
import NewProject from './components/NewProject';
import Slider from './components/NewProject';
function App() {
  return (
    
   <Router>
     <Switch>

      {/* <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/skills" component={Skills} exact />
      <Route path="/projects" component={Projects} exact />
      <Route path="/terminal" component={Term} exact /> */}



     </Switch>
    
   

    <Slider />

 

   </Router>
     
   
  );
}

export default App;
