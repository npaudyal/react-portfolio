import styled from 'styled-components';
import {NavLink as LinkR} from 'react-router-dom';
import './index.css'


export const Nav = styled.nav`

   
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
   

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

`;

export const NavbarContainer = styled.div`

    display: flex;
    justify-content:space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding:0 12px;
    max-width:1700px;


`;
export const NavLogo = styled(LinkR)`
color: #fff;
justify-self:flex-start;
cursor: pointer;
position:relative;
font-size:1.5rem;
display:flex;
align-items: center;
margin-left:0;
text-decoration: none;
font-family: 'Raleway', sans-serif;
font-size: 35px;
font-weight:600;
transition:0.5s;


    &::after{
        position:absolute;
        content:"";
        top:100%;
        left: 0;
        width: 100%;
        background: white;
        height: 1px;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
    }
    &:hover::after{
        transform: scaleX(1);
        transform-origin: left;
    }


    

`;

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px) {
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%, 60%);
        font-size: 1.8rem;
        cursor:pointer;
        color: #fff;
    }

    @media screen and (max-width: 1024px) {
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%, 60%);
        font-size: 1.8rem;
        cursor:pointer;
        color: #fff;
    }

`;

export const NavMenu = styled.ul`
    display: flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right: -1400px;
    

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 1240px) {
        display: none;
    }

`;
export const NavItem = styled.li`
    height: 80px;
    
`;
export const NavLinks = styled(LinkR)`
   
    color: #fff;
    display: flex;
    position:relative;
    align-items: center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-weight:450;
    transition:0.5s;

    &::after{
        position:absolute;
        content:"";
        top:50%;
        left: 0;
        width: 100%;
        background: white;
        height: 1px;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
    }

   
    &:hover::after{
        transform: scaleX(1);
        transform-origin: left;
    }
    &.active {
        border-bottom: 1px solid white;
        
    }
   
`;

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;


    @media screen and (max-width: 768px) {
        display:none;
    }
    @media screen and (max-width: 1024px) {
        display:none;
    }
    @media screen and (max-width: 1268px) {
        display:none;
    }

`;


export const NavBtnLink = styled(LinkR)`
    border-radius:50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size:16px;
    font-family: 'Source Code Pro', monospace;
    outline:none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`


export const Icon = styled.div `

    position:absolute;
    top: 1.2rem;
    right:1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline:none;
`;
