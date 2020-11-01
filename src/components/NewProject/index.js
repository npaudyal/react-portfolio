
import React, {useState} from 'react'
import './newss.css'
import ParticlesBackground from '../particleComponent'
import Sidebar from'../Sidebar';
import Navbar from '../navbar';
import Jodi from '../../images2/Jodi.png'
import Scrumptious from '../../images/Scrumptious.png';
import Burger from '../../images/BurgerBuilder.png';
import Customer from '../../images/Customer.png';
import Ecommerce from '../../images/E-commerce.png';
import GRE from '../../images/GREAPP.png';
import Portfolio from '../../images/Portfolio.png';
import IDetector from '../../images/iDetector.png';
import Insta from '../../images/instagram.png';
import Task from '../../images/task_application.png';
import Weather from '../../images/Weather.png';
import styled from 'styled-components';

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
<div className="wrapper">
  <div className="cols">
			<div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" style ={{backgroundImage:`url(${Jodi})`}}>
						<div className="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
            <div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" style ={{backgroundImage:`url(${Scrumptious})`}}>
						<div className="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
            <div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" style ={{backgroundImage:`url(${Ecommerce})`}}>
						<div className="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
            <div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" style ={{backgroundImage:`url(${IDetector})`}}>
						<div className="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
            <div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" style ={{backgroundImage:`url(${Weather})`}}>
						<div className="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
            <div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" style ={{backgroundImage:`url(${Insta})`}}>
						<div className="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
            <div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" style ={{backgroundImage:`url(${Burger})`}}>
						<div className="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
            <div className="col" ontouchstart="this.classList.toggle('hover');">
				<div className="container">
					<div className="front" style ={{backgroundImage:`url(${Customer})`}}>
						<div className="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
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



