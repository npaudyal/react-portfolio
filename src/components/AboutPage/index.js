import React ,{useState} from 'react'
import ParticlesBackground from '../particleComponent';
import Sidebar from '../Sidebar';
import Navbar from '../navbar';
import styled from 'styled-components';
import {Name,listItem,listContainer, SubText, NameWrapper, CardContain, Para, CardWrapper, Container} from './aboutElements';



const ContainerNew = styled.div`

    display:flex;
    justify-content:center;
    align-items: center;
    width:100%;
    height:50vh;
    padding-top:600px;
`
const CardNew = styled.div`

    width:80%;
    max-width:900px;
    
    background: white;
    height:500px;
    position:relative;

`


const About = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
         <ParticlesBackground />
        
        
        <Sidebar isOpen ={isOpen} toggle ={toggle}/>
        <Navbar toggle={toggle}/>  

        <NameWrapper>
         
            <Name>Nischal Paudyal</Name>
            <SubText>Full Stack Web Developer</SubText>
            <Para>I am a senior majoring in Computer science and mathematics in the University of Mississippi. I am currently living in Johnston, IA. I am a well-organized person, problem solver, with high
                attention to detail. I play piano, I am a fan of any sports.
            </Para>

            <Para>
                Interested in any web development spectrum and looking forward to work with ambitious people on ambitious projects.
            </Para>
            </NameWrapper>
        {/* <CardContain>
        <CardWrapper>
            <Container>
                CONTACT
                
            
            </Container>
            <listContainer>
            <listWrapper>
            <listItem>
                Location
            </listItem>
            </listWrapper>
            
        </listContainer>
       
            
        </CardWrapper>
        </CardContain> */}

        <ContainerNew>
            <CardNew>

            </CardNew>
        </ContainerNew>


        </div>
    )
}

export default About
