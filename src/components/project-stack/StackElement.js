import styled from 'styled-components';

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
    margin:0px;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap:16px;
    padding: 0 25px;

    @media screen and (max-width:1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
        padding:0 20px;
    }

`

export const Topich1 = styled.h1`
 
    color: white;
    

`