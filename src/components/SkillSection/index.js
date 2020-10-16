import React ,{useState}  from 'react'
import $ from 'jquery';
import {SkillsContainer} from './skillElements'
import './skills.scss'
import ParticlesBackground from '../particleComponent';
import Sidebar from '../Sidebar';
import Navbar from '../navbar';
import  TagCloud  from 'react-tag-cloud';


const data = [
  { value: 'jQuery', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 20 },
  { value: 'Webpack', count: 22 },
  { value: 'Babel.js', count: 7 },
  { value: 'ECMAScript', count: 25 },
  { value: 'Jest', count: 15 },
  { value: 'Mocha', count: 17 },
  { value: 'React Native', count: 27 },
  { value: 'Angular.js', count: 30 },
  { value: 'TypeScript', count: 15 },
  { value: 'Flow', count: 30 },
  { value: 'NPM', count: 11 },
]


const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinker 3s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      border: `2px solid ${color}`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: 'white',
    }}
  >
    {tag.value}
  </span>
)

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

    
	
    return (
      <>

      <ParticlesBackground />
        
      
      <Sidebar isOpen ={isOpen} toggle ={toggle}/>
      <Navbar toggle={toggle}/>  

     
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
        <TagCloud 
        style={{
          fontFamily: 'sans-serif',
          fontSize: 30,
          fontWeight: 'bold',
          fontStyle: 'italic',
          
          padding: 5,
          width: '100%',
          height: '100%'
        }}>
        <div style={{fontSize: 50}}>react</div>
        <div style={{color: 'green'}}>tag</div>
        <div rotate={90}>cloud</div>
        
      </TagCloud>
       
        
      </ul>

      
      
  </>
    )
}
export default Skills
