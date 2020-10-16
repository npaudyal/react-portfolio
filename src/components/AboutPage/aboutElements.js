import styled from 'styled-components';





export const NameWrapper = styled.div`

    
  font-size:1vw;
    position:fixed;
    top:150px;
    left:150px;
 font-family: sans-serif;


@media screen and (max-width:1400px){
  font-size: 1vw;
  top:250px;
    left:100px;

}

@media screen and (max-width:992px){
  font-size: 1.25vw;
  top:250px;
    left:200px;
}
@media screen and (max-width:767px){
  font-size: 1.5vw;
  top:250px;
    left:200px;}

@media screen and (max-width:480px){
  font-size: 1.75vw;
  top:200px;
    left:50px;}

    @media screen and (max-width:320px){
  font-size: 1.75vw;
  top:100px;
    left:100px;}



`

export const Name = styled.h1`
font-size: 3vw;
margin-bottom: 10px;
color:white;
font-weight:500;
padding-left:400px;
    padding-top:10px;


`

export const SubText = styled.div`

 text-transform: uppercase;
  font-weight: 500;
  font-size: 1vw;
  color:white;
  margin-bottom:25px;
  padding-left:400px;
    padding-top:10px;
`

export const Para = styled.p`
    padding-left:400px;
    padding-top:10px;
    width:1400px;
    padding-right:50px;
    font-size: 1vw;
  line-height: 1.5em;
  font-weight:600;
  color:white;

`


export const CardContain = styled.div`
padding-top: 500px;
padding-left:700px;


`


export const CardWrapper = styled.div`
  box-shadow: 0 0 8px 2px rgba(255,255,255, 0.5);
  transition: 0.3s;
  width: 30%;
  height:30%;
  border-radius: 30px;
  
  position: absolute;
  color:white;
  display:flex;
  justify-content:center;

  &:hover {

    box-shadow: 0 0 16px 0 rgba(255,255,255,0.2);

  }
   
`

export const Container = styled.div`
 padding: 20px 16px;
 font-size:22px;
 font-weight: 600;
 height:20%;
 justify-content:center;


`



export const listContainer =styled.div`
 max-width:1000px;
 float:right;
 margin-top:5px;
 padding-top:50px;

`

export const listWrapper = styled.ul`
list-style-type: none;
margin-left: -30px;
padding-right: 20px;

`

export const listItem = styled.li`

line-height: 4;
  color: #aaa;
 

`



