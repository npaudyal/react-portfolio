
import React, {useState} from 'react'
import './newss.css'
import ParticlesBackground from '../particleComponent'
import Sidebar from'../Sidebar';
import Navbar from '../navbar';
import Jodi from '../../images/Jodi.png'
import Scrumptious from '../../images/Scrumptious.png';
import Burger from '../../images/BurgerBuilder.png';
import Customer from '../../images/Customer.png';
import Ecommerce from '../../images/E-commerce.png';
import IDetector from '../../images/iDetector.png';
import Insta from '../../images/instagram.png';
import Weather from '../../images/Weather.png';
import styled from 'styled-components';
import MdOpen from 'react-ionicons/lib/MdOpen';

export const Cunt = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;
	padding-top:5%;
	overflow-y:scroll;
	height:200%;


`


const Slider = () => {
        const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const newStyle = {
        backgroundImage:`url(${Jodi})`
    }

    const jodiOpener = () => {
        window.open('https://play.google.com/store/apps/details?id=com.paudyal.merosathi')
    }
    const ScrumOpener = () => {
        window.open('https://scrumptious-recipe-manager.herokuapp.com/')
    }
    const eCommerceOpener = () => {
        window.open('https://github.com/npaudyal/E-commerce')
    }
    const iDetectorOpener = () => {
        window.open('https://devpost.com/software/pranaya-shrestha')
    }
    const weatherOpener = () => {
        window.open('https://github.com/npaudyal/NodeJS-Weather-Forecast')
    }
    const customerOpener = () => {
        window.open('https://github.com/npaudyal/Web-Customer-Tracker')
    }
    const instaOpener = () => {
        window.open('https://github.com/npaudyal/Instagram-clone')
    }
    const burgerOpener = () => {
        window.open('https://react-my-burger-8859a.web.app/?fbclid=IwAR23ipbC76s3UE0LXzo8ydBhniq1SknwozKbJa9KwDtYcg-Xf_IxH_60K3I')
    }
    return (
        <>
        <ParticlesBackground />
         <Sidebar isOpen ={isOpen} toggle ={toggle}/>
         <Navbar toggle={toggle}/>
                
<Cunt>
<div className="wrapper1">
  <div className="cols1">
			<div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${Jodi})`}}>
						<div className="inner1">
							<p className="p-projects">Jodi</p>
              <span className="new-span">On play store</span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p className="p-projects">Jodi is a dating application built using flutter and firebase.</p>
                          <p className="p-projects"><MdOpen color="white" fontSize="2.5rem" shake={true} onClick={jodiOpener}/></p>
                          
                        </div>
                        
					</div>
				</div>
			</div>
            <div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${Scrumptious})`}}>
						<div className="inner1">
							<p className="p-projects">Scrumptious</p>
              <span className="new-span">A Recipe Planner</span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p className="p-projects">Scrumptious is a recipe planner application built using MERN stack.</p>
                          <p className="p-projects"><MdOpen color="white" fontSize="2.5rem" rotate={true} onClick={ScrumOpener}/></p>
                        </div>
					</div>
				</div>
			</div>
            <div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${Ecommerce})`}}>
						<div className="inner1">
							<p className="p-projects"> E-commerce</p>
              <span className="new-span">An Online Shopping Platform </span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p className="p-projects">E-commerce uses various features like StripeJS for payment and  many more.</p>
                          <p className="p-projects"><MdOpen color="white" fontSize="2.5rem" beat={true} onClick={eCommerceOpener}/></p>

                        </div>
					</div>
				</div>
			</div>
            <div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${IDetector})`}}>
						<div className="inner1">
							<p className="p-projects">iDetector</p>
              <span className="new-span">VandyHacks Winner</span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p className="p-projects">iDetector is a gesture detecting application built using OpenCV(Python).</p>
                          <p className="p-projects"><MdOpen color="white" fontSize="2.5rem" shake={true} onClick={iDetectorOpener}/></p>

                        </div>
					</div>
				</div>
			</div>
            <div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${Weather})`}}>
						<div className="inner1">
							<p className="p-projects">Weather Man</p>
              <span className="new-span">A Weather App</span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p className="p-projects">Weather Application built using NodeJs and MongoDB.</p>
                          <p className="p-projects"><MdOpen color="white" fontSize="2.5rem" rotate={true} onClick={weatherOpener}/></p>

                        </div>
					</div>
				</div>
			</div>
            <div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${Insta})`}}>
						<div className="inner1">
							<p className="p-projects">Instagram Clone</p>
              <span className="new-span">Social Media</span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p className="p-projects">Instagram clone is a mobile application built using flutter and firebase.</p>
                          <p className="p-projects"><MdOpen color="white" fontSize="2.5rem" beat={true} onClick={instaOpener}/></p>

                        </div>
					</div>
				</div>
			</div>
            <div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${Burger})`}}>
						<div className="inner1">
							<p className="p-projects">Burger Builder</p>
              <span className="new-span">Food Ordering App</span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p className="p-projects">Burger builder is built using ReactJS, NodeJS, and Firebase.</p>
                          <p className="p-projects"><MdOpen color="white" fontSize="2.5rem" shake={true} onClick={burgerOpener}/></p>

                        </div>
					</div>
				</div>
			</div>
            <div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${Customer})`}}>
						<div className="inner1">
							<p className="p-projects">Web customer tracker</p>
              <span className="new-span">Spring Application</span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p className="p-projects">Web Customer Tracker uses Java, Springboot, Spring AOP, and SQL.</p>
                          <p className="p-projects"><MdOpen color="white" fontSize="2.5rem" rotate={true} onClick={customerOpener}/></p>

                        </div>
					</div>
				</div>
			</div>
			</div>
            </div>
            </Cunt>
        </>
    )
}

export default Slider



