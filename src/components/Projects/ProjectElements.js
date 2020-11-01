import styled from 'styled-components';


export const ProjectsContainer = styled.div`
    max-width:1000px;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap:46px;
    padding:0 7%;
    margin-top:5%;
    position:absolute;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 468px) {
        grid-template-columns: 1fr;
    }

`

export const StackContainer = styled.div`
   height:800px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: #010606;

    @media screen and (max-width:768px) {
        height:1100px;
 
    }

    @media screen and (max-width:480px) {
        height:1300px;
 
    }
`

export const StackWrapper = styled.div`
    max-width:1000px;
    position:relative;
    margin:0px;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap:26px;
    justify-content:center;

    @media screen and (max-width:1000px) {
        grid-template-columns: 1fr 1fr 1fr;
        padding:0 20px;
        padding-top:0;
        max-width:500px;
        position:relative;
    }

   

    @media screen and (max-width:768px) {
        grid-template-columns: 1fr 1fr;
        
        padding:0 20px;
        
        max-width:300px;
        
    }
    @media screen and (max-width:375px) {
        grid-template-columns: 1fr 1fr;
        padding-top:0;
        max-width:300px;
        
    }


`

