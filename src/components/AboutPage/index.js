import React ,{useState} from 'react'
import ParticlesBackground from '../particleComponent';
import Sidebar from '../Sidebar';
import Navbar from '../navbar';
import styled from 'styled-components';
import {Name,listItem,listContainer, SubText, NameWrapper, CardContain, Para, CardWrapper, Container} from './aboutElements';
import {GoLocation} from 'react-icons/go'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'


const ContainerNew = styled.div`

    display:flex;
    justify-content:center;
    align-items: center;
    width:100%;
    height:50vh;
    padding-top:650px;
    padding-left:100px;
`
const CardNew = styled.div`

    width:30%;
    max-width:900px;
    box-shadow: 0 0 8px 2px rgba(255,255,255, 0.5);
  transition: 0.3s;
    color:white;
    height:300px;
    position:relative;
    border-radius: 30px;
    &:hover {

box-shadow: 0 0 16px 0 rgba(255,255,255,0.2);

}

`

const ContactContainer = styled.div`
    
    align-items:center;
    width:100%;
    padding-top:5%;
    height:20px;
    display:flex;
    justify-content:center;
    font-size: 24px;
    font-weight:600;
    margin-bottom:50px;
`

const GroupContainer = styled.div`

   
    height:40%;
    max-width:450px;
    margin:0px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap:6px;
    float:left;
    padding-left:100px;


`

const Group = styled.div`

display:flex;
justify-content:left;

`

const AddressIcon = styled(GoLocation)`
   color:#a89f9f;
    font-size:30px;

`
const PhoneIcon = styled(AiOutlinePhone)`
   color:#a89f9f;
    font-size:30px;

`
const MailsIcon = styled(AiOutlineMail)`
   color:#a89f9f;
    font-size:30px;

`


const ContentStyle = styled.h2`

    font-size:22px;
    font-weight:600;
    color:#726b6b;
    

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
                 <ContactContainer>
                     CONTACT
                     </ContactContainer>
            <GroupContainer>
                <Group>
                    <AddressIcon />
                    
                </Group>
                <Group>
                    <ContentStyle>Johnston | IA</ContentStyle>
                </Group>

                <Group>
                <PhoneIcon />

                </Group>
                <Group>
                <ContentStyle>(317) 800-5678</ContentStyle>

                </Group>
                <Group>
                   <MailsIcon />

                </Group>

                <Group>
                <ContentStyle>npaudyal01@gmail.com</ContentStyle>

                </Group>
                
                
            </GroupContainer>
            
            

                   
            </CardNew>
        </ContainerNew>


        </div>
    )
}

export default About
