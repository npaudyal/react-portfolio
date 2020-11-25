import React ,{useState}  from 'react'
import $ from 'jquery';
import './skills.scss'
import ParticlesBackground from '../particleComponent';
import Sidebar from '../Sidebar';
import Navbar from '../navbar';
import { GlobeContainer } from './skillElements';
import './globe.scss';
import TagCloud from 'react3dtagcloud'


const Skills = ({done}) => {
    const [style, setStyle] = React.useState({});


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
    }, 200);
    var lang = {
        "html": "90%",
        "css": "80%",
        "javascript": "85%",
        "node": "80%",
        "react": "80%"
      };
      
      var multiply = 4;
      
      $.each( lang, function( language, pourcent) {
      
        var delay = 450;
        
        setTimeout(function() {
          $('#'+language+'-pourcent').html(pourcent);
        },delay*multiply);
        
        multiply++;
      
      });


      const tagName = ['java', 'javscript', 'C', 'C++', 'Python', 'React', 'Vue', 'redux', 'Spring', 'NodeJS', 'MongoDB']


 
    return (
      <>

      <ParticlesBackground />
        
      
      <Sidebar isOpen ={isOpen} toggle ={toggle}/>
      <Navbar toggle={toggle}/> 

      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
		  <TagCloud tagName={tagName} radius = "200"></TagCloud>
      </div>


      {/* <GlobeContainer>
<div class="particle">JavaScript</div>
<div class="particle">GraphQL</div>
<div class="particle">Node.JS</div>
<div class="particle">MongoDB</div>   
<div class="particle">ReactJS</div>
<div class="particle">HTML5</div>
<div class="particle">CSS/SASS</div>
<div class="particle">Blender</div>
<div class="particle">Flutter</div>
<div class="particle">Firebase</div>
<div class="particle">SQL</div>
<div class="particle">Python</div>
<div class="particle">Java</div>
<div class="particle">Spring</div>
<div class="particle">Spring AOP</div>
<div class="particle">Spring Boot</div>
<div class="particle">Git</div>
<div class="particle">Redux</div>


</GlobeContainer>
      
     
        <ul className="skills-bar-container">
  
        <li>
          <div className="progressbar-title">
            <h3>HTML5</h3>
            <span className="percent" id="html-pourcent"></span>
          </div>
          <div className="bar-container">
            <span className="progressbar progressred" id="progress-html"></span>
          </div>
        </li>
        <li>
          <div className="progressbar-title">
            <h3>CSS / SASS</h3>
            <span className="percent" id="css-pourcent"></span>
          </div>
          <div className="bar-container">
            <span className="progressbar progressblue" id="progress-css"></span>
          </div>
        </li>
        
        <li>
          <div className="progressbar-title">
            <h3>JavaScript </h3>
            <span className="percent" id="javascript-pourcent"></span>
          </div>
          <div className="bar-container">
            <span className="progressbar progresspurple" id="progress-javascript"></span>
          </div>
        </li>
        
        <li>
          <div className="progressbar-title">
            <h3>NodeJS</h3>
            <span className="percent" id="node-pourcent"></span>
          </div>
          <div className="bar-container">
            <span className="progressbar progressgreen" id="progress-node"></span>
          </div>
        </li>
        
        <li>
          <div className="progressbar-title">
            <h3>ReactJS</h3>
            <span className="percent" id="react-pourcent"></span>
          </div>
          <div className="bar-container">
            <span className="progressbar progressorange" id="progress-react"></span>
          </div>
        </li>

     
      </ul>
     */}

      
  </>
    )
}
export default Skills
