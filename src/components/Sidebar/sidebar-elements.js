import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top:${({isOpen}) => (isOpen ? '0' : '100%')};
    
`;

export const CloseIcon = styled(FaTimes)`

    color: #fff;

`;


export const Icon = styled.div `

    position:absolute;
    top: 1.2rem;
    right:1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline:none;
`;


export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align:center;

    @media screen and (max-width: 480px) {
        grid-templates-rows: repeat(6, 60px);
    }


`

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration:none;
    list-style:none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor:pointer;
    transition:0.5s;
    position:relative;

    &:hover {
       
        transition: 0.2s ease-in-out;
    }
    

    &::after{
        position:absolute;
        content:"";
        top:50%;
        left: 40%;
       
        width: 20%;
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

export const SideBtnWrap = styled.div`
    display:flex;
    justify-content: center;

`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding:16px 64px;
    color: black;
    font-weight:600;
    font-size: 16px;
    outline:none;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }


`