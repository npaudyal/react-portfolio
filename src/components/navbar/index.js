import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,
     NavItem, NavLinks, NavBtn,  NavBtnLink} from './navbar-elements';

const Navbar = ({toggle}) => {
    return (
       
        <>
            <Nav>
           
                <NavbarContainer>
                    
                    
                    <NavLogo to="/">
                        Nischal
                    </NavLogo>
                    <MobileIcon onClick ={toggle}>
                        <FaBars />
                    </MobileIcon>
                    
                    
                    <NavMenu>
                        <NavItem>
                           
                            <NavLinks to="/about"
                          
                                                        
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/skills">Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/projects">Projects</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/terminal">Terminal</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
