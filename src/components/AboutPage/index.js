import React ,{useState} from 'react'
import ParticlesBackground from '../particleComponent';
import Sidebar from '../Sidebar';
import Navbar from '../navbar';
import styled from 'styled-components';
import {Name,listItem,listContainer, SubText, NameWrapper, CardContain, Para, CardWrapper, Container} from './aboutElements';
import {GoLocation} from 'react-icons/go'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import './about.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './font.css';
import './name.scss'
const ContainerNew = styled.div`

    display:flex;
    justify-content:center;
    align-items: center;
    width:100%;
    height:50vh;
    top:80%;
    left:50%;
`
const CardNew = styled.div`

    width:30vw;
    max-width:900px;
    box-shadow: 0 0 8px 2px rgba(255,255,255, 0.5);
  transition: 0.3s;
    color:white;
    height:30vh;
    position:relative;
    border-radius: 30px;
    &:hover {

box-shadow: 0 0 16px 0 rgba(255,255,255,0.2);

}

@media screen and (max-device-width: 480px) and (orientation: portrait){

    width:80vw;
    height:20vh;
    
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
    font-weight:300;
    margin-bottom:50px;


@media screen and (max-device-width: 480px) and (orientation: portrait){

font-size:15px;
margin-bottom:15px;

}

`


const SocialContainer = styled.div`
    
    width:100%;
    padding-top:5%;
    padding-bottom:5%;
    height:100px;
    padding:5px;
    
   
    
   margin:20px;

@media screen and (max-device-width: 480px) and (orientation: portrait){
    padding:1px;
   margin:5px;
   padding-top:0;
    padding-bottom:0;
width:80vw;


}

   
`
const SocialItem = styled.div`

display:inline-block;


    
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

@media screen and (max-device-width: 480px) and (orientation: portrait){
padding-left:20px;
height:30%;
grid-gap:6px;
}

`

const Group = styled.div`

display:flex;
justify-content:left;

@media screen and (max-device-width: 480px) and (orientation: portrait){
font-size:10px;

}

`

const AddressIcon = styled(GoLocation)`
   color:#a89f9f;
    font-size:30px;
    @media screen and (max-device-width: 480px) and (orientation: portrait){
        font-size:15px;
}

`
const PhoneIcon = styled(AiOutlinePhone)`
   color:#a89f9f;
    font-size:30px;
    @media screen and (max-device-width: 480px) and (orientation: portrait){
        font-size:15px;
}

`
const MailsIcon = styled(AiOutlineMail)`
   color:#a89f9f;
    font-size:30px;
    @media screen and (max-device-width: 480px) and (orientation: portrait){
        font-size:15px;
}

`


const ContentStyle = styled.h2`

    font-size:22px;
    font-weight:600;
    color:#726b6b;

    @media screen and (max-device-width: 480px) and (orientation: portrait){
        font-size:15px;
    
}
    

`




const About = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const head = '<body>'
    const headClose = '</body>'

    const githubHandler = () => {
        window.open('https://github.com/npaudyal')
    }
    const linkedinHandler = () => {
        window.open('https://www.linkedin.com/in/nischalpaudyal/')
    }
    const instaHandler = () => {
        window.open('https://www.instagram.com/nischalpaudyal/')
    }

    return (
        <div>
         <ParticlesBackground />
        
        
        <Sidebar isOpen ={isOpen} toggle ={toggle}/>
        <Navbar toggle={toggle}/>  




        <div className="section">
            <div className="intro">
                <h3 className="h1Style">{head}</h3>
    {/* <h1 style={{color:'white', fontFamily:'inherit', fontWeight:600, fontSize:'auto'}}>Nischal Paudyal </h1>
                <h2 style={{color:'white', fontFamily:'inherit', fontWeight:300}}>Full Stack Web Developer</h2> */}

<div class="container">
    <div class="box">

        <div class="title">
            <span class="block"></span>
            <h1>Nischal Paudyal<span></span></h1>
        </div>

        <div class="role">
            <div class="block"></div>
            <p>Full stack web developer</p>
        </div>

    </div>
</div>

                <p style={{color:'#8c8686', fontFamily:'inherit', fontWeight:600}}>
                I am a senior majoring in Computer science and mathematics in the University of Mississippi. I am currently living in Johnston, IA. I am a well-organized person, problem solver, with high
                attention to detail. I play piano, I am a fan of any sports.
                </p>
                <p style={{color:'#8c8686', fontFamily:'inherit', fontWeight:600}}>Interested in any web development spectrum and looking forward to work with ambitious people on ambitious projects.
</p>
<p><div className="h2Style">{headClose}</div></p>
            </div>
        </div>
   


        
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
            <SocialContainer>
            
            <ul className="social-media-list">
            <SocialItem>
          <li onClick={githubHandler}><a className="contact-icon">
            <FaGithub /></a>
          </li>
         
          <li onClick={instaHandler}><a className="contact-icon">
            <FaInstagram  /></a>
          </li>
          

          <li onClick={linkedinHandler}><a className="contact-icon">
            <FaLinkedin/></a>
          </li>
                   
          </SocialItem>
        
        </ul>


            </SocialContainer>
            
          
                   
            </CardNew>
        </ContainerNew> 


        </div>

        
    )
}

export default About
