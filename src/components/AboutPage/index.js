import React ,{useState} from 'react'
import ParticlesBackground from '../particleComponent';
import Sidebar from '../Sidebar';
import Navbar from '../navbar';
import styled from 'styled-components';
import {GoLocation} from 'react-icons/go'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {motion} from 'framer-motion';
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
  

@media screen and (max-device-width: 480px) and (orientation: portrait){


padding-bottom:20%;


}
@media screen and (max-device-width: 768px) and (orientation: portrait){

    padding-bottom:20%;

}

@media screen and (max-width: 768px){

    padding-bottom:20%;

}
@media screen and (max-width: 1200px){
    padding-bottom:20%;

}


`
const CardNew = styled.div`

    width:30vw;
    max-width:1200px;
    box-shadow: 0 0 8px 2px rgba(255,255,255, 0.5);
  transition: 0.3s;
    color:white;
    height:30vh;
    position:relative;
    border-radius: 30px;
    margin-bottom:20px;
   
    &:hover {

box-shadow: 0 0 16px 0 rgba(255,255,255,0.2);

}

@media screen and (max-device-width: 480px) and (orientation: portrait){

    width:90vw;
    height:20vh;
    margin-bottom:20px;
    
    
}

@media screen and (max-device-width: 768px) and (orientation: portrait){

width:70vw;
height:30vh;

}

@media screen and (max-width: 768px){

width:70vw;
height:30vh;

}
@media screen and (max-width: 1200px){

width:70vw;
height:30vh;

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
margin-bottom:35px;

}
@media screen and (max-device-width: 480px) and (orientation: portrait){

font-size:15px;
margin-bottom:35px;

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
   
    
    width:80vw;

    


}

@media screen and (max-width: 1200px){

    padding:5px;
    margin:35px;
   
    
    width:60vw;


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
height:50%;
width:90%;
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
        <>
         <ParticlesBackground />
        
        
        <Sidebar isOpen ={isOpen} toggle ={toggle}/>
        <Navbar toggle={toggle}/>  



        <div className="whole"
        >
        <motion.div className="section"
        
        initial={{x: '100vw'}}
        animate={{x:0}}
        transition={{type:'spring', delay:0.5}}
        
        >
            <div className="intro">
                <h3 className="h1Style">{head}</h3>
   

<div className="container">
    <div className="box">

        <div className="title">
            <span className="block"></span>
            <h1>Nischal Paudyal<span></span></h1>
        </div>

        <div className="role">
            <div className="block"></div>
            <p>Full stack web developer</p>
        </div>

    </div>
</div>

                <p className ="new-p" style={{color:'#8c8686', fontFamily:'inherit', fontWeight:600}}>
                I am a senior majoring in Computer science and mathematics in the University of Mississippi. I am currently living in Johnston, IA. I am a well-organized person, problem solver, with high
                attention to detail. I play piano, I am a fan of any sports.
                </p>
                <p className ="new-p" style={{color:'#8c8686', fontFamily:'inherit', fontWeight:600}}>Interested in any web development spectrum and looking forward to work with ambitious people on ambitious projects.
</p>
<p><div className="h2Style">{headClose}</div></p>
            </div>
        </motion.div>
   


      
        <ContainerNew>
            <motion.div
             initial={{x: '-100vw'}}
             animate={{x:0}}
             transition={{type:'spring', delay:0.7}}
            >
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
          <li onClick={githubHandler}><div className="contact-icon">
            <FaGithub /></div>
          </li>
         
          <li onClick={instaHandler}><div className="contact-icon">
            <FaInstagram  /></div>
          </li>
          

          <li onClick={linkedinHandler}><div className="contact-icon">
            <FaLinkedin/></div>
          </li>
                   
          </SocialItem>
        
        </ul>


            </SocialContainer>
            
          
                   
            </CardNew>
            </motion.div>
        </ContainerNew> 

        </div>
        </>

        
    )
}

export default About
