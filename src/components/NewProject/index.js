
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
                 {/* <div className="container">
  <div className="item"><img src ={Jodi} /></div>
  <div className="item"><img src ={Jodi} /></div>
  <div className="item"><img src ={Jodi} /></div>
  <div className="item"><img src ={Jodi} /></div>
  <div className="item"><img src ={Jodi} /></div>
  <div className="item"><img src ={Jodi} /></div>
  <div className="item"><img src ={Jodi} /></div>
  <div className="item"><img src ={Jodi} /></div>
  <div className="item"><img src ={Jodi} /></div>
</div> */}
<Cunt>
<div className="wrapper1">
  <div className="cols1">
			<div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${Jodi})`}}>
						<div className="inner1">
							<p>Jodi</p>
              <span>On play store</span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p>Jodi is a dating application built using flutter and firebase.</p>
                          <p><MdOpen color="white" fontSize="2.5rem" shake={true} onClick={jodiOpener}/></p>
                          
                        </div>
                        
					</div>
				</div>
			</div>
            <div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${Scrumptious})`}}>
						<div className="inner1">
							<p>Scrumptious</p>
              <span>A Recipe Planner</span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p>Scrumptious is a recipe planner application built using MERN stack.</p>
                          <p><MdOpen color="white" fontSize="2.5rem" rotate={true} onClick={ScrumOpener}/></p>
                        </div>
					</div>
				</div>
			</div>
            <div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${Ecommerce})`}}>
						<div className="inner1">
							<p>E-commerce</p>
              <span>An Online Shopping Platform </span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p>E-commerce uses various features like StripeJS for payment and  many more.</p>
                          <p><MdOpen color="white" fontSize="2.5rem" beat={true} onClick={eCommerceOpener}/></p>

                        </div>
					</div>
				</div>
			</div>
            <div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${IDetector})`}}>
						<div className="inner1">
							<p>iDetector</p>
              <span>VandyHacks Winner</span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p>iDetector is a gesture detecting application built using OpenCV(Python).</p>
                          <p><MdOpen color="white" fontSize="2.5rem" shake={true} onClick={iDetectorOpener}/></p>

                        </div>
					</div>
				</div>
			</div>
            <div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${Weather})`}}>
						<div className="inner1">
							<p>Weather Man</p>
              <span>A Weather App</span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p>Weather Application built using NodeJs and MongoDB.</p>
                          <p><MdOpen color="white" fontSize="2.5rem" rotate={true} onClick={weatherOpener}/></p>

                        </div>
					</div>
				</div>
			</div>
            <div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${Insta})`}}>
						<div className="inner1">
							<p>Instagram Clone</p>
              <span>Social Media</span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p>Instagram clone is a mobile application built using flutter and firebase.</p>
                          <p><MdOpen color="white" fontSize="2.5rem" beat={true} onClick={instaOpener}/></p>

                        </div>
					</div>
				</div>
			</div>
            <div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${Burger})`}}>
						<div className="inner1">
							<p>Burger Builder</p>
              <span>Food Ordering App</span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p>Burger builder is built using ReactJS, NodeJS, and Firebase.</p>
                          <p><MdOpen color="white" fontSize="2.5rem" shake={true} onClick={burgerOpener}/></p>

                        </div>
					</div>
				</div>
			</div>
            <div className="col1" ontouchstart="this.classList.toggle('hover');">
				<div className="container1">
					<div className="front1" style ={{backgroundImage:`url(${Customer})`}}>
						<div className="inner1">
							<p>Web customer tracker</p>
              <span>Spring Application</span>
						</div>
					</div>
					<div className="back1">
						<div className="inner1">
						  <p>Web Customer Tracker uses Java, Springboot, Spring AOP, and SQL.</p>
                          <p><MdOpen color="white" fontSize="2.5rem" rotate={true} onClick={customerOpener}/></p>

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



