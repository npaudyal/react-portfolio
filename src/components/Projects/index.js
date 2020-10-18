import React, {useState}from 'react'
import ParticlesBackground from '../particleComponent';
import Sidebar from '../Sidebar';
import Navbar from '../navbar';
import { ProjectsContainer } from './ProjectElements';
import ParallaxCard from 'react-parallax-card';

const Projects = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
        <ParticlesBackground />
        
        
        <Sidebar isOpen ={isOpen} toggle ={toggle}/>
        <Navbar toggle={toggle}/> 
        <ProjectsContainer>
        <ParallaxCard
  
  enableRotate
  enableTransform
  style={{ 
      width: 240,
      height: 240,
       
      
      }}>

  <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' style={{ maxWidth: '100%', maxHeight: '100%' }} />

  <div /><div /><div />


  

</ParallaxCard>
<ParallaxCard
  
  enableRotate
  enableTransform
  style={{ width: 240, height: 240 }}>

  <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' style={{ maxWidth: '100%', maxHeight: '100%' }} />

  <div /><div /><div />


  

</ParallaxCard>
<ParallaxCard
  
  enableRotate
  enableTransform
  style={{ width: 240, height: 240 }}>

  <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' style={{ maxWidth: '100%', maxHeight: '100%' }} />

  <div /><div /><div />


  

</ParallaxCard>
<ParallaxCard
  
  enableRotate
  enableTransform
  style={{ width: 240, height: 240 }}>

  <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' style={{ maxWidth: '100%', maxHeight: '100%' }} />

  <div /><div /><div />


  

</ParallaxCard>
<ParallaxCard
  
  enableRotate
  enableTransform
  style={{ width: 240, height: 240 }}>

  <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' style={{ maxWidth: '100%', maxHeight: '100%' }} />

  <div /><div /><div />


  

</ParallaxCard>
<ParallaxCard
  
  enableRotate
  enableTransform
  style={{ width: 240, height: 240 }}>

  <img src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg' style={{ maxWidth: '100%', maxHeight: '100%' }} />

  <div /><div /><div />


  

</ParallaxCard>

</ProjectsContainer>

        </>
    )
}

export default Projects
