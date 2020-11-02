import styled from 'styled-components';

export const SkillsContainer = styled.div`
    
	align-items:left;
	height: 50vh;
	width:50%;
	position: absolute;
	z-index:1;
		

`
export const GlobeContainer = styled.div`
	justify-content:right;
	padding-top:0;
	position: absolute;
	padding-left:30%;
	padding-right:70%;
	border-radius:50%;

	@media screen and (max-device-width: 480px) and (orientation: portrait){
  
    top:40%;
    left: 0;
    width: 100%;
    height:50%;
	padding:0;
  
}
	
	
`
