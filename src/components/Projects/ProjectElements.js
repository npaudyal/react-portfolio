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

