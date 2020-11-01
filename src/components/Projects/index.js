import React, {useState}from 'react'
import ParticlesBackground from '../particleComponent';
import Sidebar from '../Sidebar';
import Navbar from '../navbar';
import { ProjectsContainer } from './ProjectElements';
import ParallaxCard from 'react-parallax-card';
import Scrumptious from '../../images/Scrumptious.png';
import Jodi from '../../images/Jodi.png';
import Burger from '../../images/BurgerBuilder.png';
import Customer from '../../images/Customer.png';
import Ecommerce from '../../images/E-commerce.png';
import GRE from '../../images/GREAPP.png';
import Portfolio from '../../images/Portfolio.png';
import IDetector from '../../images/iDetector.png';
import Insta from '../../images/instagram.png';
import Task from '../../images/task_application.png';
import Weather from '../../images/Weather.png';
import './stack.css';
import { StackWrapper, StackContainer } from '../Projects/ProjectElements';



const Projects = () => {
  const githubHandler = () => (window.open('https://github.com/npaudyal'))

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <ParticlesBackground />
        <Sidebar isOpen ={isOpen} toggle ={toggle}/>
        <Navbar toggle={toggle}/>
        
        <StackContainer>
        <StackWrapper>
        <figure className="snip1566">
  <img src= {Jodi} alt="sq-sample14" />
  <figcaption><i className="ion-android-open" onClick={githubHandler}></i></figcaption>
  
</figure>
<figure className="snip1566"><img src={IDetector} alt="sq-sample17" />
  <figcaption><i className="ion-android-open"></i></figcaption>
 
</figure>
<figure className="snip1566"><img src={Scrumptious}alt="sq-sample19" />
  <figcaption><i className="ion-android-open"></i></figcaption>
  <a href="#"></a>
</figure>
<figure className="snip1566">
  <img src={Insta} alt="sq-sample20" />
  <figcaption><i className="ion-android-open"></i></figcaption>
  <a href="#"></a>
</figure>
<figure className="snip1566">
  <img src={Ecommerce} alt="sq-sample14" />
  <figcaption><i className="ion-android-open"></i></figcaption>
  <a href="#"></a>
</figure>
<figure className="snip1566">
  <img src={Burger} alt="sq-sample14" />
  <figcaption><i className="ion-android-open"></i></figcaption>
  <a href="#"></a>
</figure>
<figure className="snip1566">
  <img src={Customer} alt="sq-sample14" />
  <figcaption><i className="ion-android-open"></i></figcaption>
  <a href="#"></a>
</figure>
<figure className="snip1566">
  <img src={GRE} alt="sq-sample14" />
  <figcaption><i className="ion-android-open"></i></figcaption>
  <a href="#"></a>
</figure>
<figure className="snip1566">
  <img src={Weather}alt="sq-sample14" />
  <figcaption><i className="ion-android-open"></i></figcaption>
  <a href="#"></a>
</figure>
<figure className="snip1566">
  <img src={Portfolio}alt="sq-sample14" />
  <figcaption><i className="ion-android-open"></i></figcaption>
  <a href="#"></a>
</figure>
<figure className="snip1566">
  <img src={Task} alt="sq-sample14" />
  <figcaption><i className="ion-android-open"></i></figcaption>
  <a href="#"></a>
</figure>
</StackWrapper>
</StackContainer>
       
        </>
    )
}

export default Projects
