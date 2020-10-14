import React , {useState} from 'react'
import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection';
import {homeObjOne} from '../components/InfoSection/data'
import Progress from '../components/SkillSection'
import Projects from '../components/Projects'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen ={isOpen} toggle ={toggle}/>
          <Navbar toggle={toggle}/>  
          <HeroSection />
          <InfoSection {...homeObjOne} />
            
            <Progress done = "70" text="JavaScript" color= "green"/>
            <Projects></Projects>
            
        </>
    )
}

export default Home;
