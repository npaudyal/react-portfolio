import React , {useState} from 'react'
import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection'

import ParticlesBackground from '../components/particleComponent'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <ParticlesBackground />
        
        
          <Sidebar isOpen ={isOpen} toggle ={toggle}/>
          <Navbar toggle={toggle}/>  
          <HeroSection />
       
             
        </>
    )
}

export default Home;
